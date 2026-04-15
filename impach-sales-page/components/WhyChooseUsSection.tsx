import {
  Award,
  BookOpenCheck,
  ClipboardCheck,
  BookMarked,
  BadgePercent,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "10+ Tahun Pengalaman Tuisyen",
    description:
      "Kami mempunyai rekod prestasi yang terbukti dalam membimbing pelajar ke arah kecemerlangan akademik.",
  },
  {
    icon: BookOpenCheck,
    title: "Program Pengayaan PERCUMA",
    description:
      "Kelas Mengaji dan Kelas Mandarin disediakan secara percuma untuk perkembangan holistik pelajar.",
  },
  {
    icon: ClipboardCheck,
    title: "Penilaian Diagnostik Suku Tahunan",
    description:
      "Ujian IMPACH berkala untuk mengenal pasti kelemahan dan memantau kemajuan setiap pelajar.",
  },
  {
    icon: BookMarked,
    title: "Kurikulum Komprehensif",
    description:
      "Mindbook dan Drillbook direka khas untuk memastikan pemahaman mendalam setiap topik.",
  },
  {
    icon: BadgePercent,
    title: "Promosi 2026 Eksklusif",
    description:
      "Diskaun 25% yuran pendaftaran beserta program bernilai RM2,421 secara PERCUMA.",
  },
  {
    icon: Users,
    title: "1000+ Pelajar Cemerlang",
    description:
      "Lebih seribu pelajar telah berjaya mencapai keputusan cemerlang bersama IMPACH Academy.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="kenapa-kami" className="py-20 sm:py-28 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
            Kenapa Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-4">
            Kenapa Pilih IMPACH Academy?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami komited untuk memberikan pendidikan berkualiti tinggi dengan pendekatan yang menyeluruh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-gray-50 hover:bg-[#073050] rounded-2xl p-8 border-t-4 border-[#e5a944] transition-all duration-300 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#e5a944]/15 group-hover:bg-[#e5a944]/25 rounded-2xl mb-5 transition-colors">
                <Icon className="w-7 h-7 text-[#e5a944] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#073050] group-hover:text-white mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
