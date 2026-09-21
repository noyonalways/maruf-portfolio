import { clients, stats } from "@/content/company";

export function TrustMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="border-y bg-muted/25 py-10">
      <div className="container-page flex flex-col gap-8">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 text-center">
              <dt className="order-2 text-xs tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="order-1 font-heading text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-4">
          <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Trusted by growing teams
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul className="flex w-max animate-marquee items-center gap-10 pr-10">
              {doubled.map((client, index) => (
                <li
                  key={`${client}-${index}`}
                  className="font-heading text-lg font-semibold whitespace-nowrap text-muted-foreground/70"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
