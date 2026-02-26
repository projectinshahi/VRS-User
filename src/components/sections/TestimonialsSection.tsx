// "use client";

// import { useEffect, useState } from "react";
// import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

// interface TextReview {
//   _id: string;
//   name: string;
//   location: string;
//   text: string;
//   rating: number;
// }

// interface VideoReview {
//   _id: string;
//   name: string;
//   role: string;
//   thumbnail: string;
//   youtubeLink: string;
// }

// export default function TestimonialsSection() {
//   const API = process.env.NEXT_PUBLIC_API_BASE_URL;

//   const [reviews, setReviews] = useState<TextReview[]>([]);
//   const [videos, setVideos] = useState<VideoReview[]>([]);
//   const [index, setIndex] = useState(0);

//   const [activeVideo, setActiveVideo] = useState<string | null>(null);
//   // Fetch Text Testimonials
//   useEffect(() => {
//     const fetchText = async () => {
//       const res = await fetch(`${API}/api/text-testimonials`);
//       const data = await res.json();
//       setReviews(data);
//     };

//     if (API) fetchText();
//   }, [API]);

//   // Fetch Video Testimonials
//   useEffect(() => {
//     const fetchVideos = async () => {
//       const res = await fetch(`${API}/api/video-testimonials`);
//       const data = await res.json();
//       setVideos(data);
//     };

//     if (API) fetchVideos();
//   }, [API]);

//   // Auto Slide (only if reviews exist)
//   useEffect(() => {
//     if (reviews.length === 0) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % reviews.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [reviews]);

//   const prevSlide = () =>
//     setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

//   const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);

//   return (
//     <section className="relative bg-gradient-to-b from-black via-[#071224] to-black py-20 overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.04),transparent_70%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* ================= TEXT TESTIMONIAL ================= */}
//         <div className="text-center mb-16">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Client Testimonials
//           </h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             What our satisfied clients say about us
//           </p>
//         </div>

//         {reviews.length > 0 && (
//           <div className="relative overflow-hidden max-w-3xl mx-auto mb-24">
//             <div
//               className="flex transition-transform duration-700"
//               style={{
//                 transform: `translateX(-${index * 100}%)`,
//               }}
//             >
//               {reviews.map((review) => (
//                 <div key={review._id} className="min-w-full px-4">
//                   <div className="relative bg-gradient-to-br from-[#0e1626] to-[#0b1320] border border-white/10 rounded-2xl p-10 text-center">
//                     <Quote
//                       className="absolute top-6 right-6 text-yellow-500 opacity-10"
//                       size={60}
//                     />

//                     <div className="flex justify-center gap-1 mb-5">
//                       {[...Array(review.rating || 5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={16}
//                           className="text-yellow-500 fill-yellow-500"
//                         />
//                       ))}
//                     </div>

//                     <p className="text-gray-300 text-base leading-relaxed mb-6">
//                       "{review.text}"
//                     </p>

//                     <h4 className="text-white font-medium">{review.name}</h4>
//                     <p className="text-gray-500 text-sm">{review.location}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
//             >
//               <ChevronLeft className="text-yellow-500" size={20} />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
//             >
//               <ChevronRight className="text-yellow-500" size={20} />
//             </button>
//           </div>
//         )}

//         {/* ================= VIDEO TESTIMONIALS ================= */}
//         <div className="text-center mb-14">
//           <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//           <h2 className="text-3xl md:text-4xl font-medium text-white">
//             Video Testimonials
//           </h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Hear directly from our happy clients
//           </p>
//         </div>

//         {videos.length > 0 && (
//           <div className="flex gap-6 overflow-x-auto pb-4">
//             {videos.map((video) => {
//               const videoId =
//                 video.youtubeLink.split("v=")[1]?.split("&")[0] ||
//                 video.youtubeLink.split("/").pop();

//               return (
//                 <div
//                   key={video._id}
//                   onClick={() => window.open(video.youtubeLink, "_blank")}
//                   className="relative min-w-[380px] h-[450px] rounded-2xl overflow-hidden border border-white/10 group flex-shrink-0 cursor-pointer"
//                 >
//                   {/* YouTube Player */}
//                   <iframe
//                     id={`player-${video._id}`}
//                     className="absolute inset-0 w-full h-full"
//                     src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&mute=1`}
//                     allow="autoplay; encrypted-media"
//                   />

//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>

//                   {/* Text */}
//                   <div className="absolute bottom-6 left-6 text-white z-10">
//                     <h4 className="font-medium text-lg">{video.name}</h4>
//                     <p className="text-gray-300 text-sm">{video.role}</p>
//                   </div>

