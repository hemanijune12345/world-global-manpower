"use client";

import Image from "next/image";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/* =========================================================
   EXACT OFFICE LOCATION
   Latitude:  28.7118438
   Longitude: 77.1198102
========================================================= */

const OFFICE_LAT = "28.7118438";
const OFFICE_LNG = "77.1198102";

const GOOGLE_MAP_LOCATION =
  "https://www.google.com/maps/@28.7118438,77.1198102,17z";

const WHATSAPP_NUMBER = "918587020020";

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  /* =======================================================
     WHATSAPP FORM SUBMIT
  ======================================================= */

  const handleWhatsAppSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name =
      formData.get("name")?.toString().trim() || "";

    const phone =
      formData.get("phone")?.toString().trim() || "";

    const email =
      formData.get("email")?.toString().trim() || "";

    const interest =
      formData.get("interest")?.toString().trim() || "";

    const message =
      formData.get("message")?.toString().trim() || "";

    const interestText =
      interest === "jobs"
        ? "Jobs in Russia"
        : interest === "mbbs"
          ? "MBBS in Russia"
          : interest === "other"
            ? "Other Enquiry"
            : "Not specified";

    const whatsappMessage = `Hello World Global Manpower,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Interested In: ${interestText}

Message:
${message}

Thank you.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#061B3A]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(8,199,217,0.28),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(6,71,184,0.55),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">

          <div className="max-w-3xl">

            {/* WHATSAPP BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">

              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp"
                width={19}
                height={19}
                className="object-contain"
              />

              We&apos;re Here to Help
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight text-white md:text-6xl">
              Let&apos;s
              <span className="text-cyan-300">
                {" "}Connect.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether you are looking for a job opportunity in Russia
              or exploring MBBS education options, our team is here to
              guide you.
            </p>

            {/* INDIA → RUSSIA */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur">

              <span>🇮🇳 India</span>

              <span className="text-cyan-300">
                →
              </span>

              <span>🇷🇺 Russia</span>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
                Contact Information
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950">
                Talk to our team.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Reach out to World Global Manpower for recruitment
                enquiries, job opportunities in Russia or MBBS
                education guidance.
              </p>

              <div className="mt-8 space-y-4">

                {/* =================================================
                    PRIMARY PHONE
                ================================================= */}

                <a
                  href="tel:+919312406166"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <Phone size={21} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      Primary Phone
                    </p>

                    <p className="mt-1 font-bold text-slate-900 group-hover:text-[#0647B8]">
                      9312-406-166
                    </p>

                  </div>

                </a>

                {/* =================================================
                    WHATSAPP
                ================================================= */}

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9FFF1]">

                    <Image
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      width={30}
                      height={30}
                      className="object-contain"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-bold text-slate-900 group-hover:text-[#25D366]">
                      8587-020-020
                    </p>

                  </div>

                </a>

                {/* =================================================
                    SECOND PHONE
                ================================================= */}

                <a
                  href="tel:+918587020020"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <Phone size={21} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      Alternate Phone
                    </p>

                    <p className="mt-1 font-bold text-slate-900 group-hover:text-[#0647B8]">
                      8587-020-020
                    </p>

                  </div>

                </a>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <a
                  href="mailto:hello@wgmanpower.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <Mail size={21} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 font-bold text-slate-900 group-hover:text-[#0647B8]">
                      hello@wgmanpower.com
                    </p>

                  </div>

                </a>

                {/* =================================================
                    ADDRESS
                ================================================= */}

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <MapPin size={21} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      Office Address
                    </p>

                    <p className="mt-1 leading-6 font-bold text-slate-900">
                      1st Floor D-14/194, Pocket 14,
                      <br />
                      Sector 7, Rohini,
                      <br />
                      Delhi, India - 110085
                    </p>

                  </div>

                </div>

                {/* =================================================
                    OFFICE
                ================================================= */}

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <Clock3 size={21} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      Office
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Contact us for current office timings
                    </p>

                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                WHATSAPP FORM
            ================================================= */}

            <div className="rounded-[2rem] bg-[#061B3A] p-7 shadow-2xl md:p-10">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Send an Enquiry
              </p>

              <h2 className="mt-3 text-3xl font-black text-white">
                How can we help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Fill in your details and send your enquiry directly
                to our WhatsApp team.
              </p>

              <form
                onSubmit={handleWhatsAppSubmit}
                className="mt-8 space-y-5"
              >

                {/* NAME + PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    />

                  </div>

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />

                </div>

                {/* INTEREST */}
                <div>

                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    I am interested in
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-slate-300 outline-none transition focus:border-cyan-400"
                  >

                    <option
                      value=""
                      disabled
                      className="bg-[#061B3A]"
                    >
                      Select an option
                    </option>

                    <option
                      value="jobs"
                      className="bg-[#061B3A]"
                    >
                      Jobs in Russia
                    </option>

                    <option
                      value="mbbs"
                      className="bg-[#061B3A]"
                    >
                      MBBS in Russia
                    </option>

                    <option
                      value="other"
                      className="bg-[#061B3A]"
                    >
                      Other Enquiry
                    </option>

                  </select>

                </div>

                {/* MESSAGE */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />

                </div>

                {/* WHATSAPP SUBMIT */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20BD5A]"
                >

                  <Image
                    src="/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={26}
                    height={26}
                    className="object-contain brightness-0 invert"
                  />

                  Send Enquiry on WhatsApp

                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Your enquiry will open directly in WhatsApp on
                  <span className="font-semibold text-slate-400">
                    {" "}+91 85870 20020
                  </span>
                  .
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICE LOCATION + EXACT MAP
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div className="p-8 md:p-12">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
                  Visit Our Office
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                  Find World Global Manpower
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Our office is located in Sector 7, Rohini, Delhi.
                </p>

                {/* ADDRESS */}
                <div className="mt-7 flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                    <MapPin size={21} />
                  </div>

                  <p className="font-semibold leading-7 text-slate-800">
                    1st Floor D-14/194, Pocket 14,
                    <br />
                    Sector 7, Rohini,
                    <br />
                    Delhi, India - 110085
                  </p>

                </div>

                {/* LOCATION BUTTONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  {/* GOOGLE MAP */}
                  <a
                    href={GOOGLE_MAP_LOCATION}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0647B8] px-6 py-4 font-bold text-white transition hover:bg-[#05398F]"
                  >
                    <MapPin size={18} />
                    Open Exact Location
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      "Hello World Global Manpower, I would like to visit your office."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition hover:bg-[#20BD5A]"
                  >

                    <Image
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      width={23}
                      height={23}
                      className="object-contain brightness-0 invert"
                    />

                    WhatsApp Us

                  </a>

                </div>

              </div>

              {/* =================================================
                  EXACT COORDINATE MAP
              ================================================= */}

              <div className="relative min-h-[420px] overflow-hidden bg-slate-200">

                <iframe
                  title="World Global Manpower Exact Office Location"
                  src={`https://www.google.com/maps?q=${OFFICE_LAT},${OFFICE_LNG}&z=17&output=embed`}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "420px",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* MAP LABEL */}
                <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7FF] text-[#0647B8]">
                      <MapPin size={19} />
                    </div>

                    <div>

                      <p className="text-sm font-black text-slate-900">
                        World Global Manpower
                      </p>

                      <p className="text-xs text-slate-500">
                        28.7118438, 77.1198102
                      </p>

                    </div>

                  </div>

                </div>

                {/* EXACT LOCATION BUTTON */}
                <a
                  href={GOOGLE_MAP_LOCATION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0647B8] shadow-xl transition hover:-translate-y-0.5"
                >
                  <MapPin size={17} />
                  View Exact Location
                </a>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK CONTACT CTA
      ===================================================== */}

      <section className="bg-gradient-to-r from-[#0647B8] to-[#08C7D9] py-16">

        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

          <h2 className="text-3xl font-black text-white md:text-4xl">
            Prefer to speak directly?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-blue-50">
            Call or WhatsApp our team for employment opportunities
            or MBBS guidance.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            {/* PRIMARY PHONE */}
            <a
              href="tel:+919312406166"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0647B8] transition hover:bg-slate-100"
            >
              <Phone size={18} />
              9312-406-166
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 font-bold text-white transition hover:bg-[#20BD5A]"
            >

              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp"
                width={25}
                height={25}
                className="object-contain brightness-0 invert"
              />

              WhatsApp: 8587-020-020

            </a>

            {/* SECOND PHONE */}
            <a
              href="tel:+918587020020"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone size={18} />
              8587-020-020
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}