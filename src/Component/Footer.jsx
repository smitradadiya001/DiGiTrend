import React from "react";

const FooterCta = () => {
  return (
    <footer className="relative overflow-hidden bg-amber-100 text-black">
      {/* Big circle background */}
      <div className="pointer-events-none absolute -top-0 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-amber-200/80 z-[-1]"   />

      {/* Top row: left contact, center CTA text+button, right locations */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-start md:justify-between md:py-20">
        {/* Left: contact */}
        <div className="space-y-3 text-sm md:text-base">
          <p className="font-semibold uppercase tracking-[0.2em]">Contact</p>
          <div className="space-y-1">
            <a
              href="mailto:hello@digitrend.com"
              className="block text-base md:text-lg font-semibold underline decoration-black/30 underline-offset-4 hover:decoration-black"
            >
              hello@digitrend.com
            </a>
            <a
              href="tel:+910000000000"
              className="block text-sm md:text-base font-medium hover:text-black/70"
            >
              +91 00000 00000
            </a>
          </div>
        </div>

        {/* Center: big sentence + button */}
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-lg md:text-2xl font-semibold">
            Got a project? Want to collaborate?
          </p>
          <button className="rounded-full bg-amber-900 px-7 py-3 text-sm md:text-base font-semibold text-amber-50 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-amber-800">
            Discuss your project
          </button>
        </div>

        {/* Right: locations */}
        <div className="flex flex-col gap-6 text-right text-xs md:text-sm">
          <div className="space-y-1">
            <p className="font-semibold uppercase tracking-[0.2em]">
              Indonesia
            </p>
            <p className="leading-relaxed">
              Jln. Bambu No. 375
              <br />
              Samarinda, Kalimantan Timur
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold uppercase tracking-[0.2em]">
              Hong Kong
            </p>
            <p className="leading-relaxed">
              60 Ya Fung Sung
              <br />
              San Tsuen, 75129
            </p>
          </div>
        </div>
      </div>

      {/* Thin divider row with copyright + terms + socials */}
      <div className="relative  px-4 pb-4 pt-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-[11px] md:flex-row md:text-xs">
          <p>© {new Date().getFullYear()} DigiTrend Studio. All rights reserved.</p>

          <button className="underline decoration-black/30 underline-offset-4 hover:decoration-black">
            Terms &amp; Conditions
          </button>

          <div className="flex items-center gap-3 font-semibold">
            <a href="#" className="hover:text-black/70">
              Bē
            </a>
            <a href="#" className="hover:text-black/70">
              Instagram
            </a>
            <a href="#" className="hover:text-black/70">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Huge “LET’S WORK TOGETHER” bar */}
      <div className="  text-black-300">
        <div className="mx-auto max-w-6xl px-4 py-4 md:py-6">
          <p className="text-center text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-[5.2rem]">
            LET&apos;S WORK TOGETHER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCta;
