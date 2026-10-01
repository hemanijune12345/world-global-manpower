import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import { jobs } from "../../data/jobs";
import { notFound } from "next/navigation";

type JobDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobDetailsPage({
  params,
}: JobDetailsPageProps) {
  const { slug } = await params;

  const job = jobs.find((item) => item.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="bg-[#061B3A]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Jobs
          </Link>

          <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-4xl shadow-xl">
              {job.icon}
            </div>

            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                  {job.category}
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                  {job.location}
                </span>
              </div>

              <h1 className="text-4xl font-black text-white md:text-5xl">
                {job.title}
              </h1>

              <p className="mt-4 max-w-2xl text-blue-100">
                {job.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <h2 className="text-2xl font-black text-slate-950">
              Job Overview
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <BriefcaseBusiness className="text-[#0647B8]" size={22} />

                <p className="mt-3 text-xs text-slate-400">Category</p>

                <p className="mt-1 font-bold text-slate-900">
                  {job.category}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <MapPin className="text-[#08AFC4]" size={22} />

                <p className="mt-3 text-xs text-slate-400">Location</p>

                <p className="mt-1 font-bold text-slate-900">
                  {job.location}
                </p>
              </div>
            </div>

            <div className="mt-9 border-t border-slate-100 pt-8">
              <h3 className="text-xl font-black text-slate-950">
                About This Opportunity
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                This employment opportunity is intended for eligible Indian
                candidates interested in working in Russia. Exact employment
                conditions, salary, working hours, accommodation, food,
                contract terms and other benefits depend on the employer and
                the specific job offer.
              </p>
            </div>

            <div className="mt-9">
              <h3 className="text-xl font-black text-slate-950">
                Important Information
              </h3>

              <div className="mt-5 space-y-3">
                {[
                  "Eligibility will depend on the specific employer and position.",
                  "Candidates should provide accurate personal and professional information.",
                  "Employment terms should be reviewed before proceeding.",
                  "Additional documents may be required during the recruitment process.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#08AFC4]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APPLY CARD */}
          <aside className="h-fit rounded-3xl bg-[#061B3A] p-7 text-white shadow-xl lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-300">
              Interested?
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Apply / Enquire Now
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Contact World Global Manpower for current availability and
              application guidance for this position.
            </p>

            <a
              href="/contact"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0647B8] to-[#08BFD0] px-5 py-4 font-bold text-white transition hover:opacity-90"
            >
              Apply Now
            </a>

            <a
              href="tel:+919312406166"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-bold text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
              Call 9312-406-166
            </a>

            <p className="mt-5 text-center text-xs text-slate-500">
              Terms and availability are subject to the specific employer
              offer.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}