import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Handshake,
  ShieldCheck,
  Users,
  FileCheck2,
  PhoneCall,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Jobs in Russia",
    eyebrow: "Manpower Recruitment",
    description:
      "Guidance for Indian candidates exploring employment opportunities across warehouse, construction, transport, hospitality and other job categories in Russia.",
    href: "/jobs",
    image: "/russia-construction.jpg",
  },
  {
    icon: GraduationCap,
    title: "MBBS in Russia",
    eyebrow: "Student Guidance",
    description:
      "Assistance for Indian students and families exploring medical education opportunities in Russia, from initial guidance to important documentation steps.",
    href: "/mbbs-russia",
    image: "/russia-medical.jpg",
  },
];

const supportPoints = [
  {
    icon: ShieldCheck,
    title: "Professional Guidance",
    text: "Clear information and practical guidance at important stages of the candidate journey.",
  },
  {
    icon: Handshake,
    title: "Candidate Support",
    text: "A support-focused approach for candidates, workers and students exploring Russia.",
  },
  {
    icon: CheckCircle2,
    title: "Clear Process",
    text: "We aim to make recruitment and education-related processes easier to understand.",
  },
  {
    icon: Globe2,
    title: "India–Russia Focus",
    text: "Our work is centred around connecting Indian candidates with Russia-focused opportunities.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-[#061B3A]">
      {/* =========================================================
          HERO — CINEMATIC RUSSIA + COMPANY INTRO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <Image
            src="/russia-night.jpg"
            alt="Russia city at night"
            fill
            priority
            className="object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#061B3A]/82 to-[#061B3A]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-[#061B3A]/20" />
        </div>

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid w-full items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur-md">
                  <span>🇮🇳</span>
                  India
                  <ArrowRight size={16} className="text-[#08C7D9]" />
                  <span>🇷🇺</span>
                  Russia
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#08C7D9]/40 bg-[#08C7D9]/10 px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#08C7D9]">
                  <Globe2 size={15} />
                  About World Global Manpower
                </span>
              </div>

              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#08C7D9] sm:text-sm">
                Manpower • Education • International Assistance
              </p>

              <h1 className="mt-5 text-[3.1rem] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.4rem]">
                Connecting India
                <br />
                <span className="text-[#08C7D9]">with Russia.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                World Global Manpower Pvt. Ltd. works to connect Indian
                candidates with employment opportunities in Russia and assists
                Indian students exploring MBBS education opportunities in
                Russia.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/jobs"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-6 py-4 font-black text-[#061B3A] transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Explore Russia Jobs
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/mbbs-russia"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <GraduationCap size={18} />
                  MBBS in Russia
                </Link>
              </div>
            </div>

            {/* HERO SIDE VISUAL */}
            <div className="hidden lg:block">
              <div className="ml-auto max-w-md rounded-[2rem] border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative h-[350px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/russia-city.jpg"
                    alt="Russia city and architecture"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                      Our focus
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      Manpower + MBBS
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Two focused services connecting Indian candidates with
                      Russia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#061B3A]/80 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 px-5 sm:px-8 lg:px-10">
            <div className="border-r border-white/10 py-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Origin
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Indian Candidates
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Route
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                India → Russia
              </p>
            </div>

            <div className="px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Services
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Jobs & Education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE — IMAGE + STORY
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(6,27,58,0.16)]">
              <Image
                src="/moscow-kremlin.jpg"
                alt="Moscow, Russia"
                width={1600}
                height={1000}
                className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-white/20 bg-[#061B3A] px-5 py-4 shadow-2xl sm:-right-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                International Focus
              </p>
              <p className="mt-1 text-lg font-black text-white">
                India → Russia
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-[#061B3A] sm:text-5xl">
              Helping people take their
              <span className="text-[#0647B8]"> next step.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                World Global Manpower Pvt. Ltd. is focused on creating a bridge
                between Indian candidates and opportunities in Russia.
              </p>

              <p>
                Our work covers two primary areas: employment opportunities for
                Indian professionals and workers, and guidance for Indian
                students interested in pursuing MBBS education in Russia.
              </p>

              <p>
                We aim to provide practical guidance, clear communication and
                support at important stages of the candidate journey.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Jobs in Russia",
                "MBBS in Russia",
                "Candidate Assistance",
                "Documentation Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#0647B8]"
                  />
                  <span className="text-sm font-black text-[#061B3A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TWO CORE SERVICES — LARGE VISUAL BLOCKS
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
              Two focused services.
              <span className="text-[#0647B8]"> One connection.</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Our services are built around the two core journeys visible
              throughout the World Global Manpower platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative min-h-[540px] overflow-hidden rounded-[2rem] bg-[#061B3A] shadow-[0_20px_60px_rgba(6,27,58,0.14)]"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/55 to-[#061B3A]/5" />

                  <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/20 bg-[#061B3A]/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#08C7D9] backdrop-blur-md">
                    <Icon size={15} />
                    {service.eyebrow}
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <h3 className="text-3xl font-black text-white sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                      {service.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-[#061B3A] transition group-hover:bg-[#08C7D9]">
                      Explore Service
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION / VISION
      ========================================================= */}
      <section className="bg-[#061B3A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#08C7D9]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#08C7D9]/10 text-[#08C7D9]">
                  <Globe2 size={27} />
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                  Our Mission
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Connecting people with meaningful opportunities.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-300">
                  Our mission is to make international employment and education
                  opportunities easier to explore by providing structured
                  guidance and candidate support.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0647B8] to-[#08C7D9] p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <ArrowRight size={27} />
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-blue-50">
                  Our Vision
                </p>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  Building a trusted international connection.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-blue-50">
                  We aim to build a professional platform that helps candidates
                  understand international opportunities and make informed
                  decisions about their next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDIA — RUSSIA JOURNEY
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Our International Focus
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                India
                <span className="mx-3 text-[#08C7D9]">→</span>
                Russia
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-600 sm:text-lg">
                From employment opportunities to medical education guidance,
                our focus is on helping Indian candidates explore opportunities
                connected with Russia.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Employment opportunities",
                  "MBBS education guidance",
                  "Candidate assistance",
                  "Documentation guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#0647B8]"
                    />
                    <span className="text-sm font-black text-[#061B3A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#061B3A] px-6 py-3.5 font-black text-white transition hover:bg-[#0647B8]"
                >
                  View Jobs
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/mbbs-russia"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-black text-[#061B3A] transition hover:border-[#08C7D9]"
                >
                  Student Guidance
                  <GraduationCap size={18} />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#061B3A] shadow-2xl">
              <Image
                src="/russia-city.jpg"
                alt="Russia city"
                width={1400}
                height={1000}
                className="h-[480px] w-full object-cover opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur-md">
                  🇮🇳
                  <ArrowRight size={15} className="text-[#08C7D9]" />
                  🇷🇺
                  <span>Beyond Borders</span>
                </div>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                  Creating a connection between candidates, opportunities and
                  international education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT / VALUES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Our Approach
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                What guides
                <span className="text-[#0647B8]"> our work.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                Our approach is centred around clear communication, practical
                guidance and support for people exploring opportunities between
                India and Russia.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.7rem]">
                <Image
                  src="/russia-driver.jpg"
                  alt="Transport and work opportunities in Russia"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="group rounded-[1.5rem] border border-slate-200 bg-[#F8FBFF] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#08C7D9]/50 hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0647B8]/10 text-[#0647B8] transition group-hover:bg-[#0647B8] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-[#061B3A]">
                      {point.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#061B3A] py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/russia-night.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#061B3A]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Start Your Journey
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Have questions about a Russia opportunity?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Contact World Global Manpower and discuss your requirements
                with our team.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-white/70">
                <span className="inline-flex items-center gap-2">
                  <PhoneCall size={16} className="text-[#08C7D9]" />
                  Direct assistance
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-[#08C7D9]" />
                  India → Russia
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-7 py-4 font-black text-[#061B3A] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Contact Our Team
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
