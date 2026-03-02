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

  const AU_TIMEZONES = [
    { label: "Perth", tz: "Australia/Perth" },
    { label: "Darwin", tz: "Australia/Darwin" },
    { label: "Brisbane", tz: "Australia/Brisbane" },
    { label: "Sydney", tz: "Australia/Sydney" },
    { label: "Melbourne", tz: "Australia/Melbourne" },
    { label: "Adelaide", tz: "Australia/Adelaide" },
    { label: "Hobart", tz: "Australia/Hobart" },
  ];

  const formatDateOnly = (date: Date, timeZone: string) =>
    new Intl.DateTimeFormat("en-AU", {
      timeZone,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

  const formatTimeOnly = (date: Date, timeZone: string) =>
    new Intl.DateTimeFormat("en-AU", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);

  if (loading || webinars.length === 0) return null;

  return (
    <section className="relative bg-black py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-10 h-[2px] bg-yellow-500 mx-auto mb-3"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
            Exclusive Investment Webinars
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Premium real estate insights across Australia
          </p>
        </div>

        <div className="space-y-8">
          {webinars.map((webinar) => {
            const eventDate = new Date(webinar.startDateTime);

            return (
              <div
                key={webinar._id}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1320]/90 to-[#050b1a]/90 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-8"
              >
                {/* Title */}
                <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
                  {webinar.title}
                </h3>

                {/* Date */}
                <div className="flex items-center justify-center gap-2 mb-6 text-gray-300 text-sm">
                  <Calendar size={16} className="text-yellow-500" />
                  <span className="font-medium text-white">
                    {formatDateOnly(eventDate, webinar.australiaTimeZone)}
                  </span>
                </div>

                {/* Timezone Grid */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3 text-sm">
                    <Clock size={16} className="text-yellow-500" />
                    <span className="text-white font-medium">
                      Across Australia
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
                    {AU_TIMEZONES.map((zone) => {
                      const isBase = zone.tz === webinar.australiaTimeZone;

                      return (
                        <div
                          key={zone.tz}
                          className={`rounded-lg py-2 px-3 transition-all duration-300 ${
                            isBase
                              ? "bg-yellow-500 text-black font-semibold shadow-lg"
                              : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
                          }`}
                        >
                          {zone.label} – {formatTimeOnly(eventDate, zone.tz)}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Platform */}
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-6">
                  <Video size={16} className="text-yellow-500" />
                  <span>Live on Google Meet</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
                  {webinar.description}
                </p>

                {/* Button */}
                <a
                  href={webinar.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/40 shadow-md"
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
