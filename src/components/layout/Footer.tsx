import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo/4.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#050b1a] to-black text-gray-400 pt-8 pb-4 overflow-hidden">
      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
        {/* Column 1 - Brand */}
        <div className="space-y-3">
          <Image
            src={logo}
            alt="VRS RealInvest Logo"
            width={110}
            height={35}
            className="object-contain"
          />

          <p className="text-xs leading-snug text-gray-400 max-w-sm">
            Trusted real estate investment partner across Australia, delivering
            premium opportunities with clarity and confidence.
          </p>

          <div className="flex gap-2 pt-1">
            <a
              href="https://www.facebook.com/VRSrealinvest"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
            >
              <Facebook size={13} />
            </a>

            <a
              href="https://www.instagram.com/vrsrealinvest/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
            >
              <Instagram size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/sudhesh-k-valappil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
            >
              <Linkedin size={13} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-sm">Quick Links</h3>

          <ul className="space-y-1.5 text-xs">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="hover:text-yellow-500 transition"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-sm">Contact</h3>

          <a
            href="tel:+61412864050"
            className="flex items-center gap-2 text-xs hover:text-yellow-500 transition"
          >
            <Phone size={13} />
            <span>+61 412 864 050</span>
          </a>

          <a
            href="mailto:sudhesh@vrsrealinvest.com.au"
            className="flex items-center gap-2 text-xs hover:text-yellow-500 transition"
          >
            <Mail size={13} />
            <span>sudhesh@vrsrealinvest.com.au</span>
          </a>

          <div className="flex items-start gap-2 text-xs hover:text-yellow-500 transition">
            <MapPin size={13} />
            <span>Serving clients across Australia</span>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10 mt-4 pt-3 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[11px]">
        <p className="text-gray-500">
          © {new Date().getFullYear()} VRS realinvest. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <Link
            href="/privacy-policy"
            className="hover:text-yellow-500 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="hover:text-yellow-500 transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
