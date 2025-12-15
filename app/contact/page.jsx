import React from 'react'

function Contact() {
  return (
    <main>
      {/* Section Hero avec la map */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=Owendo,Gabon&output=embed"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-5xl md:text-8xl text-white font-bold text-center px-4">
          Contactez-nous
        </h1>
      </section>

      {/* Section Formulaire + Heures */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10">

          {/* FORMULAIRE (gauche) */}
          <div className="flex-1 bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-red-600">
              Contactez-nous via le formulaire suivant
            </h2>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <textarea
                placeholder="Votre message"
                className="border border-gray-300 rounded px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded hover:bg-red-700 transition font-semibold"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* HEURES DE VISITE (droite) */}
          <div className="flex-1 bg-red-700 text-white shadow-lg p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 uppercase">
              Heures de visite
            </h2>

            <ul className="space-y-4 text-lg">
              <li className='underline'>
                <strong>Lundi - Dimanche :</strong> 08h00 - 20h00
              </li>
              <li className='underline'>
                <strong>Pause :</strong> 12h00 - 13h00
              </li>
              <li className='underline'>
                <strong>Soirée :</strong> 14h00 - 16h00
              </li>
              <li className="text-sm font-bold opacity-90">
                Urgences disponibles 24h/24
              </li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Contact
