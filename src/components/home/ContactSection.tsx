"use client";

import Reveal from "@/components/ui/Reveal";
import { personal } from "@/data/personal";

export default function ContactSection() {
  const { contact } = personal;

  return (
    <section className="py-section-gap scroll-mt-24" id="contact">
      <Reveal className="bg-charcoal-deep dark:bg-surface-container rounded-xl p-8 md:p-16 text-white dark:text-on-surface grid md:grid-cols-2 gap-12 items-center ring-1 ring-inset ring-white/5">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="font-display text-display leading-tight">
            Ready to build <br />
            <span className="text-primary-fixed">{contact.headingAccent}</span>
          </h2>
          <p className="font-body-md text-body-md text-outline-variant dark:text-on-surface-variant max-w-md">
            {contact.body}
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-fixed">
                mail
              </span>
              <span className="font-label-md text-label-md">
                {contact.email}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-fixed">
                location_on
              </span>
              <span className="font-label-md text-label-md">
                {contact.location}
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="space-y-4 bg-white/5 p-6 md:p-8 rounded-lg backdrop-blur-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4">
            {[
              { label: "Full Name", type: "text", placeholder: "Jane Cooper" },
              {
                label: "Email Address",
                type: "email",
                placeholder: "jane@company.com",
              },
            ].map(({ label, type, placeholder }) => (
              <div key={label} className="space-y-1">
                <label className="font-label-md text-label-md text-outline-variant uppercase text-[10px] tracking-widest">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary-fixed focus:ring-0 text-body-md py-2 px-0 transition-colors placeholder:text-outline-variant/20"
                />
              </div>
            ))}
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-outline-variant uppercase text-[10px] tracking-widest">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary-fixed focus:ring-0 text-body-md py-2 px-0 transition-colors placeholder:text-outline-variant/20 resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-fixed text-on-primary-fixed py-4 rounded font-label-md text-label-md hover:bg-primary-fixed-dim transition-all mt-4"
          >
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  );
}
