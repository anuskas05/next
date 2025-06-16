"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Lead Generation", image: "/images/service1.jpg", link: "https://www.quoreb2b.com/pages/displayAdvertisement" },
  { name: "Content Syndication", image: "/images/service2.png", link: "#" },
  { name: "Account Based Marketing", image: "/images/service3.jpeg", link: "#" },
 { name: "Data Solution", image: "/images/service4.webp", link: "/DataSolutions" },
 { name: "Email Marketing", image: "/images/service5.jpg", link: "#" },
];

const solutions = [
  { name: "Content Syndication", image: "/images/solution1.png", link: "/Content-Syndication" },
  { name: "Full Funnel Marketing", image: "/images/solution2.jpg", link: "#" },
  { name: "Sales Qualified Leads", image: "/images/solution3.jpg", link: "/salesqualified" },
  { name: "Partner Marketing", image: "/images/solution4.webp", link: "#" },
];

export default function LowNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo - Now with two images side-by-side */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/ICONH.jpg" alt="Icon" width={40} height={40} />
          <Image src="/images/QUORE.png" alt="Quore Logo" width={100} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-sm ">
          <div
            className="text-gray-800 hover:text-teal-500 cursor-pointer transition-colors duration-200"
            onMouseEnter={() => router.push("/")}
          >
            HOME
          </div>

          <Link href="/about" className="text-gray-800 hover:text-teal-500 transition">
            ABOUT
          </Link>

        
          {/* SERVICE Dropdown */}
          <div className="relative group">
            <div className="flex items-center text-gray-800 hover:text-teal-500 transition cursor-pointer">
              <Link href="https://www.quoreb2b.com/service" className="text-gray-800 hover:text-teal-500 transition">
                SERVICE
              </Link>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
            <div className="absolute top-full left-0 md:left-auto md:right-0 mt-4 bg-white shadow-lg rounded-md p-4 w-screen max-w-4xl flex flex-wrap justify-start gap-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="rounded overflow-hidden group hover:shadow-md transition block w-40 flex-shrink-0"
                >
                  <div
                    className="w-48 h-36 bg-cover bg-center text-white flex items-end p-3 rounded"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <span className="text-white px-2 py-1 text-xs rounded bg-black">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SOLUTION Dropdown */}
          <div className="relative group">
            <div className="flex items-center text-gray-800 hover:text-teal-500 transition cursor-pointer">
              SOLUTION <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
            <div className="absolute top-full left-0 md:left-auto md:right-0 mt-4 bg-white shadow-lg rounded-md p-4 flex gap-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {solutions.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="rounded overflow-hidden group hover:shadow-md transition block w-48 flex-shrink-0"
                >
                  <div
                    className="w-48 h-36 bg-cover bg-center text-white flex items-end p-3 rounded"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <span className="text-white px-2 py-1 text-xs rounded bg-black">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="text-gray-800 hover:text-teal-500 transition">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <XMarkIcon className="h-6 w-6 text-black" /> : <Bars3Icon className="h-6 w-6 text-black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black px-4 py-2 space-y-2 text-sm font-semibold text-center">
          <Link href="/" className="block py-1" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          <Link href="/about" className="block py-1" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>

          <div>
            <div 
              className="flex items-center justify-center py-1 cursor-pointer text-black"
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
            >
              <span className="text-black">SERVICE</span>
              <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${mobileServiceOpen ? 'rotate-180' : ''}`} />
            </div>
            {mobileServiceOpen && (
              <ul className="ml-2 space-y-1">
                {services.map((s, i) => (
                  <li key={i}>
                    <Link href={s.link} className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <div 
              className="flex items-center justify-center py-1 text-black cursor-pointer"
              onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
            >
              <span className="text-black">SOLUTION</span>
              <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${mobileSolutionOpen ? 'rotate-180' : ''}`} />
            </div>
            {mobileSolutionOpen && (
              <ul className="ml-2 space-y-1">
                {solutions.map((s, i) => (
                  <li key={i}>
                    <Link href={s.link} className="block py-1" onClick={() => setMobileMenuOpen(false)}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/contact" className="block py-1 text-black" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}