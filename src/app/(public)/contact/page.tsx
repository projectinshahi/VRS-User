// "use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const API = process.env.NEXT_PUBLIC_API_BASE_URL;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     australiaDuration: "",
//     mortgageYears: "",
//     baPreference: "",
//     agree: false,
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData((prev) => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.agree) {
//       setStatus("Please agree to the policy ❌");
//       return;
//     }

//     const res = await fetch(`${API}/api/contact`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (res.ok) {
//       setStatus("Message sent successfully ✅");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         australiaDuration: "",
//         mortgageYears: "",
//         baPreference: "",
//         agree: false,
//       });
//     } else {
//       setStatus("Something went wrong ❌");
//     }
//   };

//   return (
//     <main className="pt-28 bg-black text-white min-h-screen">
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-14">
//             <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
//             <h1 className="text-3xl md:text-4xl font-medium tracking-wide">
//               Get In Touch
//             </h1>
//             <p className="text-gray-400 mt-3 text-sm">
//               Let’s discuss your next premium property investment.
//             </p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
//             <form onSubmit={handleSubmit} className="space-y-6">

//               {/* Name + Email */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter name *"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter email *"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
//                 />
//               </div>

//               {/* Phone */}
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number *"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
//               />

//               {/* Australia Duration */}
//               <input
//                 type="text"
//                 name="australiaDuration"
//                 placeholder="How long you been in Australia?"
//                 value={formData.australiaDuration}
//                 onChange={handleChange}
//                 className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
//               />

//               {/* Mortgage Years */}
//               <input
//                 type="text"
//                 name="mortgageYears"
//                 placeholder="How many years of Mortgage do you have?"
//                 value={formData.mortgageYears}
//                 onChange={handleChange}
//                 className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
//               />

//               {/* BA Preference */}
//               <div>
//                 <p className="text-sm text-gray-400 mb-3">
//                   Do you prefer using Buyers Agent Service for your investment property purchase?
//                 </p>
//                 <textarea
//                   rows={3}
//                   name="baPreference"
//                   value={formData.baPreference}
//                   onChange={handleChange}
//                   className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
//                 ></textarea>
//               </div>

//               {/* Policy Checkbox */}
//               <div className="flex items-center gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   name="agree"
//                   checked={formData.agree}
//                   onChange={handleChange}
//                   className="w-4 h-4"
//                 />
//                 <label>
//                   I agree to the{" "}
//                   <span className="text-yellow-500 underline cursor-pointer">
//                     policy
//                   </span>
//                 </label>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium"
//               >
//                 Submit
//               </button>

//               {status && (
//                 <p className="text-center text-sm mt-3">
//                   {status}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




"use client";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    el.style.width = "0px";
    const timer = setTimeout(() => {
      el.style.transition = "width 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.width = "48px";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-28 bg-[#080808] text-white min-h-screen relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(202,160,45,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <section className="relative py-20">

        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div
            ref={lineRef}
            className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"
            style={{ width: 0 }}
          />
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-yellow-500/70 mb-3 font-light"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Premium Property Investment
          </p>
          <h1
            className="text-4xl md:text-5xl font-light tracking-widest mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.12em",
            }}
          >
            Get In Touch
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-[1px] w-8 bg-white/10" />
            <p
              className="text-gray-500 text-xs tracking-[0.2em] uppercase font-light"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Let's begin the conversation
            </p>
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
        </div>

        {/* Iframe Container */}
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          {/* Corner ornaments */}
          <div className="relative">
            {/* Top-left corner */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-yellow-500/40 z-10" />
            {/* Top-right corner */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-yellow-500/40 z-10" />
            {/* Bottom-left corner */}
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-yellow-500/40 z-10" />
            {/* Bottom-right corner */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-yellow-500/40 z-10" />

            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(202,160,45,0.12), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(202,160,45,0.5), transparent)",
                }}
              />

              <iframe
                src="https://login.calzolconnect.com/widget/form/6935360ed20b3"
                className="w-full h-[750px] md:h-[850px] block"
                style={{ border: "none" }}
                title="Enquiry Form"
              />
            </div>
          </div>

          {/* Footer note */}
          <p
            className="text-center text-gray-600 text-[10px] tracking-[0.25em] uppercase mt-8"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Your enquiry is handled with complete discretion
          </p>
        </div>
      </section>
    </main>
  );
}