import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/background-hero.jpg"
        alt="IMPACH Academy"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#073050]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white pt-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          Nurture{" "}
          <span className="text-[#e5a944]">Competent</span>{" "}
          Learners
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          Pusat tuisyen berkualiti tinggi untuk pelajar Darjah 4 hingga Tingkatan 5.
          Lebih 10 tahun pengalaman membimbing 1000+ pelajar cemerlang.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <a
            href="https://wa.link/olf8w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-button"
          >
            <MessageCircle className="w-6 h-6" />
            Daftar Sekarang
          </a>
          <a
            href="#tentang-kami"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
          >
            Ketahui Lebih Lanjut
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#tentang-kami" className="animate-bounce-arrow inline-block">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </a>
      </div>
    </section>
  );
}
