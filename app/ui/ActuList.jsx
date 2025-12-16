"use client";

import Image from "next/image";
import Link from "next/link";

export default function Actu({ articles = [] }) {
  if (!articles.length) {
    return (
      <p className="text-center text-gray-500">
        Aucune actualité disponible.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((actu) => (
        <article
          key={actu.slug}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
          <Image
            src={actu.image}
            alt={actu.title}
            width={400}
            height={220}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{actu.title}</h3>
            <p className="text-gray-700 text-sm mb-4">
              {actu.description}
            </p>
            <Link
              href={actu.route}
              className="text-blue-600 font-semibold hover:underline"
            >
              Lire la suite →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
