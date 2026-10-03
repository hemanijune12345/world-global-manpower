"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Construction,
  GraduationCap,
  Headphones,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Truck,
  Globe2,
  FileCheck2,
  UsersRound,
  Apple,
  Coffee,
  Wheat,
} from "lucide-react";

const featuredJobs = [
  {
    key: "scanner" as const,
    href: "/jobs/scanner-barcode-operator",
    icon: Search,
    image:
      "https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "packing" as const,
    href: "/jobs/packing-worker",
    icon: Package,
    image:
      "https://images.pexels.com/photos/6169166/pexels-photo-6169166.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "construction" as const,
    href: "/jobs/construction-worker",
    icon: Construction,
    image:
      "https://images.pexels.com/photos/10202865/pexels-photo-10202865.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "driver" as const,
    href: "/jobs/driver",
    icon: Truck,
    image:
      "https://images.pexels.com/photos/27852301/pexels-photo-27852301.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const featuredContent = {
  scanner: {
    category: "Warehouse",
    title: "Scanner / Barcode Operator",
    description: "Explore scanner and barcode operator opportunities in Russia.",
  },
  packing: {
    category: "Packing",
    title: "Packing Worker",
    description: "Explore packing and warehouse opportunities in Russia.",
  },
  construction: {
    category: "Construction",
    title: "Construction Worker",
    description: "Explore construction and infrastructure work opportunities in Russia.",
  },
  driver: {
    category: "Transport",
    title: "Driver",
    description: "Explore driving and transport opportunities in Russia.",
  },
} as const;

export default function Home() {
  const handleHeroEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const mobile = String(formData.get("mobile") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = `Hello World Global Manpower,

I want to make an enquiry.

Name: ${name}
Mobile: ${mobile}
Email: ${email || "Not provided"}
Interested In: ${interest}
Message: ${message || "No message"}

Thank you.`;

    const whatsappUrl = `https://wa.me/918587020020?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="overflow-hidden bg-white text-[#061B3A]">

      {/* =========================================================
          HERO — MOSCOW + ENQUIRY FORM
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <Image
            src="/moscow-kremlin.jpg"
            alt="Moscow, Russia"
            fill
            priority
            className="object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#061B3A]/85 to-[#061B3A]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-[#061B3A]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

            {/* =====================================================
                HERO LEFT CONTENT
            ===================================================== */}
            <div className="max-w-3xl">

              {/* INDIA → RUSSIA / BUSINESS IDENTITY */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-xl backdrop-blur-md">
                  <span className="text-xl">🇮🇳</span>
                  <span>India</span>
                  <ArrowRight size={17} className="text-[#08C7D9]" />
                  <span className="text-xl">🇷🇺</span>
                  <span>Russia</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#08C7D9]/30 bg-[#08C7D9]/10 px-4 py-3 text-xs font-black text-[#B8FAFF]">
                  <BriefcaseBusiness size={15} />
                  Manpower, Education & Trade
                </div>
              </div>

              <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#08C7D9] sm:text-sm">
                Manpower Recruitment, Education & International Trade
              </p>

              <h1 className="text-[2.9rem] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.3rem]">
                Connecting India with
                <br />
                <span className="text-[#08C7D9]">
                  Opportunities in Russia
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Recruitment support for Indian candidates, education guidance for students and international trade services connecting people and products across markets.
              </p>

              {/* THREE CORE SERVICES */}
              <div className="mt-7 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="/jobs"
                  className="group rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#08C7D9]/50 hover:bg-white/[0.12]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#08C7D9] text-[#061B3A]">
                      <BriefcaseBusiness size={21} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#08C7D9]">
                        Manpower Recruitment
                      </p>
                      <h3 className="mt-1 text-base font-black text-white">
                        Jobs in Russia for Indian Candidates
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/55">
                        Explore available job opportunities and connect with our recruitment team.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/mbbs-russia"
                  className="group rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#08C7D9]/50 hover:bg-white/[0.12]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0647B8]">
                      <GraduationCap size={21} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#08C7D9]">
                        Student Guidance
                      </p>
                      <h3 className="mt-1 text-base font-black text-white">
                        MBBS in Russia for Indian Students
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/55">
                        Guidance for students exploring medical education opportunities in Russia.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/import-export"
                  className="group rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#08C7D9]/50 hover:bg-white/[0.12]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5B700] text-[#061B3A]">
                      <Globe2 size={21} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#08C7D9]">
                        Import & Export
                      </p>
                      <h3 className="mt-1 text-base font-black text-white">
                        Rice, Fruits, Coffee & Pulses
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/55">
                        International sourcing and trade support for selected food and agricultural products.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/jobs"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-7 py-4 font-black text-[#061B3A] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Explore Jobs

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/mbbs-russia"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <GraduationCap size={19} />

                  Explore MBBS in Russia
                </Link>
              </div>

              {/* TRUST / STATS */}
              <div className="mt-9 grid max-w-3xl grid-cols-3 border-y border-white/10 py-5">
                {[
                  { value: "India", label: "Candidate base", icon: UsersRound },
                  { value: "Russia", label: "Destination focus", icon: Globe2 },
                  { value: "3", label: "Core services", icon: BriefcaseBusiness },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="border-r border-white/10 px-3 first:pl-0 last:border-r-0 sm:px-5">
                      <div className="flex items-center gap-2">
                        <Icon size={15} className="text-[#08C7D9]" />
                        <span className="text-sm font-black text-white">{stat.value}</span>
                      </div>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* MINI SERVICES */}
              <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    icon: BriefcaseBusiness,
                    text: "Jobs in Russia",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Recruitment Support",
                  },
                  {
                    icon: GraduationCap,
                    text: "Education Guidance",
                  },
                  {
                    icon: Headphones,
                    text: "Candidate Support",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-md"
                    >
                      <Icon
                        size={20}
                        className="text-[#08C7D9]"
                      />

                      <p className="mt-2 text-xs font-bold leading-5 text-white/85">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                HERO RIGHT — SEND ENQUIRY
            ===================================================== */}
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

              <div className="rounded-[2rem] border border-white/40 bg-white/[0.97] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">

                {/* FORM HEADER */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#0647B8]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#0647B8]">
                    <span>🇮🇳</span>
                    <ArrowRight size={13} />
                    <span>🇷🇺</span>
                    <span>India to Russia</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-[#061B3A] sm:text-3xl">
                    Send an Enquiry
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Tell us what opportunity you are interested in and our
                    team will contact you.
                  </p>
                </div>

                {/* FORM */}
                <form
                  onSubmit={handleHeroEnquiry}
                  className="space-y-4"
                >

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="hero-name"
                      className="mb-1.5 block text-xs font-black text-[#061B3A]"
                    >
                      Full Name
                    </label>

                    <input
                      id="hero-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-slate-400 focus:border-[#0647B8] focus:bg-white focus:ring-2 focus:ring-[#0647B8]/10"
                    />
                  </div>

                  {/* MOBILE */}
                  <div>
                    <label
                      htmlFor="hero-mobile"
                      className="mb-1.5 block text-xs font-black text-[#061B3A]"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="hero-mobile"
                      name="mobile"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-slate-400 focus:border-[#0647B8] focus:bg-white focus:ring-2 focus:ring-[#0647B8]/10"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="hero-email"
                      className="mb-1.5 block text-xs font-black text-[#061B3A]"
                    >
                      Email Address
                    </label>

                    <input
                      id="hero-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-slate-400 focus:border-[#0647B8] focus:bg-white focus:ring-2 focus:ring-[#0647B8]/10"
                    />
                  </div>

                  {/* INTEREST */}
                  <div>
                    <label
                      htmlFor="hero-interest"
                      className="mb-1.5 block text-xs font-black text-[#061B3A]"
                    >
                      Interested In
                    </label>

                    <select
                      id="hero-interest"
                      name="interest"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#061B3A] outline-none transition focus:border-[#0647B8] focus:bg-white focus:ring-2 focus:ring-[#0647B8]/10"
                    >
                      <option value="" disabled>
                        Select an opportunity
                      </option>

                      <option value="Jobs in Russia">
                        Jobs in Russia
                      </option>

                      <option value="MBBS in Russia">
                        MBBS in Russia
                      </option>

                      <option value="Other Enquiry">
                        Other Enquiry
                      </option>
                    </select>
                  </div>
    

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="hero-message"
                      className="mb-1.5 block text-xs font-black text-[#061B3A]"
                    >
                      Message <span className="font-medium text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="hero-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us what you are looking for..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#061B3A] outline-none transition placeholder:text-slate-400 focus:border-[#0647B8] focus:bg-white focus:ring-2 focus:ring-[#0647B8]/10"
                    />
                  </div>

                  {/* WHATSAPP BUTTON */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0647B8] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#061B3A]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.92L.1 24l6.35-1.66a11.86 11.86 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.45-8.41ZM12.09 21.7h-.01a9.82 9.82 0 0 1-5-1.36l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.83 9.83 0 0 1-1.5-5.19C2.23 6.45 6.65 2.03 12.09 2.03c2.63 0 5.1 1.03 6.96 2.9a9.78 9.78 0 0 1 2.88 6.97c0 5.44-4.42 9.86-9.84 9.86Zm5.4-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.28-.2-.58-.35Z" />
                      </svg>
                    </span>

                    Send Enquiry on WhatsApp

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-slate-400">
                    Your enquiry will open in WhatsApp with the details
                    filled automatically.
                  </p>
                </form>
              </div>

              {/* SMALL FLOATING BADGE */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/20 bg-[#08C7D9] px-4 py-3 shadow-2xl sm:block">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#061B3A]">
                  WhatsApp Enquiry
                </p>

                <p className="mt-0.5 text-sm font-black text-[#061B3A]">
                  +91 8587020020
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HERO BOTTOM LABEL */}
        <div className="relative border-t border-white/10 bg-[#061B3A]/80 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 px-5 sm:px-8 lg:px-10">

            <div className="border-r border-white/10 py-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                India
              </p>

              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Indian Candidates
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                India → Russia
              </p>

              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                India → Russia
              </p>
            </div>

            <div className="px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Russia
              </p>

              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Manpower + MBBS
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          INDIA → RUSSIA VISUAL
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/russia-city.jpg"
                  alt="Russia city"
                  width={2048}
                  height={769}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                      India → Russia
                    </p>
                    <p className="mt-1 text-xl font-black">A focused route for jobs & education</p>
                  </div>
                  <div className="hidden rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold backdrop-blur-md sm:block">
                    Explore Russia
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-5 rounded-2xl border border-white/20 bg-[#061B3A] px-6 py-5 text-white shadow-2xl sm:-right-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇮🇳</span>

                  <ArrowRight
                    size={20}
                    className="text-[#08C7D9]"
                  />

                  <span className="text-3xl">🇷🇺</span>
                </div>

                <p className="mt-2 text-xs font-bold text-blue-100/70">
                  India → Russia
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Our Services
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                Connecting people,{" "}
                <span className="text-[#0647B8]">
                  education and trade
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                We connect Indian candidates with job opportunities in Russia, guide students exploring MBBS education and support international trade enquiries for selected products.
              </p>

              <div className="mt-9 space-y-4">

                <Link
                  href="/jobs"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0647B8] text-white">
                    <BriefcaseBusiness size={22} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black text-[#061B3A]">
                      Jobs in Russia
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Recruitment support for Indian candidates across available job categories.
                    </p>
                  </div>

                  <ChevronRight
                    size={20}
                    className="text-[#0647B8] transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/mbbs-russia"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#08C7D9] text-[#061B3A]">
                    <GraduationCap size={22} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black text-[#061B3A]">
                      MBBS in Russia
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Guidance for Indian students exploring medical education opportunities in Russia.
                    </p>
                  </div>

                  <ChevronRight
                    size={20}
                    className="text-[#0647B8] transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/import-export"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5B700] text-[#061B3A]">
                    <Globe2 size={22} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-black text-[#061B3A]">
                      Import & Export
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Rice, fruits, coffee and pulses with international sourcing and trade support.
                    </p>
                  </div>

                  <ChevronRight
                    size={20}
                    className="text-[#0647B8] transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          JOBS — PHOTO GRID
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Featured Opportunities
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                Explore jobs in{" "}
                <span className="text-[#0647B8]">
                  Russia
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Browse selected job categories and connect with our recruitment team for current opportunities.
              </p>
            </div>

            <Link
              href="/jobs"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#061B3A] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#0647B8]"
            >
              View All Jobs
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {featuredJobs.map((job) => {
              const data = featuredContent[job.key];
              const Icon = job.icon;

              return (
                <Link
                  key={job.key}
                  href={job.href}
                  className="group relative overflow-hidden rounded-[1.7rem] bg-[#061B3A] shadow-[0_18px_50px_rgba(6,27,58,0.12)] ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(6,27,58,0.22)]"
                >
                  <div className="relative h-[290px] overflow-hidden">

                    <img
                      src={job.image}
                      alt={data.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/45 to-black/5" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061B3A] to-transparent opacity-90" />

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#061B3A]/65 text-white shadow-lg backdrop-blur-md">
                      <Icon size={20} />
                    </div>

                    <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#061B3A]/75 px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-[#08C7D9] shadow-lg backdrop-blur-md">
                      {data.category}
                    </span>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-xl font-black text-white drop-shadow-md">
                        {data.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">
                        {data.description}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center justify-between px-5 py-4 text-sm font-black text-white">
                    <span>View Details</span>

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          MBBS
      ========================================================= */}
      <section className="bg-[#061B3A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-2">

            <div className="relative min-h-[420px]">
              <Image
                src="/russia-medical.jpg"
                alt="Medical education in Russia"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/70 to-transparent" />

              <div className="absolute bottom-7 left-7">
                <div className="flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white backdrop-blur-md">
                  🇮🇳
                  <ArrowRight size={15} />
                  🇷🇺
                  <span>MBBS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-8 sm:p-12 lg:p-16">
              <div>

                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                  Our Services
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-[#061B3A] sm:text-4xl">
                  MBBS in Russia
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Guidance for Indian students exploring medical education opportunities in Russia.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: GraduationCap, text: "Admission guidance" },
                    { icon: FileCheck2, text: "Document support" },
                    { icon: Headphones, text: "Student assistance" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <Icon size={17} className="text-[#0647B8]" />
                        <p className="mt-2 text-xs font-black text-[#061B3A]">{item.text}</p>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/mbbs-russia"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0647B8] px-6 py-3.5 font-black text-white transition hover:bg-[#061B3A]"
                >
                  Explore MBBS Guidance
                  <ArrowRight size={17} />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CORE SERVICES — IMAGE LED
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0647B8]">
                Our core services
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[1.02] tracking-tight text-[#061B3A] sm:text-5xl lg:text-6xl">
                Connecting people, education and products across international markets.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Three focused areas of work: manpower recruitment, education guidance and international trade.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* MANPOWER */}
            <Link
              href="/jobs"
              className="group relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#061B3A] shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Warehouse and manpower work opportunities in Russia"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/65 to-[#061B3A]/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    <BriefcaseBusiness size={14} className="text-[#08C7D9]" />
                    Manpower Recruitment
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#08C7D9] text-[#061B3A] transition group-hover:translate-x-1">
                    <ArrowRight size={19} />
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white sm:text-4xl">
                  Jobs in Russia
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Recruitment support for Indian candidates across warehouse, packing,
                  construction, transport, hospitality and other available roles.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-2">Warehouse</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Construction</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Driving</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Hospitality</span>
                </div>
              </div>
            </Link>

            {/* MBBS */}
            <Link
              href="/mbbs-russia"
              className="group relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#061B3A] shadow-2xl"
            >
              <Image
                src="/russia-medical.jpg"
                alt="Medical education and students in Russia"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/55 to-[#0647B8]/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    <GraduationCap size={14} className="text-[#08C7D9]" />
                    Student Guidance
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0647B8] transition group-hover:translate-x-1">
                    <ArrowRight size={19} />
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white sm:text-4xl">
                  MBBS in Russia
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Guidance for Indian students exploring medical education in Russia,
                  with support around admissions, documentation and the student journey.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-2">Admission Guidance</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Documentation</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Student Support</span>
                </div>
              </div>
            </Link>

            {/* IMPORT & EXPORT */}
            <Link
              href="/import-export"
              className="group relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#061B3A] shadow-2xl"
            >
              <Image
                src="/russia-warehouse.jpg"
                alt="International food and agricultural product trade"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/65 to-[#061B3A]/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    <Globe2 size={14} className="text-[#F5B700]" />
                    Import & Export
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5B700] text-[#061B3A] transition group-hover:translate-x-1">
                    <ArrowRight size={19} />
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white sm:text-4xl">
                  Global Food Trade
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Sourcing and trade support for rice, fresh fruits, coffee and pulses
                  for international buyers and suppliers.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold text-white/70">
                  <span className="rounded-full bg-white/10 px-3 py-2">Rice</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Fruits</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Coffee</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">Pulses</span>
                </div>
              </div>
            </Link>
          </div>

          {/* SUPPORTING IMAGE STRIP */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { image: "/russia-construction.jpg", label: "Construction" },
              { image: "/russia-driver.jpg", label: "Transport" },
              { image: "https://images.pexels.com/photos/6169166/pexels-photo-6169166.jpeg?auto=compress&cs=tinysrgb&w=1600", label: "Warehouse & Packing" },
              { image: "/russia-city.jpg", label: "Russia" },
            ].map((item) => (
              <div key={item.label} className="group relative h-40 overflow-hidden rounded-2xl sm:h-48">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-[0.16em] text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY US — RUSSIA IMAGE
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Why World Global Manpower
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                A focused team for{" "}
                <span className="text-[#0647B8]">
                  cross-border opportunities
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                We focus on practical support for candidates, students and trade enquiries, with clear communication throughout the process.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#061B3A] px-6 py-3.5 font-black text-white transition hover:bg-[#0647B8]"
              >
                Learn More About Us
                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/russia-night.jpg"
                  alt="Russia at night"
                  width={2048}
                  height={1152}
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px]"
                />
              </div>

              <div className="absolute -bottom-7 -left-5 grid max-w-md grid-cols-2 gap-3 sm:-left-8">

                {[
                  {
                    icon: ShieldCheck,
                    title: "Structured Support",
                    description: "Clear guidance from enquiry to the next step.",
                  },
                  {
                    icon: MapPin,
                    title: "Russia Focus",
                    description: "Focused experience around India–Russia opportunities.",
                  },
                  {
                    icon: Headphones,
                    title: "Responsive Assistance",
                    description: "Support for questions, documents and communication.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Clear Process",
                    description: "A straightforward journey with practical information.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-[#061B3A]/95 p-4 text-white shadow-xl backdrop-blur"
                    >
                      <Icon
                        size={19}
                        className="text-[#08C7D9]"
                      />

                      <h3 className="mt-3 text-sm font-black">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-blue-100/60">
                        {item.description}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4FAFF] py-20 sm:py-28">

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#08C7D9]/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0647B8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
              From enquiry to{" "}
              <span className="text-[#0647B8]">
                your next step
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Share your requirement, speak with our team, complete the required process and move forward with the relevant opportunity.
            </p>

          </div>

          <div className="relative mt-16">

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-[2px] bg-gradient-to-r from-orange-400 via-[#08C7D9] to-red-500 md:block" />

            <div className="grid gap-8 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Send Enquiry",
                  description: "Tell us about the job, education or trade requirement you are interested in.",
                  flag: "🇮🇳",
                },
                {
                  number: "02",
                  title: "Talk to Our Team",
                  description: "Our team reviews your enquiry and explains the next steps.",
                  flag: "📞",
                },
                {
                  number: "03",
                  title: "Complete Documents",
                  description: "Prepare the documents and information required for your selected service.",
                  flag: "📋",
                },
                {
                  number: "04",
                  title: "Move Forward",
                  description: "Continue with the relevant opportunity and support process.",
                  flag: "🇷🇺",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative z-10 text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F4FAFF] bg-white text-2xl shadow-[0_15px_35px_rgba(6,27,58,0.15)] ring-1 ring-slate-200">
                    {step.flag}
                  </div>

                  <span className="mt-5 block text-xs font-black tracking-[0.2em] text-[#0647B8]">
                    {step.number}
                  </span>

                  <h3 className="mt-2 text-lg font-black text-[#061B3A]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          RUSSIA PHOTO STRIP
      ========================================================= */}
      <section className="bg-[#061B3A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#08C7D9]">
                🇮🇳 → 🇷🇺
              </p>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Russia — Work & Education
              </h2>
            </div>

            <Link
              href="/gallery"
              className="hidden items-center gap-2 text-sm font-black text-white/70 transition hover:text-[#08C7D9] sm:flex"
            >
              View Details
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="grid h-[620px] gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <div className="relative overflow-hidden rounded-3xl sm:row-span-2">
              <Image
                src="/moscow-kremlin.jpg"
                alt="Moscow Kremlin"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <p className="absolute bottom-5 left-5 font-black text-white">
                Moscow
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/russia-city.jpg"
                alt="Russia city"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/russia-driver.jpg"
                alt="Russia transport"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden rounded-3xl sm:col-span-2">
              <Image
                src="/russia-construction.jpg"
                alt="Construction work"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          IMPORT & EXPORT — PRODUCT STRIP
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                International Trade
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                Import & Export for selected food and agricultural products.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                We support international sourcing and trade enquiries for rice, fresh
                fruits, coffee and pulses, connecting suppliers and buyers across markets.
              </p>
              <Link
                href="/import-export"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#061B3A] px-6 py-3.5 font-black text-white transition hover:bg-[#0647B8]"
              >
                Explore Import & Export
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Wheat, title: "Rice", text: "Basmati & non-basmati" },
                { icon: Apple, title: "Fruits", text: "Fresh produce" },
                { icon: Coffee, title: "Coffee", text: "Beans & products" },
                { icon: Package, title: "Pulses", text: "Daal & pulses" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#F4FAFF] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#061B3A] text-[#08C7D9]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 font-black text-[#061B3A]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — NIGHT RUSSIA
      ========================================================= */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/russia-night.jpg"
            alt="Russia at night"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#061B3A]/85" />

        </div>

        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">

          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#08C7D9]">
            Start Your Enquiry
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to explore your next opportunity?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">
            Contact World Global Manpower for jobs in Russia, MBBS guidance or international trade enquiries.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-7 py-4 font-black text-[#061B3A] transition hover:bg-cyan-300"
            >
              Explore Jobs
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Contact Our Team
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}