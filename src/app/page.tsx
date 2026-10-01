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
} from "lucide-react";
import { useLanguage } from "./components/LanguageContext";

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

export default function Home() {
  const { t } = useLanguage();

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
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#061B3A]/85 to-[#061B3A]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-[#061B3A]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">

            {/* =====================================================
                HERO LEFT CONTENT
            ===================================================== */}
            <div className="max-w-3xl">

              {/* INDIA → RUSSIA */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-xl backdrop-blur-md">
                <span className="text-xl">🇮🇳</span>

                <span>{t.home.hero.india}</span>

                <ArrowRight
                  size={17}
                  className="text-[#08C7D9]"
                />

                <span className="text-xl">🇷🇺</span>

                <span>{t.home.hero.russia}</span>
              </div>

              <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#08C7D9] sm:text-sm">
                {t.home.hero.badge}
              </p>

              <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[5.2rem]">
                {t.home.hero.title}
                <br />
                <span className="text-[#08C7D9]">
                  {t.home.hero.highlight}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {t.home.hero.description}
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/jobs"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-7 py-4 font-black text-[#061B3A] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  {t.home.hero.exploreJobs}

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

                  {t.home.hero.mbbs}
                </Link>
              </div>

              {/* MINI SERVICES */}
              <div className="mt-9 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    icon: BriefcaseBusiness,
                    text: t.home.hero.jobs,
                  },
                  {
                    icon: ShieldCheck,
                    text: t.home.hero.recruitment,
                  },
                  {
                    icon: GraduationCap,
                    text: t.home.hero.education,
                  },
                  {
                    icon: Headphones,
                    text: t.home.hero.support,
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

              <div className="rounded-[2rem] border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7">

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
                {t.home.hero.india}
              </p>

              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Indian Candidates
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                {t.home.hero.route}
              </p>

              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                India → Russia
              </p>
            </div>

            <div className="px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                {t.home.hero.russia}
              </p>

              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Jobs & Education
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
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/russia-city.jpg"
                  alt="Russia city"
                  width={2048}
                  height={769}
                  className="h-[420px] w-full object-cover"
                />
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
                  {t.home.hero.route}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                {t.home.services.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                {t.home.services.title}{" "}
                <span className="text-[#0647B8]">
                  {t.home.services.highlight}
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                {t.home.services.description}
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
                      {t.home.services.jobsTitle}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {t.home.services.jobsDescription}
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
                      {t.home.services.mbbsTitle}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {t.home.services.mbbsDescription}
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
                {t.home.featured.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                {t.home.featured.title}{" "}
                <span className="text-[#0647B8]">
                  {t.home.featured.highlight}
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {t.home.featured.description}
              </p>
            </div>

            <Link
              href="/jobs"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#061B3A] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#0647B8]"
            >
              {t.home.featured.viewAll}
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {featuredJobs.map((job) => {
              const data = t.home.featured[job.key];
              const Icon = job.icon;

              return (
                <Link
                  key={job.key}
                  href={job.href}
                  className="group relative overflow-hidden rounded-[1.7rem] bg-[#061B3A] shadow-lg ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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
                    <span>{t.home.featured.viewDetails}</span>

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
                  {t.home.services.eyebrow}
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-[#061B3A] sm:text-4xl">
                  {t.home.services.mbbsTitle}
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {t.home.services.mbbsDescription}
                </p>

                <Link
                  href="/mbbs-russia"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0647B8] px-6 py-3.5 font-black text-white transition hover:bg-[#061B3A]"
                >
                  {t.home.services.explore}
                  <ArrowRight size={17} />
                </Link>

              </div>
            </div>

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
                {t.home.whyUs.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                {t.home.whyUs.title}{" "}
                <span className="text-[#0647B8]">
                  {t.home.whyUs.highlight}
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                {t.home.whyUs.description}
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#061B3A] px-6 py-3.5 font-black text-white transition hover:bg-[#0647B8]"
              >
                {t.home.whyUs.learnMore}
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
                  className="h-[480px] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-7 -left-5 grid max-w-md grid-cols-2 gap-3 sm:-left-8">

                {[
                  {
                    icon: ShieldCheck,
                    title: t.home.whyUs.point1Title,
                    description: t.home.whyUs.point1Description,
                  },
                  {
                    icon: MapPin,
                    title: t.home.whyUs.point2Title,
                    description: t.home.whyUs.point2Description,
                  },
                  {
                    icon: Headphones,
                    title: t.home.whyUs.point3Title,
                    description: t.home.whyUs.point3Description,
                  },
                  {
                    icon: CheckCircle2,
                    title: t.home.whyUs.point4Title,
                    description: t.home.whyUs.point4Description,
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
              {t.home.process.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
              {t.home.process.title}{" "}
              <span className="text-[#0647B8]">
                {t.home.process.highlight}
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {t.home.process.description}
            </p>

          </div>

          <div className="relative mt-16">

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-[2px] bg-gradient-to-r from-orange-400 via-[#08C7D9] to-red-500 md:block" />

            <div className="grid gap-8 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: t.home.process.step1Title,
                  description: t.home.process.step1Description,
                  flag: "🇮🇳",
                },
                {
                  number: "02",
                  title: t.home.process.step2Title,
                  description: t.home.process.step2Description,
                  flag: "📞",
                },
                {
                  number: "03",
                  title: t.home.process.step3Title,
                  description: t.home.process.step3Description,
                  flag: "📋",
                },
                {
                  number: "04",
                  title: t.home.process.step4Title,
                  description: t.home.process.step4Description,
                  flag: "🇷🇺",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative z-10 text-center"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#F4FAFF] bg-[#061B3A] text-3xl shadow-xl">
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
                Russia
              </h2>
            </div>

            <Link
              href="/gallery"
              className="hidden items-center gap-2 text-sm font-black text-white/70 transition hover:text-[#08C7D9] sm:flex"
            >
              {t.home.featured.viewDetails}
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
            {t.home.cta.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.home.cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">
            {t.home.cta.description}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-7 py-4 font-black text-[#061B3A] transition hover:bg-cyan-300"
            >
              {t.home.cta.exploreJobs}
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/20"
            >
              {t.home.cta.contact}
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}