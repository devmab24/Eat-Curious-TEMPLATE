import Nav from "../components/Navbar"
import Features from "./features/page"
import About from "./about/page"
import GallerySlides from "./gallery/page"
import Hero from "./hero/page"

function Main() {
  return (
    <main className="container">
        <Nav />
        <section>
          <Hero />
        </section>
        <section>
          <GallerySlides />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Features />
        </section>
    </main>
  )
}

export default Main