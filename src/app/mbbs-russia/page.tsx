import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Headphones,
  Plane,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Initial Guidance",
    description:
      "Understand your requirements, academic background and plans for studying medicine in Russia.",
    icon: Headphones,
  },
  {
    number: "02",
    title: "University Selection",
    description:
      "Get guidance on evaluating suitable Russian medical universities and available programs.",
    icon: Search,
  },
  {
    number: "03",
    title: "Application",
    description:
      "Receive guidance on the application process and preparation of required information.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Admission Process",
    description:
      "Get assistance with the next steps after your application and admission communication.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Visa Guidance",
    description:
      "Receive guidance regarding the student visa process and required documentation.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Pre-Departure Support",
    description:
      "Get practical guidance before travelling to Russia for your studies.",
    icon: Plane,
  },
];

const supportItems = [
  "Course and university guidance",
  "Application process assistance",
  "Document guidance",
  "Admission process guidance",
  "Student visa guidance",
  "Pre-departure assistance",
];

const documents = [
  "Valid passport",
  "Academic certificates and marksheets",
  "Passport-size photographs",
  "Required application documents",
  "Other documents requested by the university",
];

const faqs = [
  {
    question: "Why do Indian students consider Russia for medical education?",
    answer:
      "Russia has a number of medical universities that offer medical education programs for international students. Students should independently verify the current recognition, eligibility and regulatory requirements applicable to their situation.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Requirements can vary by university and admission route. Common documents may include a valid passport, academic records, photographs and other documents requested by the institution.",
  },
  {
    question: "Does World Global Manpower help with the admission process?",
    answer:
      "We provide guidance and assistance throughout the admission journey, including university selection, application-related guidance, documentation and pre-departure support.",
  },
  {
    question: "Can I get help with student visa guidance?",
    answer:
      "Yes. We can provide guidance regarding the student visa process and the documents generally required. Final visa decisions are made by the relevant authorities.",
  },
];

export default function MBBSRussiaPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(8,199,217,0.30),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(6,71,184,0.55),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <GraduationCap size={17} />
              Medical Education
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              Study MBBS
              <span className="block text-cyan-300">in Russia</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Get guidance for exploring medical education opportunities in
              Russia — from university selection and application guidance to
              visa and pre-departure support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#0647B8] shadow-xl transition hover:-translate-y-1"
              >
                Get MBBS Guidance
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+919312406166"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Talk to Our Team
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0647B8] to-[#08AFC4] p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0647B8]">
                  <GraduationCap size={34} />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                  Your Journey
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  From India to your medical education journey in Russia.
                </h2>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <Users className="text-white" size={21} />
                    <p className="mt-3 text-sm font-bold text-white">
                      Student Guidance
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <ShieldCheck className="text-white" size={21} />
                    <p className="mt-3 text-sm font-bold text-white">
                      Process Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
                MBBS Guidance
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Make your admission journey clearer.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              Choosing an overseas medical program involves multiple steps.
              World Global Manpower helps students and families understand the
              process, organise their documentation and navigate the next
              stages of their application journey.
            </p>
          </div>
        </div>
      </section>

      {/* WHY RUSSIA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08AFC4]">
              Explore Your Options
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Why consider medical education in Russia?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Medical education options should be evaluated based on the
              university, current regulatory requirements, curriculum,
              admission criteria and your individual circumstances.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "International Education",
                text: "Explore medical education programs available to international students.",
              },
              {
                icon: Users,
                title: "Student Support",
                text: "Receive guidance through important stages of your admission journey.",
              },
              {
                icon: Search,
                title: "Informed Selection",
                text: "Compare relevant university and program information before making decisions.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#0647B8]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Your MBBS journey, step by step.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The exact process can vary by university and current admission
              requirements. Our team can guide you through the applicable
              steps.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0647B8] to-[#08C7D9] text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-4xl font-black text-slate-100">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY + DOCUMENTS */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-[#061B3A] p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
              <ClipboardCheck size={26} />
            </div>

            <h2 className="mt-7 text-3xl font-black text-white">
              Eligibility
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Admission eligibility can differ according to the university
              and the applicable rules at the time of admission.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Review the current academic eligibility requirements.",
                "Check the applicable entrance or regulatory requirements.",
                "Confirm the requirements of the selected university.",
                "Verify all current rules before submitting an application.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-cyan-300"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] text-[#0647B8]">
              <FileText size={26} />
            </div>

            <h2 className="mt-7 text-3xl font-black text-slate-950">
              Documents
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The final document list depends on the university and admission
              process.
            </p>

            <div className="mt-7 space-y-4">
              {documents.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
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
      </section>

      {/* SUPPORT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08AFC4]">
                Our Support
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
                Guidance beyond admission.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We aim to make the process easier to understand for students
                and families by providing assistance at important stages.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0647B8] px-6 py-4 font-bold text-white transition hover:bg-[#05398F]"
              >
                Talk to Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF7FF]">
                    <CheckCircle2 size={18} className="text-[#0647B8]" />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-950 marker:hidden">
                  {faq.question}
                </summary>

                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0647B8] to-[#08C7D9] py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Planning to study MBBS in Russia?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-50">
            Contact World Global Manpower for guidance about your next steps.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0647B8] shadow-xl transition hover:-translate-y-1"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}