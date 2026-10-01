import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#061B3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(8,199,217,0.28),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(6,71,184,0.55),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              <MessageCircle size={17} />
              We&apos;re Here to Help
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight text-white md:text-6xl">
              Let&apos;s
              <span className="text-cyan-300"> Connect.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether you are looking for a job opportunity in Russia or
              exploring MBBS education options, our team is here to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* CONTACT DETAILS */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0647B8]">
                Contact Information
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950">
                Talk to our team.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Reach out to World Global Manpower for recruitment enquiries,
                job opportunities in Russia or MBBS education guidance.
              </p>

              <div className="mt-8 space-y-4">
                {/* PHONE 1 */}
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

                {/* PHONE 2 */}
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

                {/* EMAIL */}
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

                {/* ADDRESS */}
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

                {/* OFFICE HOURS */}
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

            {/* FORM */}
            <div className="rounded-[2rem] bg-[#061B3A] p-7 shadow-2xl md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Send an Enquiry
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Fill in your details and our team can get in touch with you.
                </p>
              </div>

              <form className="mt-8 space-y-5">
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
                      type="text"
                      placeholder="Your name"
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
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    I am interested in
                  </label>

                  <select
                    id="interest"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-slate-300 outline-none transition focus:border-cyan-400"
                  >
                    <option value="" disabled className="bg-[#061B3A]">
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

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0647B8] to-[#08C7D9] px-5 py-4 font-bold text-white transition hover:opacity-90"
                >
                  <Send size={18} />
                  Submit Enquiry
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Your enquiry form will be connected to the website backend
                  when we add the database.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 lg:grid-cols-2">
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

              <a
                href="https://www.google.com/maps/search/?api=1&query=1st+Floor+D-14%2F194%2C+Pocket+14%2C+Sector+7%2C+Rohini%2C+Delhi+110085"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0647B8] px-6 py-4 font-bold text-white transition hover:bg-[#05398F]"
              >
                Open in Google Maps
                <MapPin size={18} />
              </a>
            </div>

            <div className="flex min-h-[350px] items-center justify-center bg-gradient-to-br from-[#061B3A] via-[#0647B8] to-[#08C7D9] p-8">
              <div className="text-center text-white">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                  <MapPin size={40} />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Rohini, Delhi
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CTA */}
      <section className="bg-gradient-to-r from-[#0647B8] to-[#08C7D9] py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Prefer to speak directly?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-blue-50">
            Call our team for employment opportunities or MBBS guidance.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919312406166"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#0647B8] transition hover:bg-slate-100"
            >
              <Phone size={18} />
              9312-406-166
            </a>

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