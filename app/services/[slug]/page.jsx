import { services } from "../../lib/data/services";
import ServiceLayout from "../layout";
import HeroSection from "../../ui/HeroSection";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }) {
  // Next.js 16 App Router : params peut être une Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Chercher le service correspondant
  const service = services.find(s => s.slug.toLowerCase() === slug.toLowerCase());

  if (!service) return notFound();

  return (
    <ServiceLayout service={service}>
        <HeroSection title={service.title} image={service.image} />
      <section className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
        <p className="text-lg leading-7">{service.description}</p>
      </section>
    </ServiceLayout>
  );
}
