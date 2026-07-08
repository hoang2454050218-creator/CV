import type { Content } from "@/content/types";
import { Reveal } from "@/components/reveal";

export function Skills({ content }: { content: Content }) {
  const s = content.skills;

  return (
    <section id="skills" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="container-page section-pad">
        <Reveal>
          <h2 className="heading-type text-[length:var(--text-h2)] text-ink">{s.heading}</h2>
          <p className="measure mt-5 text-muted">{s.intro}</p>
        </Reveal>

        <dl className="mt-12 border-t border-line-strong">
          {s.groups.map((group) => (
            <div
              key={group.name}
              className="grid gap-x-8 gap-y-3 border-b border-line py-6 md:grid-cols-[14rem_1fr]"
            >
              <dt className="font-semibold text-ink">{group.name}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono-label rounded-md border border-line bg-bg px-2.5 py-1 text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
