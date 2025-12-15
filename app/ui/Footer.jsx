import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-red-900 px-20 text-white p-10">
      
      {/* Titre */}
      <h1 className="relative uppercase font-bold text-4xl inline-block mb-8">
        liens rapides
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-white"></span>
      </h1>

      {/* Conteneur des deux blocs */}
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* Bloc 1 */}
        <div>
          <ul className="space-y-3">
            <li><Link href="/">patients</Link></li>
            <li><Link href="/about/history">Facultés de proccl</Link></li>
            <li><Link href="/actualite/news">Actualités et Médias</Link></li>
            <li><Link href="/services/laboratoire">Laboratoire</Link></li>
          </ul>
        </div>

        {/* Bloc 2 */}
        <div>
          <ul className="space-y-3">
            <li><Link href="/about">A propos de nous</Link></li>
            <li><Link href="/carriere">Portail des carrières</Link></li>
            <li><Link href="/contact">Contactez-nous</Link></li>
            <li><Link href="/services">Services clients</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
