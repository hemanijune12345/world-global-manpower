"use client";

import { Phone, BriefcaseBusiness, GraduationCap, X } from "lucide-react";
import { useState } from "react";

export default function FloatingButtons() {
  const [russiaOpen, setRussiaOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          RUSSIA FLOATING FLAG
      ===================================================== */}
      <div className="fixed right-4 top-1/2 z-[70] -translate-y-1/2 sm:right-5">
        <div className="relative flex flex-col items-end gap-3">

          {/* QUICK ACTIONS */}
          <div
            className={`flex flex-col items-end gap-2 transition-all duration-300 ${
              russiaOpen
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-5 opacity-0"
            }`}
          >
            {/* JOBS */}
            <a
              href="/jobs"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-[#061B3A]/95 px-4 py-3 text-xs font-black text-white shadow-xl backdrop-blur-md transition hover:-translate-x-1 hover:bg-[#0647B8]"
            >
              <BriefcaseBusiness
                size={16}
                className="text-[#08C7D9]"
              />

              Jobs in Russia
            </a>

            {/* MBBS */}
            <a
              href="/mbbs-russia"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-[#061B3A]/95 px-4 py-3 text-xs font-black text-white shadow-xl backdrop-blur-md transition hover:-translate-x-1 hover:bg-[#0647B8]"
            >
              <GraduationCap
                size={16}
                className="text-[#08C7D9]"
              />

              MBBS in Russia
            </a>
          </div>

          {/* RUSSIA FLAG BUTTON */}
          <button
            type="button"
            onClick={() => setRussiaOpen((value) => !value)}
            aria-label="Russia services"
            aria-expanded={russiaOpen}
            className="group relative h-[76px] w-[58px] overflow-hidden rounded-2xl border-2 border-white bg-white shadow-[0_15px_40px_rgba(6,27,58,0.3)] transition-all duration-300 hover:-translate-x-1 hover:scale-105 sm:h-[88px] sm:w-[66px]"
          >
            {/* FLAG */}
            <span className="absolute inset-0 flex flex-col">
              <span className="h-1/3 bg-white" />
              <span className="h-1/3 bg-[#0B57B7]" />
              <span className="h-1/3 bg-[#D52B1E]" />
            </span>

            {/* DARK LABEL */}
            <span className="absolute bottom-0 left-0 right-0 bg-[#061B3A]/90 px-1 py-1.5 text-center text-[8px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              Russia
            </span>

            {/* CYAN GLOW */}
            <span className="absolute -left-1 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-[#08C7D9] blur-[2px]" />

            {/* PULSE RING */}
            {!russiaOpen && (
              <span className="absolute inset-0 rounded-2xl border-2 border-[#08C7D9]/60 animate-ping" />
            )}
          </button>

          {/* CLOSE */}
          {russiaOpen && (
            <button
              type="button"
              onClick={() => setRussiaOpen(false)}
              aria-label="Close Russia services"
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#061B3A] shadow-md"
            >
              <X size={11} />
            </button>
          )}
        </div>
      </div>

      {/* =====================================================
          WHATSAPP + CALL
      ===================================================== */}
      <div className="fixed bottom-5 right-5 z-[80] flex flex-col gap-3">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/919312406166"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        >
          <span className="text-xs font-black">
            WA
          </span>

          {/* TOOLTIP */}
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-[#061B3A] px-3 py-2 text-xs font-black text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
            WhatsApp
          </span>
        </a>

        {/* CALL */}
        <a
          href="tel:+919312406166"
          aria-label="Call World Global Manpower"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0647B8] text-white shadow-[0_12px_30px_rgba(6,71,184,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        >
          <Phone size={22} />

          {/* TOOLTIP */}
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-[#061B3A] px-3 py-2 text-xs font-black text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
            Call Us
          </span>
        </a>

      </div>
    </>
  );
}