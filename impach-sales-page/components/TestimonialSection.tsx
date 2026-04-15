"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  "/testimonial/2026-04-15 21.32.40.mp4",
  "/testimonial/IMG_6913.mp4",
  "/testimonial/IMG_6916.mp4",
];

const images = [
  "/testimonial/2026-04-15 21.33.04.jpg",
  "/testimonial/659146875_1563428055788630_2393712168606357797_n.jpg",
  "/testimonial/665800124_1563433839121385_5457975739244505110_n.jpg",
  "/testimonial/666919062_1569433751854727_2642683522282458693_n.jpg",
  "/testimonial/668845334_1568564131941689_1841977627509584678_n.jpg",
  "/testimonial/670274808_1572765164854919_753049768226593550_n.jpg",
  "/testimonial/671177455_1571870964944339_3878753594363471419_n.jpg",
];

export default function TestimonialSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    autoPlayRef.current = setInterval(nextImage, 4000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(nextImage, 4000);
  };

  const handlePrev = () => {
    prevImage();
    resetAutoPlay();
  };

  const handleNext = () => {
    nextImage();
    resetAutoPlay();
  };

  const handleDot = (index: number) => {
    setCurrentImage(index);
    resetAutoPlay();
  };

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (playingVideo === index) {
      video.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        videoRefs.current[playingVideo]?.pause();
      }
      video.play();
      setPlayingVideo(index);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gray-50 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
            Testimoni
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dengar sendiri pengalaman pelajar dan ibu bapa yang telah bersama IMPACH Academy.
          </p>
        </div>

        {/* Videos */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {videos.map((src, index) => (
            <div
              key={src}
              className="relative bg-black rounded-2xl overflow-hidden shadow-lg aspect-[9/16] cursor-pointer"
              onClick={() => toggleVideo(index)}
            >
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={src}
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setPlayingVideo(null)}
              />
              {playingVideo !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 bg-[#e5a944] rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="relative aspect-[16/9] sm:aspect-[2/1]">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={src}
                  alt={`Testimoni ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[#073050]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[#073050]" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDot(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentImage
                    ? "bg-[#e5a944] w-6"
                    : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
