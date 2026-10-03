"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

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
            Home
          </Link>

          {/* JOBS DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setJobsOpen(!jobsOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
            >
              Jobs in Russia

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
                  All Jobs
                </Link>

                <Link
                  href="/jobs/scanner-barcode-operator"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  Scanner / Barcode Operator
                </Link>

                <Link
                  href="/jobs/packing-worker"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  Packing Worker
                </Link>

                <Link
                  href="/jobs/construction-worker"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  Construction Worker
                </Link>

                <Link
                  href="/jobs/general-labour"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  General Labour
                </Link>

                <Link
                  href="/jobs/driver"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  Driver
                </Link>

                <Link
                  href="/jobs/cook"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  Cook
                </Link>

                <Link
                  href="/jobs/tailor"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-[#F1F8FF]"
                >
                  Tailor
                </Link>
              </div>
            )}
          </div>

          {/* MBBS */}
          <Link
            href="/mbbs-russia"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            MBBS in Russia
          </Link>

          {/* IMPORT & EXPORT */}
          <Link
            href="/import-export"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            Import & Export
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            About Us
          </Link>

          {/* GALLERY */}
          <Link
            href="/gallery"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            Gallery
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 transition hover:text-[#0647B8]"
          >
            Contact
          </Link>
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

            {/* HOME */}
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              Home
            </Link>

            {/* MOBILE JOBS */}
            <button
              onClick={() => setJobsOpen(!jobsOpen)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              Jobs in Russia

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
                  All Jobs
                </Link>

                <Link
                  href="/jobs/scanner-barcode-operator"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  Scanner / Barcode Operator
                </Link>

                <Link
                  href="/jobs/packing-worker"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  Packing Worker
                </Link>

                <Link
                  href="/jobs/construction-worker"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  Construction Worker
                </Link>

                <Link
                  href="/jobs/general-labour"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  General Labour
                </Link>

                <Link
                  href="/jobs/driver"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  Driver
                </Link>

                <Link
                  href="/jobs/cook"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  Cook
                </Link>

                <Link
                  href="/jobs/tailor"
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-slate-600"
                >
                  Tailor
                </Link>
              </div>
            )}

            {/* MBBS */}
            <Link
              href="/mbbs-russia"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              MBBS in Russia
            </Link>

            {/* IMPORT & EXPORT */}
            <Link
              href="/import-export"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              Import & Export
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              About Us
            </Link>

            {/* GALLERY */}
            <Link
              href="/gallery"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              Gallery
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-[#F1F8FF]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}