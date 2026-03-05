import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const FooterCta = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative z-10 overflow-hidden bg-blue-900/60 text-black">
      {/* Big circle background */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-[-1] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#31394e1d] sm:h-[420px] sm:w-[420px] md:h-[510px] md:w-[510px]" />

      {/* Top row: left contact, center CTA text+button, right locations */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-10 text-center md:flex-row md:items-start md:justify-between md:gap-10 md:py-20 md:text-left">
        {/* Left: contact */}
        <div className="w-full max-w-xs space-y-3 text-sm md:max-w-none md:text-base">
          <p className="font-semibold uppercase tracking-[0.2em]">Contact</p>
          <div className="space-y-1">
            <a
              href="mailto:hello@digitrend.com"
              className="block text-base font-semibold underline decoration-black/30 underline-offset-4 hover:decoration-black md:text-lg"
            >
              hello@digitrend.com
            </a>
            <a
              href="tel:+910000000000"
              className="block text-sm font-medium hover:text-black/70 md:text-base"
            >
              +91 94281 63116
            </a>
          </div>
        </div>

        {/* Center: big sentence + button */}
        <div className="flex w-full max-w-md flex-col items-center gap-5 text-center">
          <p className="text-lg font-semibold md:text-2xl">
            Got a project? Want to collaborate?
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="w-20px rounded-full bg-amber-900 px-7 py-3 text-sm font-semibold text-amber-50 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-amber-800 sm:w-auto md:text-base"
          >
            Discuss your project
          </button>
        </div>

        {/* Right: locations */}
        <div className="w-full max-w-xs text-center text-xs md:max-w-none md:text-right md:text-sm">
          <div className="space-y-1">
            <p className="font-semibold uppercase tracking-[0.2em]">
              711-Silver Hights
            </p>
            <p className="leading-relaxed">
              near mavdi chowk
              <br />
              Rajkot-360004
            </p>
          </div>
        </div>
      </div>

      {/* Thin divider row with copyright + terms + socials */}
      <div className="relative px-4 pb-0 pt-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[11px] md:flex-row md:text-xs">
          <p>&copy; {new Date().getFullYear()} DigiTrend Solution. All rights reserved.</p>

          <button className="underline decoration-black/30 underline-offset-4 hover:decoration-black">
            Terms &amp; Conditions
          </button>

          <div className="flex items-center gap-2 font-semibold">
            <a
              href="https://www.instagram.com/digi_trend_rajkot?igsh=ZXJycnhidzR6cGp0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/10"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/digi-trend-it/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Huge "LET'S WORK TOGETHER" bar (oversized + cropped like screenshot) */}
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex h-[72px] items-end sm:h-[90px] md:h-[120px] lg:h-[150px]">
            <p className="w-full whitespace-nowrap translate-y-[6%] text-center font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(30px,9.5vw,90px)] md:translate-y-[18%] md:text-[clamp(64px,10.5vw,190px)]">
              LET&apos;S WORK TOGETHER
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCta;
