import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const branches = [
  {
    name: "IMPACH Bangi",
    image: "/lokasiKami/impachbangi.webp",
    address: "42, Jalan 7/7A, Seksyen 7, 43650 Bandar Baru Bangi, Selangor",
    whatsapp: "https://wa.link/olf8w",
  },
  {
    name: "IMPACH Kajang",
    image: "/lokasiKami/impachkajang.webp",
    address: "Kajang, Selangor",
    whatsapp: "https://wa.link/6km1d7",
  },
  {
    name: "IMPACH Semenyih",
    image: "/lokasiKami/impachsemenyih.webp",
    address: "Semenyih, Selangor",
    whatsapp: "https://wa.link/k1ubg8",
  },
];

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-gray-50 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
            Lokasi Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-4">
            Cawangan IMPACH Academy
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            3 cawangan strategik di Bangi, Kajang dan Semenyih untuk kemudahan anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#073050] mb-2">{branch.name}</h3>
                <p className="text-gray-600 text-sm mb-5 flex items-start gap-2 flex-1">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  {branch.address}
                </p>
                <a
                  href={branch.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold px-5 py-3 rounded-full transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Cawangan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
          <a href="tel:01832009842" className="flex items-center gap-2 hover:text-[#073050] transition-colors">
            <Phone className="w-5 h-5" />
            <span>Pendaftaran: 018-3200 942</span>
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="tel:01837366384" className="flex items-center gap-2 hover:text-[#073050] transition-colors">
            <Phone className="w-5 h-5" />
            <span>Pelesenan: 018-3736 684</span>
          </a>
        </div>
      </div>
    </section>
  );
}
