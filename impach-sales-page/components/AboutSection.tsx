import Image from "next/image";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "10+", label: "Tahun Pengalaman" },
  { icon: Users, value: "1000+", label: "Pelajar Cemerlang" },
  { icon: BookOpen, value: "3", label: "Cawangan" },
];

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 sm:py-28 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/Images/hero-placeholder-1.jpeg"
                alt="Pelajar IMPACH"
                width={300}
                height={400}
                className="rounded-2xl object-cover w-full h-48 sm:h-64"
              />
              <Image
                src="/Images/hero-placeholder-2.jpeg"
                alt="Kelas IMPACH"
                width={300}
                height={300}
                className="rounded-2xl object-cover w-full h-40 sm:h-52"
              />
            </div>
            <div className="space-y-4 pt-8">
              <Image
                src="/Images/hero-placeholder-3.jpeg"
                alt="Guru IMPACH"
                width={300}
                height={300}
                className="rounded-2xl object-cover w-full h-40 sm:h-52"
              />
              <Image
                src="/Images/hero-placeholder-4.jpeg"
                alt="Aktiviti IMPACH"
                width={300}
                height={400}
                className="rounded-2xl object-cover w-full h-48 sm:h-64"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
              Tentang Kami
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-6">
              IMPACH Academy — Lebih Daripada Sekadar Tuisyen
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Di IMPACH Academy, kami bukan sekadar pendidik — kami adalah juara pertumbuhan
              dan kecemerlangan. Dengan pengalaman lebih 10 tahun, kami telah membimbing lebih
              daripada 1,000 pelajar untuk mencapai kecemerlangan akademik.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Kami menawarkan kurikulum komprehensif dengan pendekatan pembelajaran yang unik
              termasuk Mindbook dan Drillbook, serta program pengayaan percuma seperti Kelas
              Mengaji dan Kelas Mandarin untuk perkembangan holistik pelajar.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#073050]/10 rounded-xl mb-3">
                    <Icon className="w-6 h-6 text-[#073050]" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#073050]">{value}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
