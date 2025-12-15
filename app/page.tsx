"use client";
import Link from "next/link";
import { FaUserMd, FaAmbulance, FaFlask, FaXRay, FaStethoscope,FaHandsHelping,FaPhone } from "react-icons/fa";
import Hero from '@/app/ui/Hero'
import Image from "next/image";

const services = [
  { name: "Consultations Générales", icon: <FaUserMd />, href: "/services/general" },
  { name: "Soins d'Urgence", icon: <FaAmbulance />, href: "/services/urgence" },
  { name: "Laboratoire Médical", icon: <FaFlask />, href: "/services/laboratoire" },
  { name: "Imagerie Médicale", icon: <FaXRay />, href: "/services/imagerie" },
  { name: "Consultations Spécialisées", icon: <FaStethoscope />, href: "/services/specialiste" },
    { name: "Soutien Psychologique", icon: <FaHandsHelping />, href: "/services/psychologique" },
];
const imageLoader =[
  { src: '/partenaire1.jpg',
  },
  {
    src: '/partenaire2.jpg',
  },
  {
    src: '/partenaire3.jpg',
  },  
  {
    src: '/partenaire4.png',
  }
]
function page() {
  return (
    <main>
      <Hero />
      <section className="px-6 py-10">
      <h1 className="text-4xl text-center font-bold mb-6 text-black">Services Clinique</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20  ">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="flex flex-col items-center justify-center border border-amber-600  shadow-black p-6 text-center cursor-pointer hover:bg-red-700 hover:text-white transition-all"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <span className="font-medium">{service.name}</span>
          </Link>
        ))}
      </div>
      <Link href="/services" className="flex justify-center mt-8">
      <button className="bg-amber-500 text-white px-4 py-2 rounded lowercase hover:underline">voir plus</button>
      </Link>
    </section>
    <section className="relative  h-[60vh] my-10 mx-20 overflow-hidden rounded-3xl">
  {/* Image de fond */}
  <Image
    src="/clinic.png"
    alt="clinique espoir"
    fill
    className="object-cover"
    priority
  />

  {/* Overlay texte */}
  <div className="absolute top-0 right-0 h-full w-full md:w-1/3 bg-black/60 flex items-center">
  <div className="text-white p-6 space-y-4 text-sm md:text-base">
    
    <h2 className="text-lg font-semibold uppercase">
      lorem ipsum dolor
    </h2>

    <p className="leading-relaxed opacity-90">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Sed do eiusmod tempor</li>
      <li>Ut labore et dolore magna</li>
    </ul>

  </div>
</div>
</section>
<section className="flex flex-col md:flex-row gap-6 px-20 mb-10">

  {/* ACTUALITÉS */}
  <div className="bg-pink-200 p-10 shadow-lg flex-1 rounded-xl flex flex-col">
    
    <h1 className="text-2xl font-bold mb-6 text-red-800">
      Actualités et Evènements
    </h1>

    {/* Vidéo */}
    <div className="relative w-full h-80 rounded-lg overflow-hidden">
      <video
        src="/proc.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Bouton EN DEHORS de la vidéo */}
    <div className="mt-6 flex justify-center">
      <Link
        href="/actualite"
        className="bg-amber-600 text-white px-6 py-3
                   hover:bg-red-800 transition-all duration-300
                   lowercase shadow-md"
      >
        voir plus
      </Link>
    </div>

  </div>
  {/* CONTACT */}
  <div className="bg-pink-200 p-10 shadow-lg flex-1 rounded-xl">
    <h1 className="text-2xl font-bold mb-6 text-red-800">
      contactez-nous
    </h1>
    <p className="text-4xl">Pour toute question d&ordre général :</p>
    <p className="text-4xl"><span className="font-bold">ceeproccl@gmail.com</span></p>
    <p className="text-4xl">Demandes de renseignements auprès du service à la clientèle :
ceeproccl@gmail.com
Renseignements médicaux :
ceeproccl@gmail.com</p>
 <div className="flex items-center space-x-2 lowercase">
      <FaPhone />
      <p className="text-4xl">+24166361219</p>
      <Link href="mailto:ceeproccl@gmail.com"className="text-4xl">
        ceeproccl@gmail.com
      </Link>
    </div>
  </div>

</section>
<section className="flex flex-col md:flex-row w-full h-100 md:h-125 px-20 roundedfull">
  {/* Texte */}
  <div className="bg-red-700 text-white flex-1 flex flex-col justify-center px-10 py-12 rounded-l-xl shadow-lg">
  <h1 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6 uppercase">
    à propos de la clinique
  </h1>

  <p className="text-sm md:text-base leading-7 text-white/90">
    La Clinique de l&apos;Espoir et de l&apos;Espérance (CEE PROC CL) est un établissement
    de santé privé situé à Libreville, Gabon. Fondée en 2020, la clinique s&apos;est
    engagée à fournir des soins médicaux de haute qualité à la communauté locale.
    Avec une équipe de professionnels de la santé dévoués, la CEE PROC CL offre une
    gamme complète de services médicaux, y compris des consultations générales, des
    soins d&apos;urgence, des services de laboratoire et d&apos;imagerie, ainsi que
    des consultations spécialisées. La clinique met l&apos;accent sur
    l&apos;accessibilité des soins, l&apos;innovation médicale et le bien-être
    global des patients.
  </p>
</div>
  {/* Image */}
  <div className="relative flex-1 h-full rounded-r-lg shadow-lg overflow-hidden">
  <Image
    src="/propo.jpg"
    alt="Clinique Espoir"
    fill
    className="object-cover"
    priority
  />
</div>
</section>
<section className="py-16 px-10 bg-white">
      {/* Titre */}
      <h1 className="text-red-700 text-2xl md:text-5xl font-bold text-center mb-12">
        Nos partenaires en assurance
      </h1>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
        {imageLoader.map((item, index) => (
          <div
            key={index}
            className="w-40 h-24 relative grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={item.src}
              alt={`Partenaire ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
    </main>
  )
}

export default page
