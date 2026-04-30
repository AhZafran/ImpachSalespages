"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const images = [
  "/majlisApresiasi/IMG_6854.jpg",
  "/majlisApresiasi/IMG_6855.jpg",
  "/majlisApresiasi/IMG_6858.jpg",
  "/majlisApresiasi/IMG_6861.jpg",
  "/majlisApresiasi/IMG_6863.jpg",
  "/majlisApresiasi/IMG_6865.jpg",
  "/majlisApresiasi/IMG_6868.jpg",
  "/majlisApresiasi/IMG_6870.jpg",
  "/majlisApresiasi/IMG_6873.jpg",
  "/majlisApresiasi/IMG_6874.jpg",
  "/majlisApresiasi/IMG_6875.jpg",
  "/majlisApresiasi/IMG_6876.jpg",
];

export default function MajlisApresiasiSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextImage();
      else prevImage();
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#e5a944] font-semibold text-sm tracking-widest uppercase mb-3">
            Galeri
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#073050] mb-4">
            Majlis Apresiasi SPM 2025
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meraikan kejayaan pelajar-pelajar cemerlang SPM bersama IMPACH Academy.
          </p>
        </div>

        {/* Video */}
        <div
          className="relative bg-black rounded-2xl overflow-hidden shadow-lg mb-10 cursor-pointer max-w-4xl mx-auto aspect-video"
          onClick={toggleVideo}
        >
          <video
            ref={videoRef}
            src="/majlisApresiasi/IMG_6957.mp4"
            className="w-full h-full object-cover"
            playsInline
            onEnded={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-20 h-20 bg-[#e5a944] rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-9 h-9 text-white ml-1" fill="white" />
              </div>
            </div>
          )}
        </div>

        {/* Image Carousel */}
        <div
          className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative aspect-[4/3]">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={src}
                  alt={`Majlis Apresiasi SPM 2025 - ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[#073050]" />
          </button>
          <button
            onClick={nextImage}
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
                onClick={() => setCurrentImage(index)}
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
