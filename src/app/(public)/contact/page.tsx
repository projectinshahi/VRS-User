"use client";

import { useState } from "react";

export default function ContactPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    australiaDuration: "",
    mortgageYears: "",
    baPreference: "",
    agree: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      setStatus("Please agree to the policy ❌");
      return;
    }

    const res = await fetch(`${API}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        australiaDuration: "",
        mortgageYears: "",
        baPreference: "",
        agree: false,
      });
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <main className="pt-28 bg-black text-white min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="w-12 h-[2px] bg-yellow-500 mx-auto mb-4"></div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-wide">
              Get In Touch
            </h1>
            <p className="text-gray-400 mt-3 text-sm">
              Let’s discuss your next premium property investment.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
              />

              {/* Australia Duration */}
              <input
                type="text"
                name="australiaDuration"
                placeholder="How long you been in Australia?"
                value={formData.australiaDuration}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
              />

              {/* Mortgage Years */}
              <input
                type="text"
                name="mortgageYears"
                placeholder="How many years of Mortgage do you have?"
                value={formData.mortgageYears}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
              />

              {/* BA Preference */}
              <div>
                <p className="text-sm text-gray-400 mb-3">
                  Do you prefer using Buyers Agent Service for your investment property purchase?
                </p>
                <textarea
                  rows={3}
                  name="baPreference"
                  value={formData.baPreference}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm"
                ></textarea>
              </div>

              {/* Policy Checkbox */}
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <label>
                  I agree to the{" "}
                  <span className="text-yellow-500 underline cursor-pointer">
                    policy
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium"
              >
                Submit
              </button>

              {status && (
                <p className="text-center text-sm mt-3">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}