import Image from "next/image";
import { MessageCircle, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Tawaran", href: "#tawaran" },
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#073050] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo/impachlogo.png"
              alt="IMPACH Academy"
              width={200}
              height={60}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Di IMPACH Academy, kami lebih daripada sekadar pendidik — kami adalah juara pertumbuhan dan kecemerlangan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e5a944] mb-4">
              Pautan Pantas
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cawangan */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e5a944] mb-4">
              Cawangan
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.link/olf8w" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> IMPACH Bangi
                </a>
              </li>
              <li>
                <a href="https://wa.link/6km1d7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> IMPACH Kajang
                </a>
              </li>
              <li>
                <a href="https://wa.link/k1ubg8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> IMPACH Semenyih
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#e5a944] mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:01832009842" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" /> 018-3200 942
                </a>
              </li>
              <li>
                <a href="https://wa.link/olf8w" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" /> WhatsApp Kami
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                42, Jalan 7/7A, Seksyen 7, 43650 Bandar Baru Bangi, Selangor
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} IMPACH Academy. Hak Cipta Terpelihara.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Dasar Privasi
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
              Terma & Syarat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
