"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Apakah subjek yang ditawarkan?",
    answer:
      "Kami menawarkan 3 aliran utama: Core (Bahasa Melayu, English, Mathematics, Sejarah), Sains (Biology, Chemistry, Physics, Additional Mathematics), dan Akaun (Account, Economic, Perniagaan, Sciences). Subjek tersedia untuk pelajar Darjah 4 hingga Tingkatan 5.",
  },
  {
    question: "Berapa saiz kelas?",
    answer:
      "Saiz kelas kami dihadkan untuk memastikan setiap pelajar mendapat perhatian yang mencukupi daripada guru. Ini membolehkan pembelajaran yang lebih fokus dan berkesan.",
  },
  {
    question: "Adakah ada trial class?",
    answer:
      "Ya, kami menyediakan sesi percubaan untuk pelajar baharu. Hubungi kami melalui WhatsApp untuk menempah sesi percubaan anda.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer:
      "Yuran pendaftaran sebanyak RM299/tahun (harga promosi) perlu dibayar semasa pendaftaran. Yuran bulanan subjek sebanyak RM349/bulan. Pembayaran boleh dibuat secara tunai atau pindahan bank.",
  },
  {
    question: "Apakah kelebihan Kelas Mengaji dan Mandarin?",
    answer:
      "Kelas Mengaji dan Kelas Mandarin disediakan secara PERCUMA sebagai sebahagian daripada Lounge Enrichment Programs (LEP). Ini bernilai RM180/bulan (RM90 setiap satu) tetapi diberikan percuma kepada semua pelajar IMPACH.",
  },
  {
    question: "Bolehkah tambah subjek selepas mendaftar?",
    answer:
      "Ya, pelajar boleh menambah subjek pada bila-bila masa. Untuk Tingkatan 4 dan 5, setiap subjek tambahan dikenakan yuran RM60/subjek/bulan.",
  },
  {
    question: "Adakah modul disediakan untuk semua subjek?",
    answer:
      "Ya, modul Mindbook dan Drillbook disediakan untuk semua subjek. Kos modul ialah RM150/tahun (Darjah 4 - Tingkatan 3) atau RM45/subjek/tahun (Tingkatan 4 & 5).",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white scroll-reveal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-4">
            Soalan Lazim
          </h2>
          <p className="text-gray-600 text-lg">
            Jawapan kepada soalan yang sering ditanya oleh ibu bapa.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-gray-50 rounded-xl border border-gray-100 px-6 data-[state=open]:bg-[#073050]/5"
            >
              <AccordionTrigger className="text-left font-semibold text-[#073050] hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Masih ada soalan?</p>
          <a
            href="https://wa.link/olf8w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Tanya Kami di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
