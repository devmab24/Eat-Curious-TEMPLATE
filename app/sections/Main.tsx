import Nav from "../components/Navbar"
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
    </main>
  )
}

export default Main