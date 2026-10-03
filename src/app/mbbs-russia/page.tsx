import Image from "next/image";
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
  MapPin,
  PhoneCall,
  MessageCircle,
  BookOpen,
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
    <div className="overflow-hidden bg-white text-[#061B3A]">
      {/* =========================================================
          HERO — MEDICAL EDUCATION IN RUSSIA
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0">
          <Image
            src="/russia-medical.jpg"
            alt="Medical education in Russia"
            fill
            priority
            className="object-cover scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061B3A]/96 via-[#061B3A]/82 to-[#061B3A]/35" />
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
                  <GraduationCap size={15} />
                  Student Guidance
                </span>
              </div>

              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#08C7D9] sm:text-sm">
                Medical Education • International Students
              </p>

              <h1 className="mt-5 text-[3.2rem] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.2rem]">
                Study MBBS
                <br />
                <span className="text-[#08C7D9]">in Russia.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Get guidance for exploring medical education opportunities in
                Russia — from university selection and application guidance to
                visa and pre-departure support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-6 py-4 font-black text-[#061B3A] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Get MBBS Guidance
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+919312406166"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <PhoneCall size={18} />
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* HERO VISUAL PANEL */}
            <div className="hidden lg:block">
              <div className="ml-auto max-w-sm rounded-[2rem] border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative h-[390px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/russia-medical.jpg"
                    alt="Students and medical education in Russia"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/25 to-transparent" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-[#061B3A]/60 px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#08C7D9] backdrop-blur">
                      Medical Education
                    </span>
                    <span className="text-2xl">🎓</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                      India → Russia
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      Your Medical Education Journey
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Guidance from initial planning through pre-departure
                      preparation.
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
                Medical Education
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
                Support
              </p>
              <p className="mt-1 text-xs font-black text-white sm:text-sm">
                Student Guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO — IMAGE + STORY
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(6,27,58,0.16)]">
              <Image
                src="/russia-city.jpg"
                alt="Russia city and student destination"
                width={1600}
                height={1000}
                className="h-[440px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-white/20 bg-[#061B3A] px-5 py-4 shadow-2xl sm:-right-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#08C7D9]">
                Student Route
              </p>
              <p className="mt-1 text-lg font-black text-white">
                India → Russia
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              MBBS Guidance
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] text-[#061B3A] sm:text-5xl">
              Make your admission
              <span className="text-[#0647B8]"> journey clearer.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Choosing an overseas medical program involves multiple steps.
              World Global Manpower helps students and families understand the
              process, organise their documentation and navigate the next
              stages of their application journey.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "University guidance",
                "Application assistance",
                "Document guidance",
                "Student visa guidance",
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
          EXPLORE OPTIONS — VISUAL
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              Explore Your Options
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
              Why consider medical
              <span className="text-[#0647B8]"> education in Russia?</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Medical education options should be evaluated based on the
              university, current regulatory requirements, curriculum,
              admission criteria and your individual circumstances.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#061B3A]">
              <Image
                src="/russia-medical.jpg"
                alt="Medical education and students in Russia"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B3A] via-[#061B3A]/35 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#08C7D9] backdrop-blur">
                  <GraduationCap size={14} />
                  International Students
                </span>

                <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  Explore your medical education options.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                  Compare relevant university and program information before
                  making decisions about your education journey.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
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
                    className="rounded-[1.5rem] border border-slate-200 bg-[#F8FBFF] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0647B8]/10 text-[#0647B8]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-[#061B3A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="bg-[#061B3A] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#08C7D9]">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              Your MBBS journey,
              <span className="text-[#08C7D9]"> step by step.</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              The exact process can vary by university and current admission
              requirements. Our team can guide you through the applicable
              steps.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="absolute right-5 top-2 text-6xl font-black text-white/[0.04]">
                    {step.number}
                  </div>

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0647B8] to-[#08C7D9] text-white">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-black tracking-widest text-[#08C7D9]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ELIGIBILITY + DOCUMENTS
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#061B3A] p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#08C7D9]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#08C7D9]">
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
                      className="mt-0.5 shrink-0 text-[#08C7D9]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F4FAFF] p-8 sm:p-10">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#08C7D9]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0647B8] shadow-sm">
                <FileText size={26} />
              </div>

              <h2 className="mt-7 text-3xl font-black text-[#061B3A]">
                Documents
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The final document list depends on the university and admission
                process.
              </p>

              <div className="mt-7 space-y-3">
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
        </div>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================= */}
      <section className="bg-[#F4FAFF] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
                Our Support
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#061B3A] sm:text-5xl">
                Guidance
                <span className="text-[#0647B8]"> beyond admission.</span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                We aim to make the process easier to understand for students
                and families by providing assistance at important stages.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.7rem] shadow-xl">
                <Image
                  src="/russia-medical.jpg"
                  alt="Medical education support in Russia"
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0647B8] px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#05398F]"
              >
                Talk to Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF7FF]">
                    <CheckCircle2 size={18} className="text-[#0647B8]" />
                  </div>

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
          FAQ
      ========================================================= */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0647B8]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#061B3A] sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Some answers depend on the university, admission route and
              current regulatory requirements.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-[#F8FBFF] p-6 transition open:bg-white open:shadow-lg"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-black text-[#061B3A] sm:text-lg">
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
                Start Your Student Journey
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Planning to study MBBS in Russia?
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/65">
                Contact World Global Manpower for guidance about your next
                steps.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-white/70">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={17} className="text-[#08C7D9]" />
                  Student Guidance
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} className="text-[#08C7D9]" />
                  India → Russia
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#08C7D9] px-7 py-4 font-black text-[#061B3A] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="https://wa.me/919312406166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
