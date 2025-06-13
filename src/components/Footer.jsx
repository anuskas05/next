"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white  border-gray-200">
      <div className="w-full max-w-[1900px]  mx-auto px-12 py-30 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-0 font-quicksand">
        {/* Column 1: Logo + About */}
        <div className="pr-8">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/images/ICONH.jpg" alt="Logo" width={40} height={40} />
            <h2 className="font-bold text-2xl text-gray-800 tracking-tight">QUORE B2B MARKETING</h2>
          </div>
            <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Quore B2B Marketing, we help businesses grow through strategic, creative partnerships that drive results and make them stand out in the competitive B2B landscape.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="pl-4">
          <h3 className="font-bold text-2xl mb-2 tracking-tight text-gray-800">QUICK LINKS</h3>
            <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            </div>
          <ul className="space-y-2 text-lg text-gray-900 font-semibold">
            <li><a href="#" className="hover:text-[#00d8a6] transition">Careers</a></li>
            <li><a href="#" className="hover:text-[#00d8a6] transition">About</a></li>
            <li><a href="#" className="hover:text-[#00d8a6] transition">Terms of use</a></li>
            <li><a href="#" className="hover:text-[#00d8a6] transition">Privacy & Policy</a></li>
            <li><a href="#" className="hover:text-[#00d8a6] transition">California Do Not Sell My Info</a></li>
            <li><a href="#" className="hover:text-[#00d8a6] transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="pl-4">
          <h3 className="font-bold text-2xl mb-2 tracking-tight text-gray-800">CONTACT</h3>
            <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            </div>
          <p className="text-lg text-gray-700 mb-8">
            <span className="text-[#00d8a6] font-bold text-xl">India:</span> Marvel Fuego Office, 7140 seventh floor, opposite We Work, Magarpatta road, Hadapsar, Pune 411028
          </p>
          <p className="text-lg text-gray-700 mb-8">
            <span className="text-[#00d8a6] font-bold text-xl">USA:</span> 539 W. Commerce St #2577 Dallas, TX 75208
          </p>
          <p className="text-lg text-gray-700 mb-8">Email: contactus@quoreb2b.com</p>
          <p className="text-lg text-gray-700">Phone: +1 332-231-0404</p>
        </div>

        {/* Column 4: Map */}
        <div className="pl-4">
          <h3 className="font-bold text-2xl mb-2 tracking-tight text-gray-800">LOCATION ON MAP</h3>
            <div className="flex gap-2">
            <div className="h-1 w-2 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            <div className="h-1 w-10 bg-[#00d8a6] mb-7 mt-4 rounded-sm"></div>
            </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2294415337057!2d73.856743!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08744a74c81%3A0x4cbe7e56a3d1a1a9!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1633958808463!5m2!1sen!2sin"
            width="100%"
            height="170"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
            title="Quore B2B Marketing Location Map"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#333] text-[#ffffffcb] text-sm flex items-center justify-between py-12 px-12 rounded-b-lg">
        <span>© 2025 quoreb2b.com | All Rights Reserved.</span>
        <a
          href="https://www.linkedin.com/company/quoreb2bmarketing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffffffcb] hover:text-[#00d8a6] text-2xl transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}