import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061B3A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="World Global Manpower"
                width={62}
                height={62}
                className="h-14 w-14 object-contain"
              />

              <div>
                <p className="font-black tracking-wide">WORLD GLOBAL</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  Manpower Pvt. Ltd.
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Connecting Indian professionals with employment opportunities
              in Russia and assisting Indian students with MBBS education
              opportunities in Russia.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-cyan-400">
                Home
              </Link>

              <Link href="/jobs" className="transition hover:text-cyan-400">
                Jobs in Russia
              </Link>

              <Link
                href="/mbbs-russia"
                className="transition hover:text-cyan-400"
              >
                MBBS in Russia
              </Link>

              <Link href="/about" className="transition hover:text-cyan-400">
                About Us
              </Link>

              <Link
                href="/gallery"
                className="transition hover:text-cyan-400"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-cyan-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-bold">Our Services</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <Link
                href="/jobs"
                className="transition hover:text-cyan-400"
              >
                Recruitment for Russia
              </Link>

              <Link
                href="/mbbs-russia"
                className="transition hover:text-cyan-400"
              >
                MBBS in Russia
              </Link>

              <span>Candidate Guidance</span>
              <span>Admission Assistance</span>
              <span>Travel Guidance</span>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold">Contact Us</h3>

            <div className="mt-5 space-y-5 text-sm text-slate-400">
              <a
                href="tel:+919312406166"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={18} className="mt-0.5 text-cyan-400" />
                <span>9312-406-166</span>
              </a>

              <a
                href="tel:+918587020020"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={18} className="mt-0.5 text-cyan-400" />
                <span>8587-020-020</span>
              </a>

              <a
                href="mailto:hello@wgmanpower.com"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 text-cyan-400" />
                <span>hello@wgmanpower.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-400" />
                <span>
                  1st Floor D-14/194, Pocket 14,
                  <br />
                  Sector 7, Rohini,
                  <br />
                  Delhi, India - 110085
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} World Global Manpower Pvt. Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}