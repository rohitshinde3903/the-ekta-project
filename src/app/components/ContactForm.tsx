// components/ContactForm.tsx
'use client'

import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function ContactForm() {
  return (
    <section className="px-10 py-20 bg-white">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message..." />
        <Button className="bg-black text-white hover:bg-gray-800">Send</Button>
      </div>
    </section>
  )
}
