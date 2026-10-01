import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, ImageIcon } from "lucide-react";

const galleryItems = [
  {
    title: "Russia Employment Opportunities",
    category: "Jobs in Russia",
    image: "/gallery/russia-jobs.jpg",
  },
  {
    title: "Candidate Support",
    category: "Recruitment",
    image: "/gallery/candidate-support.jpg",
  },
  {
    title: "MBBS Education Guidance",
    category: "MBBS in Russia",
    image: "/gallery/mbbs-russia.jpg",
  },
  {
    title: "Student Guidance",
    category: "Education",
    image: "/gallery/student-guidance.jpg",
  },
  {
    title: "Professional Assistance",
    category: "Our Services",
    image: "/gallery/professional-support.jpg",
  },
  {
    title: "India to Russia",
    category: "International",
    image: "/gallery/india-russia.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(8,199,217,0.28),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(6,71,184,0.55),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <Camera size={17} />
              World Global Manpower
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight text-white md:text-6xl">
              Our
              <span className="text-cyan-300"> Gallery</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Explore moments, services and activities connected with our
              recruitment and education assistance services.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
                Visual Stories
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950">
                Explore Our Work
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              More company, candidate and student photographs can be added to
              this gallery as your website grows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#061B3A] via-[#0647B8] to-[#08C7D9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0647B8]">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    World Global Manpower Pvt. Ltd.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO PLACEHOLDER */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center md:p-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#0647B8]">
              <ImageIcon size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-950">
              Your Company Photos
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
              Replace the gallery placeholders with your real office,
              recruitment, candidate, student and Russia-related photographs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0647B8] to-[#08C7D9] py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Looking for an opportunity in Russia?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-50">
            Explore our current job opportunities or contact our team for
            guidance.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0647B8] shadow-xl transition hover:-translate-y-1"
            >
              Explore Jobs
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}