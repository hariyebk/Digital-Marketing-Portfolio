import { Navbar, Hero, Certifications, Projects, Footer } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1151px] mx-auto px-7">
        <Navbar />
        <Hero />
        <Certifications />
        <div className="max-medium:flex max-medium:justify-center">
            <Projects />
        </div>
        <Footer />
    </main>
  );
}
