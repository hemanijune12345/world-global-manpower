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
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Recruitment for Russia",
    description:
      "Guidance for Indian candidates exploring employment opportunities across different job categories in Russia.",
  },
  {
    icon: GraduationCap,
    title: "MBBS in Russia",
    description:
      "Assistance for students and families exploring medical education opportunities in Russia.",
  },
  {
    icon: Users,
    title: "Candidate Support",
    description:
      "Support and guidance throughout important stages of the recruitment and admission journey.",
  },
  {
    icon: Globe2,
    title: "International Assistance",
    description:
      "Helping candidates understand processes involved in pursuing opportunities outside India.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Professional Guidance",
    text: "We focus on providing clear information and practical guidance throughout the process.",
  },
  {
    icon: Handshake,
    title: "Candidate Support",
    text: "Our approach is centred around helping candidates understand their next steps.",
  },
  {
    icon: CheckCircle2,
    title: "Clear Process",
    text: "We aim to make recruitment and education-related processes easier to understand.",
  },
  {
    icon: Globe2,
    title: "International Focus",
    text: "Our services connect opportunities and education pathways between India and Russia.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(8,199,217,0.28),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(6,71,184,0.55),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <Globe2 size={17} />
              About World Global Manpower
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              Connecting India
              <span className="block text-cyan-300">with Russia.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              World Global Manpower Pvt. Ltd. works to connect Indian
              professionals with employment opportunities in Russia and assists
              Indian students exploring MBBS education opportunities in Russia.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
              Who We Are
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Helping people take their next step.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
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
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-[#061B3A] p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                <Globe2 size={27} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-black text-white">
                Connecting people with meaningful opportunities.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Our mission is to make international employment and education
                opportunities easier to explore by providing structured
                guidance and candidate support.
              </p>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#0647B8] to-[#08C7D9] p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <ArrowRight size={27} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-black text-white">
                Building a trusted international connection.
              </h2>

              <p className="mt-5 leading-7 text-blue-50">
                We aim to build a professional platform that helps candidates
                understand international opportunities and make informed
                decisions about their next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08AFC4]">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Our Core Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our services are designed around employment opportunities,
              education guidance and candidate support.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#0647B8]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDIA RUSSIA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-[#061B3A]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Our International Focus
                </p>

                <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                  India
                  <span className="mx-3 text-cyan-300">→</span>
                  Russia
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  From employment opportunities to medical education guidance,
                  our focus is on helping Indian candidates explore
                  opportunities connected with Russia.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Employment opportunities",
                    "MBBS education guidance",
                    "Candidate assistance",
                    "Documentation guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-slate-200"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-cyan-300"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex min-h-[350px] items-center justify-center bg-gradient-to-br from-[#0647B8] to-[#08C7D9] p-10">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 text-4xl">
                    🌍
                  </div>

                  <h3 className="mt-7 text-3xl font-black text-white">
                    Beyond Borders
                  </h3>

                  <p className="mt-3 max-w-sm text-blue-50">
                    Creating a connection between candidates, opportunities
                    and international education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
              Our Approach
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              What guides our work.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {value.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0647B8] to-[#08C7D9] py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Have questions about an opportunity?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-50">
            Contact World Global Manpower and discuss your requirements with
            our team.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0647B8] shadow-xl transition hover:-translate-y-1"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}