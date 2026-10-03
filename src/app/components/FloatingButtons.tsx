"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, BriefcaseBusiness, GraduationCap, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "918587020020";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello World Global Manpower, I would like to know more about your services."
)}`;

export default function FloatingButtons() {
  const [russiaOpen, setRussiaOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          RUSSIA SERVICES — PREMIUM FLOATING CONTROL
      ===================================================== */}
      <div className="fixed right-4 top-1/2 z-[70] -translate-y-1/2 sm:right-6">
        <div className="relative flex flex-col items-end gap-3">
          {/* QUICK ACTIONS */}
          <div
            className={`flex flex-col items-end gap-2.5 transition-all duration-300 ease-out ${
              russiaOpen
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-6 opacity-0"
            }`}
          >
            <Link
              href="/jobs"
              className="group flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/15 bg-[#061B3A]/95 px-4 py-3.5 text-xs font-black text-white shadow-[0_15px_45px_rgba(6,27,58,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:bg-[#0647B8]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#08C7D9]/10 ring-1 ring-[#08C7D9]/20">
                <BriefcaseBusiness
                  size={17}
                  className="text-[#08C7D9]"
                />
              </span>

              <span className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#08C7D9]">
                  Career
                </span>
                <span className="mt-0.5">Jobs in Russia</span>
              </span>

              <span className="ml-auto text-white/40 transition group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </Link>

            <Link
              href="/mbbs-russia"
              className="group flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/15 bg-[#061B3A]/95 px-4 py-3.5 text-xs font-black text-white shadow-[0_15px_45px_rgba(6,27,58,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:bg-[#0647B8]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#08C7D9]/10 ring-1 ring-[#08C7D9]/20">
                <GraduationCap
                  size={18}
                  className="text-[#08C7D9]"
                />
              </span>

              <span className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#08C7D9]">
                  Education
                </span>
                <span className="mt-0.5">MBBS in Russia</span>
              </span>

              <span className="ml-auto text-white/40 transition group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </Link>
          </div>

          {/* RUSSIA BUTTON */}
          <button
            type="button"
            onClick={() => setRussiaOpen((value) => !value)}
            aria-label="Open Russia services"
            aria-expanded={russiaOpen}
            className="group relative h-[82px] w-[62px] overflow-hidden rounded-[20px] border-2 border-white bg-white shadow-[0_18px_50px_rgba(6,27,58,0.28)] transition-all duration-300 hover:-translate-x-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#08C7D9]/30 sm:h-[94px] sm:w-[70px]"
          >
            {/* FLAG */}
            <span className="absolute inset-0 flex flex-col">
              <span className="h-1/3 bg-white" />
              <span className="h-1/3 bg-[#0B57B7]" />
              <span className="h-1/3 bg-[#D52B1E]" />
            </span>

            {/* SUBTLE GLASS OVERLAY */}
            <span className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10" />

            {/* LABEL */}
            <span className="absolute bottom-0 left-0 right-0 bg-[#061B3A]/95 px-1 py-1.5 text-center text-[8px] font-black uppercase tracking-[0.16em] text-white">
              Russia
            </span>

            {/* CYAN ACCENT */}
            <span className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-[#08C7D9] shadow-[0_0_12px_rgba(8,199,217,0.9)]" />

            {/* ACTIVE INDICATOR */}
            <span
              className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-[#08C7D9] shadow-[0_0_12px_rgba(8,199,217,0.95)] transition-all ${
                russiaOpen ? "scale-125" : "animate-pulse"
              }`}
            />

            {!russiaOpen && (
              <span className="absolute inset-0 rounded-[18px] border-2 border-[#08C7D9]/50 animate-ping" />
            )}
          </button>

          {/* CLOSE */}
          {russiaOpen && (
            <button
              type="button"
              onClick={() => setRussiaOpen(false)}
              aria-label="Close Russia services"
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white text-[#061B3A] shadow-lg transition hover:scale-110 hover:bg-slate-100"
            >
              <X size={12} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>

      {/* =====================================================
          WHATSAPP + CALL — PREMIUM ACTION DOCK
      ===================================================== */}
      <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {/* WHATSAPP */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with World Global Manpower on WhatsApp"
          className="group relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/80 bg-[#25D366] shadow-[0_12px_35px_rgba(37,211,102,0.38)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:h-[62px] sm:w-[62px]"
        >
          {/* White inner circle prevents logo colour conflict */}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm sm:h-11 sm:w-11">
            <Image
              src="/whatsapp-logo.png"
              alt="WhatsApp"
              width={30}
              height={30}
              className="h-[30px] w-[30px] object-contain sm:h-[32px] sm:w-[32px]"
            />
          </span>

          {/* ONLINE DOT */}
          <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#16A34A]" />

          {/* TOOLTIP */}
          <span className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-xl border border-white/10 bg-[#061B3A]/95 px-3.5 py-2.5 text-xs font-black text-white opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>

        {/* CALL */}
        <a
          href="tel:+919312406166"
          aria-label="Call World Global Manpower"
          className="group relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/80 bg-[#0647B8] text-white shadow-[0_12px_35px_rgba(6,71,184,0.34)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#0647B8]/30 sm:h-[62px] sm:w-[62px]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <Phone size={22} strokeWidth={2.4} />
          </span>

          {/* TOOLTIP */}
          <span className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-xl border border-white/10 bg-[#061B3A]/95 px-3.5 py-2.5 text-xs font-black text-white opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100">
            Call Us
          </span>
        </a>

        {/* SMALL BRAND LABEL */}
        <div className="mt-0.5 hidden rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-slate-500 shadow-sm backdrop-blur sm:block">
          World Global
        </div>
      </div>

      {/* ACCESSIBLE FALLBACK ICON — keeps MessageCircle imported/available
          for future WhatsApp branding changes without affecting layout */}
      <span className="sr-only">
        <MessageCircle aria-hidden="true" />
      </span>
    </>
  );
}
