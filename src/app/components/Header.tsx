"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "./LanguageContext";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setJobsOpen(false);
  };

  const closeMenu = () => {
    setMobileMenu(false);
    setJobsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="World Global Manpower"
            width={58}
            height={58}
            className="h-14 w-14 object-contain"
            priority
          />

          <div className="hidden sm:block">
            <div className="text-[17px] font-black leading-tight tracking-tight text-[#063B8F]">
              WORLD GLOBAL
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#08AFC4]">
              Manpower Pvt. Ltd.
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">

          {/* HOME */}
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            {t.nav.home}
          </Link>

          {/* JOBS DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setJobsOpen(!jobsOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
            >
              {t.nav.jobs}

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  jobsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {jobsOpen && (
              <div className="absolute left-0 top-full mt-4 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">

                <Link
                  href="/jobs"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-bold text-[#0647B8] hover:bg-[#F1F8FF]"
                >
                  {t.nav.allJobs}
                </Link>

                <Link
                  href="/jobs/scanner-barcode-operator"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.scanner}
                </Link>

                <Link
                  href="/jobs/packing-worker"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.packing}
                </Link>

                <Link
                  href="/jobs/construction-worker"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.construction}
                </Link>

                <Link
                  href="/jobs/general-labour"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.labour}
                </Link>

                <Link
                  href="/jobs/driver"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.driver}
                </Link>

                <Link
                  href="/jobs/cook"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.cook}
                </Link>

                <Link
                  href="/jobs/tailor"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  {t.nav.tailor}
                </Link>
              </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link
            href="/mbbs-russia"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            {t.nav.mbbs}
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            {t.nav.about}
          </Link>

          <Link
            href="/gallery"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            {t.nav.gallery}
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            {t.nav.contact}
          </Link>

          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">

            <button
              onClick={() => changeLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                language === "en"
                  ? "bg-[#0647B8] text-white"
                  : "text-slate-500 hover:text-[#0647B8]"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => changeLanguage("hi")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                language === "hi"
                  ? "bg-[#0647B8] text-white"
                  : "text-slate-500 hover:text-[#0647B8]"
              }`}
            >
              HI
            </button>

            <button
              onClick={() => changeLanguage("ru")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                language === "ru"
                  ? "bg-[#0647B8] text-white"
                  : "text-slate-500 hover:text-[#0647B8]"
              }`}
            >
              RU
            </button>

          </div>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0647B8] text-white lg:hidden"
          aria-label="Open menu"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              {t.nav.home}
            </Link>

            {/* MOBILE JOBS */}
            <button
              onClick={() => setJobsOpen(!jobsOpen)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              {t.nav.jobs}

              <ChevronDown
                size={18}
                className={jobsOpen ? "rotate-180" : ""}
              />
            </button>

            {jobsOpen && (
              <div className="ml-4 border-l-2 border-[#08BFD0] pl-3">

                <Link
                  href="/jobs"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm font-bold text-[#0647B8]"
                >
                  {t.nav.allJobs}
                </Link>

                <Link
                  href="/jobs/scanner-barcode-operator"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.scanner}
                </Link>

                <Link
                  href="/jobs/packing-worker"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.packing}
                </Link>

                <Link
                  href="/jobs/construction-worker"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.construction}
                </Link>

                <Link
                  href="/jobs/general-labour"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.labour}
                </Link>

                <Link
                  href="/jobs/driver"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.driver}
                </Link>

                <Link
                  href="/jobs/cook"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.cook}
                </Link>

                <Link
                  href="/jobs/tailor"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  {t.nav.tailor}
                </Link>

              </div>
            )}

            {/* MOBILE LINKS */}
            <Link
              href="/mbbs-russia"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              {t.nav.mbbs}
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              {t.nav.about}
            </Link>

            <Link
              href="/gallery"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              {t.nav.gallery}
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              {t.nav.contact}
            </Link>

            {/* MOBILE LANGUAGE */}
            <div className="mt-3 flex gap-2 border-t border-slate-100 pt-4">

              <button
                onClick={() => changeLanguage("en")}
                className={`rounded-full px-4 py-2 text-xs font-bold ${
                  language === "en"
                    ? "bg-[#0647B8] text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                English
              </button>

              <button
                onClick={() => changeLanguage("hi")}
                className={`rounded-full px-4 py-2 text-xs font-bold ${
                  language === "hi"
                    ? "bg-[#0647B8] text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                हिन्दी
              </button>

              <button
                onClick={() => changeLanguage("ru")}
                className={`rounded-full px-4 py-2 text-xs font-bold ${
                  language === "ru"
                    ? "bg-[#0647B8] text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                Русский
              </button>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}