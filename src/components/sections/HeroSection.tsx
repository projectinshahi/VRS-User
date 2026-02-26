"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroData {
  type?: "image" | "video";
  videoUrl?: string;
  images?: string[];
}

export default function HeroSection() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Fetch Hero Data
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/hero`);
        const data = await res.json();
        setHero(data);
      } catch (error) {
        console.log("Hero fetch error", error);
      }
    };

    fetchHero();
  }, [API_BASE_URL]);

  // Image Slider
  useEffect(() => {
    if (hero?.type === "image" && hero.images && hero.images.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % hero.images!.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [hero]);

  const hasImages =
    hero?.type === "image" && hero.images && hero.images.length > 0;

  const hasVideo =
    hero?.type === "video" && hero.videoUrl && hero.videoUrl !== "";

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* IMAGE MODE */}
      {hasImages &&
        hero!.images!.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            alt="hero"
          />
        ))}

      {/* VIDEO MODE */}
      {hasVideo && (
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${getYoutubeId(
              hero!.videoUrl!,
            )}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYoutubeId(
              hero!.videoUrl!,
            )}`}
            title="Hero Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="w-12 h-[2px] bg-yellow-500 mb-6"></div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl tracking-wide">
          Your Trusted Partner in <br />
          <span className="text-yellow-500 font-medium">
            Luxury Real Estate Investment
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl">
          Discover premium investment opportunities across Australia's most
          sought-after locations.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          {/* Free Webinar - New Left Button */}
          <button
            onClick={() => router.push("/webinar")}
            className="border border-yellow-500 text-yellow-500 px-6 py-2.5 text-sm rounded-sm font-medium hover:bg-yellow-500 hover:text-black transition"
          >
            Free Webinar
          </button>

          {/* Updated Button */}
          <button
            onClick={() => router.push("/properties")}
            className="bg-yellow-500 text-black px-6 py-2.5 text-sm rounded-sm font-medium hover:bg-yellow-400 transition"
          >
            Explore Secured Properties
          </button>

          {/* Existing Consultation Button */}
          <a
            href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-yellow-500 text-yellow-500 px-6 py-2.5 text-sm rounded-sm font-medium hover:bg-yellow-500 hover:text-black transition">
              Free Consultation
            </button>
          </a>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </div>
    </section>
  );
}

/**
 * Extract YouTube Video ID
 */

function getYoutubeId(url: string) {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
}
