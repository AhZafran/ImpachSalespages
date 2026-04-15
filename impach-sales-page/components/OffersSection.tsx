import Image from "next/image";

const levels = [
  {
    group: "Sekolah Rendah",
    items: ["Darjah 4", "Darjah 5", "Darjah 6"],
  },
  {
    group: "Menengah Rendah",
    items: ["Tingkatan 1", "Tingkatan 2", "Tingkatan 3"],
  },
  {
    group: "Menengah Atas",
    items: ["Tingkatan 4 (Core / Sains / Akaun)", "Tingkatan 5 (Core / Sains / Akaun)"],
  },
];

const streams = [
  {
    image: "/tawaranKami/alirancore.jpg",
    title: "Core",
    subjects: ["Bahasa Melayu", "English", "Mathematics", "Sejarah"],
  },
  {
    image: "/tawaranKami/aliransains.jpg",
    title: "Sains",
    subjects: ["Biology", "Chemistry", "Physics", "Additional Mathematics"],
  },
  {
    image: "/tawaranKami/aliranacc.jpg",
    title: "Akaun",
    subjects: ["Account", "Economic", "Perniagaan", "Sciences"],
  },
];

const pricingItems = [
  { item: "Yuran Pendaftaran", original: "RM400/tahun", promo: "RM299/tahun", savings: "RM101" },
  { item: "Yuran Subjek (4 Subjek)", original: null, promo: "RM349/bulan", savings: null },
  { item: "Ujian IMPACH", original: "RM160/tahun", promo: "PERCUMA", savings: "RM160" },
  { item: "LEP (Mengaji + Mandarin)", original: "RM180/bulan", promo: "PERCUMA", savings: "RM2,160/tahun" },
  { item: "Modul (Mindbook + Drillbook)", original: null, promo: "RM150/tahun", savings: null },
];

export default function OffersSection() {
  return (
    <section id="tawaran" className="py-20 sm:py-28 bg-gray-50 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
            Tawaran Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-4">
            Apa Yang Kami Tawarkan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Program pembelajaran menyeluruh dari Darjah 4 hingga Tingkatan 5 dengan pelbagai aliran subjek.
          </p>
        </div>

        {/* Tahap Pengajian */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {levels.map((level) => (
            <div
              key={level.group}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-[#073050] mb-4">{level.group}</h3>
              <ul className="space-y-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-[#e5a944] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Aliran Subjek */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {streams.map(({ image, title, subjects }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative w-full h-48">
                <Image
                  src={image}
                  alt={`Aliran ${title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
              <h3 className="text-lg font-bold text-[#073050] mb-4">Aliran {title}</h3>
              <ul className="space-y-2">
                {subjects.map((subj) => (
                  <li key={subj} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {subj}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
