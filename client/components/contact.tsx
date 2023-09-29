'use client'

import '@/styles/contact.css'

import { useState } from "react"
import sendEmail from "@/utils/sendemail";

export type FormData = {
  name: string;
  email: string;
  message: string;
  submitted: boolean;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    sendEmail({ name, email, message, submitted });
    setSubmitted(true);
  };

  return (
    <div id="contact" className="flex flex-col justify-center items-center min-h-screen min-w-full bg-gray-950">
      <p className="contact-text font-bold text-4xl p-12">Contact Me</p>
      <form className="flex flex-col justify-center items-center w-1/2">
        <div className="w-full mb-5">
          <label className="block text-lg font-medium mb-3" htmlFor="name">Name</label>
          <input
            className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:shadow-md"
            type="text"
            name="name"
            placeholder='Full Name'
            onChange={(e) => { setName(e.target.value) }}
            required
          />
        </div>
        <div className="w-full mb-5">
          <label className="block text-lg font-medium mb-3" htmlFor="email">Email</label>
          <input
            className="w-full rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:shadow-md"
            type="text"
            name="email"
            placeholder='email@example.com'
            onChange={(e) => { setEmail(e.target.value) }}
            required
          />
        </div>
        <div className="w-full mb-5">
          <label className="block text-lg font-medium mb-3" htmlFor="message">Message</label>
          <textarea
            className="resize-none w-full rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:shadow-md"
            name="message"
            rows={4}
            placeholder='Type your message'
            onChange={(e) => { setMessage(e.target.value) }}
            required
          />
        </div>
        <button
          className="submit-button mt-6 hover:shadow-form rounded-md py-3 px-8 text-lg text-white font-semibold outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  )
}
