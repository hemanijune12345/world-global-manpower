import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  GraduationCap,
  BriefcaseBusiness,
  Globe2,
  UsersRound,
} from "lucide-react";

const galleryItems = [
  {
    title: "Jobs in Russia",
    category: "Manpower Recruitment",
    image: "/russia-construction.jpg",
    size: "large",
  },
  {
    title: "Warehouse & Packing",
    category: "Employment",
    image: "/russia-warehouse.jpg",
    size: "normal",
  },
  {
    title: "Transport Opportunities",
    category: "Jobs in Russia",
    image: "/russia-driver.jpg",
    size: "normal",
  },
  {
    title: "MBBS in Russia",
    category: "Medical Education",
    image: "/russia-medical.jpg",
    size: "normal",
  },
  {
    title: "Student Journey",
    category: "Student Guidance",
    image: "/russia-city.jpg",
    size: "normal",
  },
  {
    title: "India → Russia",
    category: "International",
    image: "/russia-night.jpg",
    size: "large",
  },
];

const categories = [
  {
    icon: BriefcaseBusiness,
    title: "Work in Russia",
    text: "Manpower recruitment and employment opportunities for Indian candidates.",
  },
  {
    icon: GraduationCap,
    title: "Study in Russia",
    text: "Guidance for Indian students exploring medical education opportunities.",
  },
  {
    icon: UsersRound,
    title: "Candidate & Student Support",
    text: "Professional assistance throughout important stages of the journey.",
  },
  {
    icon: Globe2,
    title: "India → Russia",
    text: "Connecting people, opportunities and education between India and Russia.",
  },
];

export default function GalleryPage() {
  return (
    <div className="overflow-hidden bg-white text-[#061B3A]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <Image
            src="/russia-night.jpg"
            alt="Russia city at night"
            fill
            priority
            className="object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/96 via-[#061B3A]/82 to-[#061B3A]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-[#061B3A]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.68fr]">
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
                  <Camera size={15} />
                  Visual Stories
                </span>
              </div>

              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#08C7D9] sm:text-sm">
                World Global Manpower Pvt. Ltd.
              </p>

              <h1 className="mt-5 text-[3.3rem] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.2rem]">
                Work.
                <br />
                <span className="text-[#08C7D9]">Study. Russia.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Explore the world behind our India–Russia recruitment and
                education services through work, student and destination
                visuals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#08C7D9] px-6 py-3.5 font-black text-[#061B3A] transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Explore Jobs
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/mbbs-russia"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <GraduationCap size={18} />
                  MBBS in Russia
                </Link>
              </div>
            </div>

            {/* HERO PHOTO COLLAGE */}
            <div className="hidden lg:block">
              <div className="ml-auto grid max-w-sm grid-cols-2 gap-3">
                <div className="relative mt-10 h-64 overflow-hidden rounded-[1.5rem] border border-white/15 shadow-2xl">
                  <Image
                    src="/russia-construction.jpg"
                    alt="Construction work opportunity in Russia"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-black text-white">
                    Work in Russia
                  </span>
                </div>

                <div className="relative h-72 overflow-hidden rounded-[1.5rem] border border-white/15 shadow-2xl">
                  <Image
                    src="/russia-medical.jpg"
                    alt="Medical education in Russia"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-black text-white">
                    Study in Russia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO STATS */}
        <div className="border-t border-white/10 bg-[#061B3A]/85 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 px-5 sm:px-8 lg:px-10">
            <div className="border-r border-white/10 py-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Focus
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Manpower
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Education
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                MBBS in Russia
              </p>
            </div>

            <div className="px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Connection
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                India → Russia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              Our Visual Story
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
              More than a gallery.
              <span className="text-[#0647B8]"> It&apos;s our journey.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Our work connects two important journeys — Indian candidates
              exploring employment opportunities in Russia and Indian students
              exploring medical education opportunities in Russia.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Manpower Recruitment",
                "Jobs in Russia",
                "Student Guidance",
                "MBBS in Russia",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#08C7D9]" />
                  <span className="text-sm font-black text-[#061B3A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(6,27,58,0.16)]">
            <Image
              src="/russia-city.jpg"
              alt="Russia destination"
              width={1600}
              height={1000}
              className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A]/75 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                India → Russia
              </p>
              <p className="mt-2 text-2xl font-black text-white">
                Opportunities across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY — EDITORIAL MASONRY
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Visual Stories
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#061B3A] sm:text-5xl">
                Explore Our World.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              A visual collection representing our two core services — jobs in
              Russia and medical education guidance for Indian students.
            </p>
          </div>

          <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.7rem] bg-[#061B3A] shadow-[0_15px_45px_rgba(6,27,58,0.12)] ${
                  item.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : "row-span-1"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/25 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-[#061B3A]/60 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#08C7D9] backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3
                        className={`font-black text-white ${
                          item.size === "large"
                            ? "text-2xl sm:text-3xl"
                            : "text-xl"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition group-hover:bg-[#08C7D9] group-hover:text-[#061B3A]">
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section className="bg-[#061B3A] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#08C7D9]">
              What You&apos;ll See
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              Two services.
              <span className="text-[#08C7D9]"> One connection.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#08C7D9] text-[#061B3A]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHOTO NOTE / ADD REAL PHOTOS
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                  Your Real Company Photos
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#061B3A]">
                  Add your real office, candidates & students here.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                  The current gallery uses the Russia-related images already
                  available in the project. Later, your actual company,
                  candidate, student and Russia trip photographs can replace
                  them without changing the layout.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#0647B8]">
                <Camera size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#061B3A] py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/russia-night.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#061B3A]/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                World Global Manpower
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Ready to explore your opportunity in Russia?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Explore jobs in Russia or get guidance about studying MBBS in
                Russia.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                <GraduationCap size={18} />
                MBBS in Russia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
