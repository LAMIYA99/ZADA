"use client";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import {
  Facebook,
  Heart,
  Linkedin,
  Minus,
  Plus,
  Trash,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const images = [
  "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_27.png",
  "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_7.png",
  "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_5.png",
  "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_4.png",
];

export default function DetailSection() {
  const [active, setActive] = useState(images[0]);
  const [count, setCount] = useState(1);
  return (
    <section className="w-full font-barlow bg-[#f5f2ed]">
      <BreadcrumbBanner
        title=""
        img="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg"
        paths={[{ name: "Home Page", href: "/" }, { name: "Contact Us" }]}
      />
      <div className="container mx-auto  max-w-[1320px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col w-full">
            <img
              src={active}
              alt="burger"
              className="w-full max-w-[632px] h-[732px] object-contain"
            />

            <div className="flex gap-4 mt-6 justify-start">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActive(img)}
                  className={`w-[90px] h-[90px] rounded-[24px] border cursor-pointer flex items-center justify-center transition
        ${active === img ? "border-[#C33130] border-2" : "border-gray-200"}
      `}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[50px] font-bold leading-[1.1] text-[#212121]">
              BIG MAC
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <div className="text-[#FF9E0B] text-lg">★★★★★</div>
              <span className="text-[#464646] text-[16px]">
                (5 customer reviews)
              </span>
            </div>

            <p className="text-[#464646] text-[18px] mt-10 leading-normal ">
              Accusantium quis aut voluptatem id quasi voluptate. At blanditiis
              voluptas deleniti nihil. <br /> Aperiam sed animi recusandae sint.
            </p>

            <h2 className="text-[40px] font-bold text-[#C33130] mt-8">
              35.15$
            </h2>

            <ul className="mt-3.5 text-[16px] text-[#212121]">
              <li>• Free global shipping on all orders</li>
              <li>• 30 days easy returns if you change your mind</li>
              <li>• Order before noon for same day dispatch</li>
            </ul>

            <div className="flex items-center gap-2 mt-8">
              <h2 className="text-[20px] font-bold uppercase">Quantity:</h2>
              <div className="flex items-center px-[15px] border-2 border-[#B7B7B7] rounded-lg overflow-hidden">
                <button
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                  className="px-2 py-4 text-lg"
                >
                  <Minus size={20} />
                </button>
                <span className="px-4 !text-[20px] font-bold">{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-2 py-4 text-lg"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button className="bg-[#02833E] hover:bg-[#AF2C2B] text-white px-22  py-4  rounded-lg font-semibold transition duration-300  flex items-center gap-2">
                <Trash size={18} /> ADD TO CART
              </button>

              <button className="border w-[52px] h-[52px] flex items-center justify-center rounded-lg">
                <Heart size={20} fill="black" />
              </button>
            </div>

            <div className="mt-8 text-[16px] text-gray-600 flex flex-col gap-1 ">
              <p>
                <span className="font-semibold text-black">SKU:</span> FF001
              </p>
              <p>
                <span className="font-semibold text-black">CATEGORY:</span>{" "}
                BURGERS
              </p>
              <p>
                <span className="font-semibold text-black">TAG:</span> BURGERS
              </p>

              <div className="flex items-center gap-3 mt-2 ">
                <span className="font-semibold text-black">SHARE:</span>
                <Facebook size={18} fill="black" />
                <Twitter size={18} fill="black" />
                <Linkedin size={18} fill="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
