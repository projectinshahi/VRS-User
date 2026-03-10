"use client";

import { useEffect, useState, useRef } from "react";
import { PlayCircle, Volume2, VolumeX } from "lucide-react";

export default function DiscoverVideoSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API}/api/discover-video`);
      const json = await res.json();
      setData(json);
    };

    if (API) fetchData();
  }, [API]);

  if (!data) return null;

  const getVideoId = (url: string) => {
    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(data.videoUrl);
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&mute=1`;

  const playVideo = () => {
    iframeRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*",
    );
  };

  const pauseVideo = () => {
    iframeRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*",
    );
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!iframeRef.current) return;

    const command = isMuted ? "unMute" : "mute";

    iframeRef.current.contentWindow?.postMessage(
      `{"event":"command","func":"${command}","args":""}`,
      "*",
    );

    setIsMuted(!isMuted);
  };

  return (
    <section className="relative py-14 border-t border-white/10">
      <div className="text-center mb-8">
        <div className="w-10 h-[2px] bg-yellow-500 mx-auto mb-3"></div>
        <h2 className="text-xl md:text-3xl font-medium text-white">
          Discover vrs realInvest
        </h2>
        <p className="text-gray-400 mt-1 text-xs md:text-sm">
          Watch our story and mission
        </p>
      </div>

      <div
        className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
        onClick={() => window.open(data.videoUrl, "_blank")}
      >
        <div className="relative w-full aspect-video">
          <iframe
            ref={iframeRef}
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
          />

          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <PlayCircle
              size={55}
              className="text-white opacity-80 group-hover:text-yellow-500 transition duration-300"
            />
          </div>

          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/80 transition"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-xs md:text-sm text-center px-4">
        Learn about our commitment to excellence and our proven track record.
      </p>
    </section>
  );
}
