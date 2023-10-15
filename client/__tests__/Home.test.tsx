import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Welcome from '@/components/welcome'
import Navbar from '@/components/navbar'
import Background from '@/components/background'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

test('welcome', () => {
  render(<Navbar />)
  render(<Welcome />)
  render(<Background />)
  render(<About />)
  render(<Contact />)
  render(<Footer />)
  // const main = within(screen.getByRole('main'))
  // expect(main.getByRole('heading', { level: 1, name: /welcome/i })).toBeDefined();
  // expect(
  //   main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })
  // ).toBeDefined()

  // const footer = within(screen.getByRole('contentinfo'))
  // const link = within(footer.getByRole('link'))
  // expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined()
})