"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Video } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function WebinarSection() {
  const [webinars, setWebinars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await fetch(`${API}/api/webinars`);
        if (!res.ok) return;
        const data = await res.json();
        setWebinars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (API) fetchWebinars();
  }, []);

  // ✅ Convert 24hr time → AM/PM
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const h = parseInt(hour);

    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;

    return `${formattedHour}:${minute} ${ampm}`;
  };

  if (loading || webinars.length === 0) return null;

  return (
    <section className="relative bg-black py-14 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-8 h-[2px] bg-yellow-500 mx-auto mb-2"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
            Exclusive Investment Webinars
          </h2>
          <p className="text-gray-400 mt-1 text-xs md:text-sm">
            Premium real estate insights across Australia
          </p>
        </div>

        <div className="space-y-6">
          {webinars.map((webinar) => {
            return (
              <div
                key={webinar._id}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1320]/90 to-[#050b1a]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6"
              >
                {/* Title */}
                <h3 className="text-lg md:text-xl text-white font-semibold mb-3">
                  {webinar.title}
                </h3>

                {/* Day */}
                <div className="flex items-center justify-center gap-2 mb-3 text-gray-300 text-xs md:text-sm">
                  <Calendar size={14} className="text-yellow-500" />
                  <span className="font-medium text-white">
                    {webinar.day}
                  </span>
                </div>

                {/* Time + Timezone */}
                <div className="flex items-center justify-center gap-2 mb-4 text-gray-300 text-xs md:text-sm">
                  <Clock size={14} className="text-yellow-500" />
                  <span className="text-white font-semibold">
                    {formatTime(webinar.time)}{" "}
                    <span className="text-yellow-400">
                      {webinar.australiaTimeZone}
                    </span>
                  </span>
                </div>

                {/* Platform */}
                <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-4">
                  <Video size={14} className="text-yellow-500" />
                  <span>Live on Google Meet</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 max-w-lg mx-auto mb-4 text-xs md:text-sm leading-relaxed">
                  {webinar.description}
                </p>

                {/* Button */}
                <a
                  href={webinar.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-5 py-2 rounded-md text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/40 shadow-sm"
                >
                  Join Webinar
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}