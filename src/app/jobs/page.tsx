import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

const jobImages: Record<string, string> = {
  "scanner-barcode-operator":
    "https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "packing-worker":
    "https://images.pexels.com/photos/6169166/pexels-photo-6169166.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "construction-worker":
    "https://images.pexels.com/photos/10202865/pexels-photo-10202865.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "general-labour":
    "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "driver":
    "https://images.pexels.com/photos/27852301/pexels-photo-27852301.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "cook":
    "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "tailor":
    "https://images.pexels.com/photos/4620619/pexels-photo-4620619.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const jobLabels: Record<string, string> = {
  "scanner-barcode-operator": "Warehouse Operations",
  "packing-worker": "Packing & Warehouse",
  "construction-worker": "Construction",
  "general-labour": "General Labour",
  "driver": "Transport",
  "cook": "Hospitality",
  "tailor": "Garment Work",
};

export default function JobsPage() {
  return (
    <div className="overflow-hidden bg-white text-[#061B3A]">
      {/* =========================================================
          HERO — JOBS IN RUSSIA
      ========================================================= */}
      <section className="relative min-h-[590px] overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <Image
            src="/russia-construction.jpg"
            alt="Work opportunities in Russia"
            fill
            priority
            className="object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/95 via-[#061B3A]/82 to-[#061B3A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-[#061B3A]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
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
                  <BriefcaseBusiness size={15} />
                  Manpower Recruitment
                </span>
              </div>

              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#08C7D9] sm:text-sm">
                Employment Opportunities
              </p>

              <h1 className="mt-5 text-[3.2rem] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.3rem]">
                Jobs in
                <br />
                <span className="text-[#08C7D9]">Russia.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Explore employment opportunities for Indian candidates looking
                to build their careers and work experience in Russia.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Warehouse",
                  "Construction",
                  "Transport",
                  "Hospitality",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/80 backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* HERO SIDE PANEL */}
            <div className="hidden lg:block">
              <div className="ml-auto max-w-sm rounded-[2rem] border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative h-[360px] overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://images.pexels.com/photos/6169166/pexels-photo-6169166.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Warehouse employment opportunity"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/25 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                      Russia Employment
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      Find Your Opportunity
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Explore current job categories and review the details of
                      each opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#061B3A]/85 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 px-5 sm:px-8 lg:px-10">
            <div className="border-r border-white/10 py-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Focus
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Manpower Recruitment
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Destination
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Russia
              </p>
            </div>

            <div className="px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Categories
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                {jobs.length} Opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEARCH / FILTER
      ========================================================= */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(6,27,58,0.12)] sm:p-5">
          <div className="grid gap-3 md:grid-cols-[1fr_230px]">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-[#0647B8] focus-within:bg-white">
              <Search size={19} className="shrink-0 text-slate-400" />

              <input
                type="text"
                placeholder="Search jobs, categories or roles..."
                className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4">
              <MapPin size={18} className="text-[#08C7D9]" />

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Location
                </p>
                <p className="text-sm font-black text-[#061B3A]">
                  Russia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOB CATEGORIES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Current Opportunities
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                Explore Job
                <span className="text-[#0647B8]"> Categories.</span>
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                Browse the available job categories and open a role to see
                more information about the opportunity.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-[#F4FAFF] px-4 py-2.5 text-sm font-black text-[#061B3A]">
              <BriefcaseBusiness size={16} className="text-[#0647B8]" />
              {jobs.length} job categories
            </div>
          </div>

          {/* VISUAL JOB GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}`}
                className="group relative overflow-hidden rounded-[1.7rem] bg-[#061B3A] shadow-[0_18px_50px_rgba(6,27,58,0.12)] ring-1 ring-slate-200/80 transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(6,27,58,0.2)]"
              >
                <div className="relative h-[330px] overflow-hidden">
                  <img
                    src={jobImages[job.slug]}
                    alt={job.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/45 to-black/5" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#061B3A]/70 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#08C7D9] backdrop-blur-md">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {jobLabels[job.slug] || job.category}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-black leading-tight text-white">
                      {job.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                      {job.shortDescription}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white">
                      View Job Details
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RECRUITMENT SUPPORT STRIP
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: UsersRound,
                title: "Candidate Focus",
                text: "Explore opportunities according to your profile and interests.",
              },
              {
                icon: CheckCircle2,
                title: "Clear Information",
                text: "Review job details before deciding your next step.",
              },
              {
                icon: MapPin,
                title: "Russia Focus",
                text: "Our recruitment service is focused on opportunities connected with Russia.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0647B8]/10 text-[#0647B8]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#061B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
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
                Need Guidance?
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Can&apos;t find your job?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Contact our team and share your profile. We can guide you about
                available opportunities and the next steps.
              </p>
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
