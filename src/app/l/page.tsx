import { Header } from './components/header'
import { Hero } from './components/hero'
import { Curated } from './components/curated'
import { Footer } from './components/footer'

export default function Landing() {
  return (
    <>
      <Hero />
      <main id="content" className="padding-top-bottom">
        <Curated />
      </main>
      <Footer />
    </>
  )
}
