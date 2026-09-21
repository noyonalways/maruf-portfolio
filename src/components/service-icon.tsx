import {
  CodeXmlIcon,
  MegaphoneIcon,
  PaletteIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconName } from "@/content/services";

export const serviceIconMap: Record<ServiceIconName, LucideIcon> = {
  megaphone: MegaphoneIcon,
  palette: PaletteIcon,
  code: CodeXmlIcon,
  workflow: WorkflowIcon,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = serviceIconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
