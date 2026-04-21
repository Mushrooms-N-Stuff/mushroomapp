"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "./Icons";

export default function EmailOptin() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Hook into ESP (ConvertKit, Mailchimp, etc.) here.
    setSubmitted(true);
  }

  return (
    <section className="container-editorial py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-sand border border-forest/10 p-10 lg:p-20">
        {/* Subtle decorative rule — premium, not spammy */}
        <div className="absolute top-10 right-10 hidden lg:flex items-center gap-2 text-forest/40">
          <span className="w-10 h-px bg-forest/20" />
          <span className="text-[0.7rem] uppercase tracking-eyebrow">Free</span>
        </div>

        <div className="max-w-2xl">
          <p className="eyebrow mb-5">The starter guide</p>
          <h2 className="font-serif text-h1 text-forest">
            Functional Mushrooms Starter Guide.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-charcoal/70">
            Learn which mushroom supports focus, stress, energy, immunity, and
            longevity. One email. No hype. Unsubscribe anytime.
          </p>

          {submitted ? (
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-4 rounded-full bg-forest/[0.04] border border-forest/10 text-forest">
              <CheckIcon size={18} />
              <span className="text-[0.95rem]">
                Check your inbox — the guide is on its way.
              </span>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg"
            >
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-cream border border-forest/15 text-[0.95rem] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-forest/50 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get the Guide
                <ArrowRightIcon size={16} className="ml-2" />
              </button>
            </form>
          )}

          <p className="mt-5 text-[0.78rem] text-charcoal/45">
            We only send research-backed insights. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
