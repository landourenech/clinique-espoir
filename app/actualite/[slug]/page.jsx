import { notFound } from "next/navigation";
import LayoutActualite from "../layout";
import HeroSection from "../../ui/HeroSection";
import Actu from "../../ui/ActuList";
import { actualites, news } from "../../lib/data/services";

export default async function ActualitePage({ params }) {
  const { slug } = await params; // 🔥 OBLIGATOIRE en Next 15+

  if (!slug) return notFound();

  const safeSlug = slug.toLowerCase();

  let articles = [];
  let title = "";
  let bgImage = "";

  if (safeSlug === "actualites") {
    articles = actualites;
    title = "Actualités & Médias";
    bgImage = "/actualites/hero.jpg";
  } else if (safeSlug === "news") {
    articles = news;
    title = "News & Médias";
    bgImage = "/news/hero.jpg";
  } else {
    return notFound();
  }

  return (
    <LayoutActualite>
      <HeroSection title={title} bgImage={bgImage} />
      <Actu articles={articles} />
    </LayoutActualite>
  );
}
