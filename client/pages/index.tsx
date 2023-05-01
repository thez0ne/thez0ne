import { Montserrat } from 'next/font/google'
import React, { useState, useEffect } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200'],
})

export default function Home() {
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState("My name is Anik Patel");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < finalText.length) {
      setTimeout(() => {
        setText(text + finalText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className={`${montserrat.className} mb-3 text-5xl`}>
        <h1>Welcome.</h1>
      </div>
      <div className='mb-3'>
        <p>{text}</p>
      </div>

    </main>
  )
}
