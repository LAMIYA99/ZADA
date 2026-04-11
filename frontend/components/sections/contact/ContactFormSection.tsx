"use client";

import { ArrowBigRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-[#f9f6f0] font-barlow py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] text-center">
        <h2 className="text-[70px] font-bold mb-12">SEND A MESSAGE</h2>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 max-w-[800px] mx-auto">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Subject (full width) */}
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-green-600 lg:col-span-2"
          />

          {/* Message (full width textarea) */}
          <textarea
            placeholder="Message"
            rows={6}
            className="border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-green-600 lg:col-span-2 resize-none"
          />

          {/* Submit button */}
          <button
  type="submit"
  className="relative overflow-hidden text-[16px] text-white font-semibold rounded-md w-[176px] h-[60px] flex items-center justify-center mt-4 lg:mt-0 lg:col-span-2 gap-2 mx-auto
    bg-gradient-to-r from-[#007537] via-[#007537] to-[#AF2C2B] bg-[length:200%_100%] bg-left transition-all duration-500 hover:bg-right"
>
  SUBMIT
  <span className="inline-block"><ArrowBigRight /></span>
</button>
        </form>
      </div>
    </section>
  );
}
