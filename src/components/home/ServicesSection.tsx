import Icon from "@/components/ui/Icon";
import Section from "@/components/motion/Section";
import { Reveal } from "@/components/motion/Reveal";
import { button, container, eyebrow } from "@/components/ui/styles";
import { services } from "@/data/home";

export default function ServicesSection() {
  return (
    <Section id="services" theme="dark" curve className="dot-grid pt-[14vw] pb-32 md:pt-[9vw]">
      <div className={container}>
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className={`${eyebrow} text-silver`}>Services</p>
            <h2 className="mt-4 text-[12vw] leading-[0.95] font-semibold tracking-[-0.05em] text-white md:text-[6vw] xl:text-[84px]">
              {services.heading}{" "}
              <em className="serif-soft font-serif font-light text-neon italic">{services.accent}</em>
            </h2>
          </div>
          <p className="max-w-sm text-body text-fog md:col-span-4">{services.body}</p>
        </Reveal>

        <Reveal as="ul" stagger className="mt-14 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map(({ icon, name, text, proof }, i) => (
            <li key={name} className="chamfer chamfer-lg chamfer-frame bg-steel [--frame-cut:28px]">
              <div className="chamfer flex h-full flex-col bg-ink p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="chamfer chamfer-sm flex h-12 w-12 items-center justify-center bg-raised text-neon">
                    <Icon name={icon} size={24} />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.06em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 text-[26px] leading-tight font-semibold tracking-[-0.03em] text-white">{name}</h3>
                <p className="mt-3 text-body text-fog">{text}</p>
                <p className="mt-auto pt-8 font-mono text-[11px] tracking-[0.04em] text-ash uppercase">
                  <span className="text-neon">Built: </span>
                  {proof}
                </p>
              </div>
            </li>
          ))}
          <li className="chamfer chamfer-lg bg-neon">
            <a href="#contact" className="group flex h-full min-h-64 flex-col justify-between p-6 text-ink md:p-8">
              <Icon
                name="arrow-up-right"
                size={32}
                className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
              />
              <span>
                <span className="block text-[26px] leading-tight font-semibold tracking-[-0.03em]">
                  Something else?
                </span>
                <span className="mt-3 block text-body">Send a short note about it, and we can talk it through.</span>
              </span>
            </a>
          </li>
        </Reveal>

        <Reveal className="mt-10">
          <a href="#experience" className={button.outline}>
            See my experience <Icon name="arrow-right" size={14} />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
