import { BriefcaseBusiness, MapPin, Search } from "lucide-react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";

export default function JobsPage() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(8,199,217,0.28),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(6,71,184,0.5),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <BriefcaseBusiness size={17} />
              Employment Opportunities
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Jobs in
              <span className="text-cyan-300"> Russia</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Explore employment opportunities for Indian candidates looking
              to build their careers in Russia.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH / FILTER BAR */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <div className="grid gap-3 md:grid-cols-[1fr_220px]">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
              <Search size={19} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4">
              <MapPin size={18} className="text-[#08AFC4]" />

              <span className="text-sm font-medium text-slate-600">
                Russia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
              Current Opportunities
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              Available Job Categories
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {jobs.length} job categories available
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0647B8] to-[#08BFD0] p-8 md:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-black text-white">
                  Can&apos;t find your job?
                </h2>

                <p className="mt-2 max-w-xl text-blue-50">
                  Contact our team and share your profile. We can guide you
                  about available opportunities.
                </p>
              </div>

              <a
                href="/contact"
                className="shrink-0 rounded-xl bg-white px-7 py-4 text-center font-bold text-[#0647B8] transition hover:bg-slate-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}