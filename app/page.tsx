import Hero from "@/components/Hero"
import BackgroundGrid from "@/components/BackgroundGrid"

export default function Home() {
  return (
    <main>
      <section className="relative">
        <BackgroundGrid />
      </section>
      <Hero />
    </main>
  )
}
