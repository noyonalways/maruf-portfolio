export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "divider" };

export type FrontmatterValue = string | number | boolean;
export type Frontmatter = Record<string, FrontmatterValue>;

export type Faq = { question: string; answer: string };

function parseValue(value: string): FrontmatterValue {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value !== "" && /^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

export function parseFrontmatter(raw: string): {
  data: Frontmatter;
  content: string;
} {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, content: normalized.trim() };

  const data: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf(":");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    data[key] = parseValue(value);
  }

  return { data, content: normalized.slice(match[0].length) };
}

export function extractFaqs(markdown: string): {
  content: string;
  faqs?: Faq[];
} {
  const blocks: string[] = [];
  const content = markdown.replace(
    /:::faq\s*\n([\s\S]*?)\n:::/g,
    (_, body: string) => {
      blocks.push(body);
      return "";
    },
  );
  if (!blocks.length) return { content };

  const faqs: Faq[] = [];
  for (const block of blocks) {
    let question = "";
    let answer: string[] = [];
    const commit = () => {
      if (question && answer.length) {
        faqs.push({
          question: question.trim(),
          answer: answer.join(" ").trim(),
        });
      }
    };
    for (const line of block.split("\n")) {
      const trimmed = line.trim();
      if (/^Q:\s*/i.test(trimmed)) {
        commit();
        question = trimmed.replace(/^Q:\s*/i, "");
        answer = [];
      } else if (/^A:\s*/i.test(trimmed)) {
        answer.push(trimmed.replace(/^A:\s*/i, ""));
      } else if (trimmed && answer.length) {
        answer.push(trimmed);
      }
    }
    commit();
  }

  return { content, faqs: faqs.length ? faqs : undefined };
}

export function parseMarkdown(markdown: string): ContentBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ContentBlock[] = [];
  let i = 0;

  const isBlockStart = (value: string) =>
    /^(#{1,6})\s+/.test(value) ||
    value.startsWith(">") ||
    value.startsWith("```") ||
    /^[-*+]\s+/.test(value) ||
    /^\d+[.)]\s+/.test(value) ||
    /^(-{3,}|\*{3,}|_{3,})$/.test(value);

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (!trimmed) {
      i++;
      continue;
    }

    const fence = trimmed.match(/^```(\w*)/);
    if (fence) {
      const language = fence[1] || "text";
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", language, code: code.join("\n") });
      continue;
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push({ type: "divider" });
      i++;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      blocks.push({
        type: heading[1].length <= 2 ? "heading" : "subheading",
        text: heading[2].trim(),
      });
      i++;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoted: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoted.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      const callout = quoted[0]?.match(
        /^\[!(NOTE|TIP|INFO|WARNING|IMPORTANT)\]\s*(.*)$/i,
      );
      if (callout) {
        const title = callout[2].trim();
        blocks.push({
          type: "callout",
          ...(title ? { title } : {}),
          text: quoted.slice(1).join(" ").trim(),
        });
      } else {
        const body = [...quoted];
        let attribution: string | undefined;
        const last = body[body.length - 1]?.trim() ?? "";
        if (/^(—|--)\s?/.test(last)) {
          attribution = last.replace(/^(—|--)\s?/, "").trim();
          body.pop();
        }
        blocks.push({
          type: "quote",
          text: body.join(" ").trim(),
          ...(attribution ? { attribution } : {}),
        });
      }
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].trim().replace(/^[-*+]\s+/, ""));
        i++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    if (/^\d+[.)]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
        items.push(lines[i].trim().replace(/^\d+[.)]\s+/, ""));
        i++;
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length) {
      const current = lines[i].trim();
      if (!current || isBlockStart(current)) break;
      paragraph.push(current);
      i++;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}
