import HeroSection from "../ui/HeroSection";

export default function ServiceLayout({ children}) {
  return (
    <main className={`service-theme`}>
      {children}
    </main>
  );
}
