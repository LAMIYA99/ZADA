"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";

// Mock data for demonstration purposes
const initialCartItems = [
  {
    id: "1",
    name: "Double Cheese Burger",
    price: 15.0,
    quantity: 1,
    image: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h1_product-2-600x600.jpg",
  },
  {
    id: "2",
    name: "Spicy Chicken Pizza",
    price: 22.0,
    quantity: 2,
    image: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h1_product-3-600x600.jpg",
  },
];

export default function CartSection() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantity = (id: string, type: "inc" | "dec") => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal; // Assuming free shipping for now

  return (
    <main className="min-h-screen bg-[#F4F1EA] font-barlow relative overflow-hidden pb-24">
      <BreadcrumbBanner
        title="CART"
        img="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg"
        paths={[
          { name: "Home Page", href: "/" },
          { name: "Cart" },
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] mt-24">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items Table */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 shadow-sm overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                  <thead>
                    <tr className="border-b uppercase text-[15px] text-black font-extrabold tracking-wide">
                      <th className="pb-4 w-12 text-center"></th>
                      <th className="pb-4 w-24"></th>
                      <th className="pb-4 text-[#1a1a1a]">Product</th>
                      <th className="pb-4 text-[#1a1a1a]">Price</th>
                      <th className="pb-4 text-[#1a1a1a]">Quantity</th>
                      <th className="pb-4 text-[#1a1a1a]">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="py-6 text-center">
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-gray-400 hover:text-[#C33031] transition-colors p-2"
                            aria-label="Remove item"
                          >
                            <X size={20} />
                          </button>
                        </td>
                        <td className="py-6">
                          <div className="relative w-24 h-24  bg-[#F4F1EA] p-2">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain drop-shadow-sm p-1"
                            />
                          </div>
                        </td>
                        <td className="py-6 font-bold text-[#1a1a1a] text-lg hover:text-[#C33031] transition-colors cursor-pointer">
                          {item.name}
                        </td>
                        <td className="py-6 text-[#1a1a1a] font-semibold text-lg">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-6">
                          <div className="flex items-center border border-gray-200 w-fit rounded-full overflow-hidden bg-white">
                            <button
                              onClick={() => handleQuantity(item.id, "dec")}
                              className="px-4 py-2 text-gray-500 hover:bg-[#C33031] hover:text-white transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 text-center font-semibold text-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantity(item.id, "inc")}
                              className="px-4 py-2 text-gray-500 hover:bg-[#C33031] hover:text-white transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="py-6 text-[#C33031] font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coupon Action */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                 <div className="flex w-full sm:w-auto gap-4">
                    <input 
                      type="text" 
                      placeholder="Coupon code" 
                      className="border border-gray-200 px-6 py-4 outline-none focus:border-[#C33031] text-sm w-full sm:w-64 italic bg-white"
                    />
                    <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-[13px] hover:bg-[#C33031] transition-colors whitespace-nowrap">
                      APPLY COUPON
                    </button>
                 </div>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 border-t-4 border-[#C33031] shadow-sm">
                <h2 className="text-2xl font-extrabold mb-6 uppercase tracking-tight text-black">Cart totals</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-4">
                    <span className="font-semibold text-gray-600">Subtotal</span>
                    <span className="font-bold text-[#1a1a1a]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b pb-4">
                    <span className="font-semibold text-gray-600">Total</span>
                    <span className="font-bold text-[#C33031] text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full bg-[#C33031] text-white text-center py-5 px-6 font-bold uppercase tracking-widest text-[14px] hover:bg-black transition-colors mt-8"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center bg-white p-16 shadow-sm">
            <h2 className="text-3xl font-extrabold mb-4">Your cart is currently empty.</h2>
            <p className="text-gray-500 mb-8">Before proceed to checkout you must add some products to your shopping cart.</p>
            <Link
              href="/shop"
              className="inline-block bg-[#C33031] text-white py-4 px-10 font-bold uppercase tracking-widest text-[14px] hover:bg-black transition-colors"
            >
              Return to shop
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
