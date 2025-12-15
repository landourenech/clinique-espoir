"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="w-full fixed top-0 z-50 shadow-md">
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 bg-white">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.jpg"
            alt="Clinique Espoir Logo"
            width={40}
            height={40}
          />
          <p className="text-xs text-center font-bold lowercase mt-1">
            clinique de l&apos;espoir et de l&apos;espérance
          </p>
        </div>

        <Link
          href="/contact"
          className="bg-amber-500 text-white px-4 py-2 rounded lowercase hover:underline"
        >
          contactez-nous
        </Link>
      </div>

      {/* CONTACT BAR */}
      <div className="flex justify-between items-center bg-red-700 text-white px-6 py-2 text-sm">
        <div className="flex items-center space-x-2 lowercase">
          <FaPhone />
          <span>+241 66 36 12 19</span>
          <Link href="mailto:ceeproccl@gmail.com">
            ceeproccl@gmail.com
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link href="#" target="_blank"><FaFacebookF /></Link>
          <Link href="#" target="_blank"><FaInstagram /></Link>
          <Link href="#" target="_blank"><FaTwitter /></Link>
          <Link href="#" target="_blank"><FaLinkedinIn /></Link>
          <Link href="#" target="_blank"><FaWhatsapp /></Link>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="bg-red-800 text-white py-4">
        <ul className="flex justify-center space-x-6">

          <li>
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
          </li>

          {/* A PROPOS */}
          <li className="relative">
            <button onClick={() => toggleMenu("apropos")} className="hover:underline">
              À propos
            </button>
            {openMenu === "apropos" && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg min-w-45">
                <li onClick={closeMenu} className="px-4 py-2 hover:bg-red-600 hover:text-white">
                  <Link href="/about/history">Histoire</Link>
                </li>
                <li onClick={closeMenu} className="px-4 py-2 hover:bg-red-600 hover:text-white">
                  <Link href="/about/team">Équipe</Link>
                </li>
              </ul>
            )}
          </li>

          {/* SERVICES */}
          <li className="relative">
            <button onClick={() => toggleMenu("services")} className="hover:underline">
              Services
            </button>
            {openMenu === "services" && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg min-w-55">
                {[
                  { label: "Laboratoire", link: "/services/laboratoire" },
                  { label: "Gynécologie", link: "/services/gynecologie" },
                  { label: "Pédiatrie", link: "/services/pediatrie" },
                  { label: "Consultations générales", link: "/services/general" },
                  { label: "Hospitalisation", link: "/services/hospitalisation" },
                ].map((item) => (
                  <li
                    key={item.link}
                    onClick={closeMenu}
                    className="px-4 py-2 hover:bg-red-600 hover:text-white"
                  >
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* AUTRES SERVICES */}
          <li className="relative">
            <button onClick={() => toggleMenu("autres")} className="hover:underline">
              Autres services
            </button>
            {openMenu === "autres" && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg min-w-45">
                <li onClick={closeMenu} className="px-4 py-2 hover:bg-red-600 hover:text-white">
                  <Link href="/autres/laboratoire">Laboratoire</Link>
                </li>
                <li onClick={closeMenu} className="px-4 py-2 hover:bg-red-600 hover:text-white">
                  <Link href="/autres/radiologie">Radiologie</Link>
                </li>
              </ul>
            )}
          </li>

          {/* ACTUALITÉS */}
          <li className="relative">
            <button onClick={() => toggleMenu("actualite")} className="hover:underline">
              Actualités & Médias
            </button>
            {openMenu === "actualite" && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg min-w-45">
                <li onClick={closeMenu} className="px-4 py-2 hover:bg-red-600 hover:text-white">
                  <Link href="/actualite/news">Actualités</Link>
                </li>
                <li onClick={closeMenu} className="px-4 py-2 hover:bg-red-600 hover:text-white">
                  <Link href="/actualite/media">Médias</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>

          <li>
            <Link href="/carriere" className="hover:underline">
              Carrière
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
