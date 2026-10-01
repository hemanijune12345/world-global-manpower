import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WHATSAPP */}
      <a
        href="https://wa.me/919312406166"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <span className="text-xs font-black">WA</span>
      </a>

      {/* CALL */}
      <a
        href="tel:+919312406166"
        aria-label="Call World Global Manpower"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0647B8] text-white shadow-xl transition hover:scale-110"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}