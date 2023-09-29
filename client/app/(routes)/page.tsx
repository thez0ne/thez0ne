import Welcome from '@/components/welcome';
import Background from '@/components/background';
import About from '@/components/about';
import Projects from '@/components/projects';
import Experiences from '@/components/experiences';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className='select-none flex min-h-screen flex-col items-center justify-between p-0 m-0 relative'>
      <Navbar />
      <Welcome />
      <Background />
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  )
}
