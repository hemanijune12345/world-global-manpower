import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Job } from "../data/jobs";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#08BFD0]/40 hover:shadow-2xl">
      <div className="h-2 bg-gradient-to-r from-[#0647B8] to-[#08C7D9]" />

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF4FF] to-[#E4FBFD] text-2xl">
            {job.icon}
          </div>

          <span className="rounded-full bg-[#EAF4FF] px-3 py-1.5 text-xs font-bold text-[#0647B8]">
            {job.category}
          </span>
        </div>

        <h2 className="mt-6 text-xl font-black text-slate-900">
          {job.title}
        </h2>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
          {job.shortDescription}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
          <MapPin size={17} className="text-[#08AFC4]" />
          {job.location}
        </div>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <Link
            href={`/jobs/${job.slug}`}
            className="flex items-center justify-between rounded-xl bg-[#0647B8] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#05398F]"
          >
            View Job Details

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}