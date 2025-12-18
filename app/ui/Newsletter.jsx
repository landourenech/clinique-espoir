import React from 'react'
import Image from 'next/image';

export default function Newsletter() {
  return (
    <div className='flex  rounded-lg bg-red-50 mx-30 my-10'>
      <div>
       <Image
        src="/clinique.jpg"
        alt="Newsletter"
        width={600}
        height={400}
        className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4 p-6">Inscrivez-vous à notre Newsletter</h2>
        <p className="mb-6 p-6">Restez informé des dernières nouvelles et mises à jour de la Clinique de l&apos;Espoir en vous inscrivant à notre newsletter mensuelle.</p>
        <form className="p-6">
            <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="w-full p-3 mb-4 border border-amber-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
                type="submit"
                className="w-full bg-red-600 text-white p-3 rounded-4xl hover:bg-red-700 transition"
            >
                S&apos;inscrire
            </button>
        </form>
      </div>
    </div>
  )
}
