import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Leaf,
  Package,
  Wheat,
} from "lucide-react";

const WHATSAPP_NUMBER = "918587020020";

const whatsappMessage = encodeURIComponent(
  "Hello World Global Manpower, I am interested in your Import & Export services."
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-white"
      style={{ width: size + 10, height: size + 10 }}
    >
      <Image
        src="/whatsapp-logo.png"
        alt="WhatsApp"
        width={size}
        height={size}
        className="h-auto w-auto object-contain"
      />
    </span>
  );
}

const products = [
  {
    title: "Rice",
    subtitle: "Premium Indian Rice",
    description:
      "Quality rice sourced from trusted suppliers for international trade and bulk requirements.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=85",
    alt: "Premium rice grains",
    icon: Wheat,
  },
  {
    title: "Fresh Fruits",
    subtitle: "Fresh Produce",
    description:
      "Fresh and carefully selected fruits suitable for international buyers and distributors.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85",
    alt: "Fresh fruits",
    icon: Leaf,
  },
  {
    title: "Coffee",
    subtitle: "Indian Coffee",
    description:
      "Quality Indian coffee products prepared for wholesale and international supply.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=85",
    alt: "Coffee beans",
    icon: Globe2,
  },
  {
    title: "Pulses / Daal",
    subtitle: "Indian Pulses",
    description:
      "Selected pulses and daal products for bulk buyers, distributors and food businesses.",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=1000&q=85",
    alt: "Indian pulses and lentils",
    icon: Package,
  },
];

const process = [
  "Share your product or sourcing requirement.",
  "Our team discusses quantity, quality and destination.",
  "We coordinate sourcing, documentation and shipment requirements.",
  "Goods are prepared for international delivery.",
];

export default function ImportExportPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">
        <Image
          src="/russia-warehouse.jpg"
          alt="International import and export warehouse"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-4xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Globe2 size={16} />
              India • Russia • Global Trade
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Global Food
              <span className="block text-sky-400">Trade.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Reliable import and export solutions for rice, fresh fruits,
              coffee and pulses from India to international markets.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon size={22} />
                Send Trade Enquiry
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Our Team
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              International Trade
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Connecting Indian products with global markets.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              World Global Manpower Pvt. Ltd. is expanding its international
              business services into import and export, helping businesses
              source quality Indian food and agricultural products for global
              markets.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Bulk sourcing support",
                "Supplier coordination",
                "International trade assistance",
                "Documentation and shipment coordination",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-emerald-500"
                  />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <Image
              src="/russia-city.jpg"
              alt="International business and trade"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              Our Products
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Products for international buyers
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We work with selected product categories for wholesale,
              distribution and international trade requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    {/* Standard img is intentional here so no remote-image
                        hostname needs to be added to next.config.ts */}
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-sky-600 shadow-lg">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-black uppercase tracking-wider text-sky-600">
                      {product.subtitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      {product.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {product.description}
                    </p>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-3 font-bold text-slate-950 transition group-hover:text-sky-600"
                    >
                      <WhatsAppIcon size={18} />
                      Enquire Now
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              From enquiry to international delivery.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our team helps coordinate the major steps involved in your
              international sourcing and export requirement.
            </p>
          </div>

          <div className="space-y-5">
            {process.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="pt-2 text-lg font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950">
        <Image
          src="/russia-night.jpg"
          alt="Global trade and international business"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-400">
            Start Your Trade Enquiry
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Looking for Indian products for your international market?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us what you need, including product, quantity and destination.
            Our team will get in touch with you.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-black text-white shadow-lg transition hover:bg-[#20bd5a]"
          >
            <WhatsAppIcon size={22} />
            WhatsApp Trade Team
          </a>
        </div>
      </section>
    </main>
  );
}
