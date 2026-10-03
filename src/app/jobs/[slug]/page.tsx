import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  FileCheck2,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { jobs } from "../../data/jobs";
import { notFound } from "next/navigation";

type JobDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const jobImages: Record<string, string> = {
  "scanner-barcode-operator":
    "https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "packing-worker":
    "https://images.pexels.com/photos/6169166/pexels-photo-6169166.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "construction-worker":
    "https://images.pexels.com/photos/10202865/pexels-photo-10202865.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "general-labour":
    "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "driver":
    "https://images.pexels.com/photos/27852301/pexels-photo-27852301.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "cook":
    "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1800",
  "tailor":
    "https://images.pexels.com/photos/4620619/pexels-photo-4620619.jpeg?auto=compress&cs=tinysrgb&w=1800",
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

  const heroImage =
    jobImages[job.slug] ||
    "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1800";

  const label = jobLabels[job.slug] || job.category;

  return (
    <div className="overflow-hidden bg-white text-[#061B3A]">
      {/* =========================================================
          HERO — JOB VISUAL + DETAILS
      ========================================================= */}
      <section className="relative min-h-[610px] overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={job.title}
            className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/96 via-[#061B3A]/82 to-[#061B3A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-[#061B3A]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#08C7D9]/40 bg-[#08C7D9]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#08C7D9] backdrop-blur-md">
                  <BriefcaseBusiness size={14} />
                  {label}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  <MapPin size={14} className="text-[#08C7D9]" />
                  {job.location}
                </span>
              </div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.28em] text-[#08C7D9]">
                Russia Employment Opportunity
              </p>

              <h1 className="mt-4 text-[3rem] font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.2rem]">
                {job.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {job.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#job-details"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#08C7D9] px-6 py-3.5 font-black text-[#061B3A] transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  View Opportunity
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://wa.me/919312406166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <MessageCircle size={18} />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            {/* VISUAL CARD */}
            <div className="hidden lg:block">
              <div className="ml-auto max-w-sm rounded-[2rem] border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative h-[330px] overflow-hidden rounded-[1.5rem]">
                  <img
                    src={heroImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                      India → Russia
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      {job.title}
                    </h2>

                    <p className="mt-1 text-sm text-white/60">
                      {label} • {job.location}
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
                Category
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                {job.category}
              </p>
            </div>

            <div className="border-r border-white/10 px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Location
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                {job.location}
              </p>
            </div>

            <div className="px-4 py-5 sm:px-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Service
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Manpower Recruitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN DETAILS
      ========================================================= */}
      <section
        id="job-details"
        className="bg-[#F4FAFF] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* LEFT */}
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                  Job Overview
                </p>

                <h2 className="mt-3 text-3xl font-black text-[#061B3A] sm:text-4xl">
                  About This Opportunity
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  This employment opportunity is intended for eligible Indian
                  candidates interested in working in Russia. Exact employment
                  conditions, salary, working hours, accommodation, food,
                  contract terms and other benefits depend on the employer and
                  the specific job offer.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#F4FAFF] p-5">
                    <BriefcaseBusiness
                      size={22}
                      className="text-[#0647B8]"
                    />
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                      Job Category
                    </p>
                    <p className="mt-1 font-black text-[#061B3A]">
                      {job.category}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F4FAFF] p-5">
                    <MapPin size={22} className="text-[#08C7D9]" />
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 font-black text-[#061B3A]">
                      {job.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                  Important Information
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#061B3A] sm:text-3xl">
                  Before You Proceed
                </h2>

                <div className="mt-7 space-y-4">
                  {[
                    "Eligibility will depend on the specific employer and position.",
                    "Candidates should provide accurate personal and professional information.",
                    "Employment terms should be reviewed before proceeding.",
                    "Additional documents may be required during the recruitment process.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FBFF] p-4 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[#08C7D9]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* SUPPORT STRIP */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: FileCheck2,
                    title: "Documentation",
                    text: "Guidance on required documents.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Clear Process",
                    text: "Understand the next steps.",
                  },
                  {
                    icon: Clock3,
                    title: "Availability",
                    text: "Confirm current opportunity details.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <Icon size={21} className="text-[#0647B8]" />
                      <h3 className="mt-3 font-black text-[#061B3A]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT APPLY PANEL */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] bg-[#061B3A] shadow-[0_25px_70px_rgba(6,27,58,0.22)]">
                <div className="relative h-44">
                  <img
                    src={heroImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#061B3A]/65" />

                  <div className="absolute bottom-5 left-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                      Interested?
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-white">
                      Apply / Enquire
                    </h2>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm leading-6 text-slate-400">
                    Contact World Global Manpower for current availability and
                    application guidance for this position.
                  </p>

                  <a
                    href="/contact"
                    className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-5 py-4 font-black text-[#061B3A] transition hover:bg-cyan-300"
                  >
                    Apply / Enquire Now
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="https://wa.me/919312406166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-black text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Enquiry
                  </a>

                  <a
                    href="tel:+919312406166"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-black text-white transition hover:bg-white/10"
                  >
                    <Phone size={18} />
                    Call 9312-406-166
                  </a>

                  <p className="mt-5 text-center text-[11px] leading-5 text-slate-500">
                    Terms and availability are subject to the specific
                    employer offer.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED JOBS
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Explore More
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#061B3A] sm:text-4xl">
                Other Russia Job Categories
              </h2>
            </div>

            <Link
              href="/jobs"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#061B3A] px-5 py-3 font-black text-white transition hover:bg-[#0647B8]"
            >
              View All Jobs
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((item) => item.slug !== job.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/jobs/${item.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-[#F8FBFF] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#0647B8]">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-black text-[#061B3A]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                      {item.icon}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-black text-[#0647B8]">
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
