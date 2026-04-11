"use client";

import React, { useState } from "react";
import Link from "next/link";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";

export default function CheckoutSection() {
  const [paymentMethod, setPaymentMethod] = useState("bacs");

  return (
    <main className="min-h-screen bg-[#F4F1EA] font-barlow relative overflow-hidden pb-24">
      <BreadcrumbBanner
        title="CHECKOUT"
        img="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg"
        paths={[
          { name: "Home Page", href: "/" },
          { name: "Checkout" },
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] mt-24">
        <form className="flex flex-col lg:flex-row gap-12">
          
          {/* Billing Details */}
          <div className="lg:w-[60%]">
            <h2 className="text-[28px] font-extrabold mb-8 text-[#1a1a1a] uppercase tracking-tight">Billing details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1a1a1a] font-bold mb-2">First name <span className="text-[#C33031]">*</span></label>
                <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" required />
              </div>
              <div>
                <label className="block text-[#1a1a1a] font-bold mb-2">Last name <span className="text-[#C33031]">*</span></label>
                <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" required />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Company name (optional)</label>
              <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" />
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Country / Region <span className="text-[#C33031]">*</span></label>
              <select className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors text-gray-700" required>
                <option value="US">United States (US)</option>
                <option value="UK">United Kingdom (UK)</option>
                <option value="AZ">Azerbaijan</option>
                <option value="TR">Turkey</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Street address <span className="text-[#C33031]">*</span></label>
              <input type="text" placeholder="House number and street name" className="w-full border border-gray-200 p-3 mb-4 outline-none focus:border-[#C33031] bg-white transition-colors" required />
              <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" />
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Town / City <span className="text-[#C33031]">*</span></label>
              <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" required />
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">State / County <span className="text-[#C33031]">*</span></label>
              <select className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors text-gray-700" required>
                <option value="">Select an option...</option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Postcode / ZIP <span className="text-[#C33031]">*</span></label>
              <input type="text" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" required />
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Phone <span className="text-[#C33031]">*</span></label>
              <input type="tel" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" required />
            </div>

            <div className="mb-6">
              <label className="block text-[#1a1a1a] font-bold mb-2">Email address <span className="text-[#C33031]">*</span></label>
              <input type="email" className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors" required />
            </div>
            
            <div className="mt-12">
              <h3 className="text-[24px] font-extrabold mb-6 text-[#1a1a1a] uppercase tracking-tight">Additional information</h3>
              <div className="mb-6">
                <label className="block text-[#1a1a1a] font-bold mb-2">Order notes (optional)</label>
                <textarea 
                  rows={4} 
                  placeholder="Notes about your order, e.g. special notes for delivery." 
                  className="w-full border border-gray-200 p-3 outline-none focus:border-[#C33031] bg-white transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Your Order */}
          <div className="lg:w-[40%]">
            <div className="bg-white p-8 border-t-4 border-[#C33031] shadow-sm sticky top-8">
              <h3 className="text-[24px] font-extrabold mb-6 text-[#1a1a1a] uppercase tracking-tight">Your order</h3>
              
              <div className="mb-8">
                <div className="flex justify-between border-b-2 border-gray-100 pb-4 mb-4">
                  <span className="font-bold text-[#1a1a1a] uppercase text-sm tracking-wider">Product</span>
                  <span className="font-bold text-[#1a1a1a] uppercase text-sm tracking-wider">Subtotal</span>
                </div>
                
                {/* Mock Items */}
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Double Cheese Burger <strong className="text-black">× 1</strong></span>
                  <span className="font-bold text-[#1a1a1a]">$15.00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Spicy Chicken Pizza <strong className="text-black">× 2</strong></span>
                  <span className="font-bold text-[#1a1a1a]">$44.00</span>
                </div>

                <div className="flex justify-between py-4 border-b border-gray-100 mt-2">
                  <span className="font-bold text-[#1a1a1a]">Subtotal</span>
                  <span className="font-bold text-[#1a1a1a]">$59.00</span>
                </div>

                <div className="flex justify-between py-5 border-b-2 border-gray-100 mt-2">
                  <span className="font-bold text-[#1a1a1a] text-lg">Total</span>
                  <span className="font-bold text-[#C33031] text-2xl">$59.00</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value="bacs" 
                      checked={paymentMethod === "bacs"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#C33031] w-4 h-4"
                    />
                    <span className="font-bold text-[#1a1a1a]">Direct bank transfer</span>
                  </label>
                  {paymentMethod === "bacs" && (
                    <div className="mt-4 text-sm text-gray-500 bg-white p-4 border border-gray-100 text-leading-relaxed">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value="cheque" 
                      checked={paymentMethod === "cheque"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#C33031] w-4 h-4"
                    />
                    <span className="font-bold text-[#1a1a1a]">Check payments</span>
                  </label>
                  {paymentMethod === "cheque" && (
                    <div className="mt-4 text-sm text-gray-500 bg-white p-4 border border-gray-100 text-leading-relaxed">
                      Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value="cod" 
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#C33031] w-4 h-4"
                    />
                    <span className="font-bold text-[#1a1a1a]">Cash on delivery</span>
                  </label>
                  {paymentMethod === "cod" && (
                    <div className="mt-4 text-sm text-gray-500 bg-white p-4 border border-gray-100 text-leading-relaxed">
                      Pay with cash upon delivery.
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href="#" className="text-[#C33031] hover:underline">privacy policy</Link>.
              </p>

              <button 
                type="submit" 
                className="w-full bg-[#C33031] text-white py-5 px-6 font-bold uppercase tracking-widest text-[15px] hover:bg-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Order placed successfully! This is a mock checkout.");
                }}
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