//                   {/* Hover Events */}
//                   <div
//                     className="absolute inset-0 z-20"
//                     onMouseEnter={() => {
//                       const iframe = document.getElementById(
//                         `player-${video._id}`,
//                       ) as HTMLIFrameElement;

//                       iframe?.contentWindow?.postMessage(
//                         '{"event":"command","func":"playVideo","args":""}',
//                         "*",
//                       );
//                     }}
//                     onMouseLeave={() => {
//                       const iframe = document.getElementById(
//                         `player-${video._id}`,
//                       ) as HTMLIFrameElement;

//                       iframe?.contentWindow?.postMessage(
//                         '{"event":"command","func":"pauseVideo","args":""}',
//                         "*",
//                       );
//                     }}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TextReview {
  _id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface VideoReview {
  _id: string;
  name: string;
  role: string;
  youtubeLink: string;
}

export default function TestimonialsSection() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [reviews, setReviews] = useState<TextReview[]>([]);
  const [videos, setVideos] = useState<VideoReview[]>([]);
  const [index, setIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  /* ================= SAFE YOUTUBE ID EXTRACTOR ================= */
  const getYoutubeId = (url: string): string | null => {
    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  /* ================= FETCH TEXT ================= */
  useEffect(() => {
    if (!API) return;

    const fetchText = async () => {
      const res = await fetch(`${API}/api/text-testimonials`);
      const data = await res.json();
      setReviews(data);
    };

    fetchText();
  }, [API]);

  /* ================= FETCH VIDEO ================= */
  useEffect(() => {
    if (!API) return;

    const fetchVideos = async () => {
      const res = await fetch(`${API}/api/video-testimonials`);
      const data = await res.json();
      setVideos(data);
    };

    fetchVideos();
  }, [API]);

  /* ================= AUTO SLIDE TEXT ================= */
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews]);

  /* ================= ESC KEY + SCROLL LOCK ================= */
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [activeVideo]);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % reviews.length);

  return (
    <section className="relative bg-gradient-to-b from-black via-[#071224] to-black py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.04),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= TEXT TESTIMONIALS ================= */}
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Client Testimonials
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            What our satisfied clients say about us
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="relative overflow-hidden max-w-3xl mx-auto mb-24">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review._id} className="min-w-full px-4">
                  <div className="relative bg-gradient-to-br from-[#0e1626] to-[#0b1320] border border-white/10 rounded-2xl p-10 text-center">
                    <Quote
                      className="absolute top-6 right-6 text-yellow-500 opacity-10"
                      size={60}
                    />

                    <div className="flex justify-center gap-1 mb-5">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6">
                      "{review.text}"
                    </p>

                    <h4 className="text-white font-medium">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {review.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
            >
              <ChevronLeft className="text-yellow-500" size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-yellow-500/20 p-2 rounded-full transition"
            >
              <ChevronRight className="text-yellow-500" size={20} />
            </button>
          </div>
        )}

        {/* ================= VIDEO TESTIMONIALS ================= */}
        <div className="text-center mb-14">
          <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Video Testimonials
          </h2>
        </div>

        {videos.length > 0 && (
          <div className="flex gap-6 overflow-x-auto pb-4">
            {videos.map((video) => {
              const videoId = getYoutubeId(video.youtubeLink);
              if (!videoId) return null;

              return (
                <div
                  key={video._id}
                  onClick={() => setActiveVideo(videoId)}
                  className="relative min-w-[380px] h-[450px] rounded-2xl overflow-hidden border border-white/10 group flex-shrink-0 cursor-pointer"
                >
                  <iframe
                    id={`preview-${video._id}`}
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&mute=1`}
                    allow="autoplay; encrypted-media"
                  />

                  <div
                    className="absolute inset-0 z-20"
                    onMouseEnter={() => {
                      const iframe = document.getElementById(
                        `preview-${video._id}`
                      ) as HTMLIFrameElement;

                      iframe?.contentWindow?.postMessage(
                        '{"event":"command","func":"playVideo","args":""}',
                        "*"
                      );
                    }}
                    onMouseLeave={() => {
                      const iframe = document.getElementById(
                        `preview-${video._id}`
                      ) as HTMLIFrameElement;

                      iframe?.contentWindow?.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        "*"
                      );
                    }}
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <h4 className="font-medium text-lg">
                      {video.name}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {video.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= CINEMATIC MODAL ================= */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="w-[90%] md:w-[80%] h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-2xl shadow-2xl"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&controls=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}