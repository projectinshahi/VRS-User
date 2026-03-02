"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import axios from "axios";

interface SecuredProperty {
  _id: string;
  title: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  securedPrice: string;
  marketPrice: string;
  currentPrice: string;
}

export default function SecuredProperties() {
  const [securedProperties, setSecuredProperties] = useState<SecuredProperty[]>(
    [],
  );
  const [selectedProperty, setSelectedProperty] =
    useState<SecuredProperty | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  // ================= FETCH =================
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${API}/api/secured-properties`);
        setSecuredProperties(res.data);
      } catch (error) {
        console.error("Error fetching secured properties:", error);
      }
    };

    fetchProperties();
  }, [API]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.3;

    const animate = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pauseScroll = () => {
      isPausedRef.current = true;

      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      pauseTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    };

    container.addEventListener("wheel", pauseScroll);
    container.addEventListener("touchstart", pauseScroll);
    container.addEventListener("mousedown", pauseScroll);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      container.removeEventListener("wheel", pauseScroll);
      container.removeEventListener("touchstart", pauseScroll);
      container.removeEventListener("mousedown", pauseScroll);
    };
  }, [securedProperties]);

  // ================= ESC CLOSE =================
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProperty(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ================= BODY SCROLL LOCK =================
  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProperty]);

  return (
    <>
      {/* ================= SECTION ================= */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Secured Properties
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Successfully secured for our valued clients
            </p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          >
            {securedProperties.map((property) => (
              <div
                key={property._id}
                className="relative min-w-[380px] md:min-w-[420px] h-[380px] rounded-2xl overflow-hidden group flex-shrink-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
                  style={{
                    backgroundImage: `url(${property.coverImage})`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute top-4 right-4 bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                  <CheckCircle size={14} />
                  Secured
                </div>

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg font-medium">{property.title}</h3>

                  <button
                    onClick={() => {
                      setSelectedProperty(property);
                      setCurrentImage(0);
                    }}
                    className="mt-3 bg-yellow-500 text-black px-4 py-2 text-xs rounded-sm font-medium hover:bg-yellow-400 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProperty && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="bg-[#111] max-w-5xl w-full rounded-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl font-bold backdrop-blur-md transition"
            >
              ✕
            </button>

            {/* Gallery Slider */}
            <div className="relative h-[400px]">
              <img
                src={selectedProperty.galleryImages[currentImage]}
                className="w-full h-full object-cover"
                alt="property"
              />

              {selectedProperty.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImage((prev) =>
                        prev === 0
                          ? selectedProperty.galleryImages.length - 1
                          : prev - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() =>
                      setCurrentImage(
                        (prev) =>
                          (prev + 1) % selectedProperty.galleryImages.length,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Details */}
            <div className="p-8 text-white space-y-6">
              <h2 className="text-2xl font-medium">{selectedProperty.title}</h2>

              <p className="text-gray-300 leading-relaxed">
                {selectedProperty.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-700">
                <div>
                  <p className="text-gray-400 text-sm">Secured Price</p>
                  <p className="text-yellow-500 text-lg font-semibold">
                    {selectedProperty.securedPrice}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Market Value</p>
                  <p className="text-white text-lg font-semibold">
                    {selectedProperty.marketPrice}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Current value</p>
                  <p className="text-white text-lg font-semibold">
                    {selectedProperty.currentPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
