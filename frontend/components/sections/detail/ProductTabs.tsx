"use client";
import { ArrowBigRight, Star } from "lucide-react";
import { useState } from "react";

export default function ProductTabs() {
  const [tab, setTab] = useState("reviews");

  return (
    <section className="w-full bg-[#f5f2ed] py-16 font-barlow">
      <div className="container mx-auto max-w-[1290px] px-4">
        {/* TABS */}
        <div className="flex gap-10 border-b border-gray-300 pb-4">
          <button
            onClick={() => setTab("desc")}
            className={`text-[30px] font-bold pb-2 ${
              tab === "desc"
                ? "text-[#C33130] border-b-2 border-[#C33130]"
                : "text-[#212121]"
            }`}
          >
            DESCRIPTION
          </button>

          <button
            onClick={() => setTab("reviews")}
            className={`text-[30px] font-bold pb-2 ${
              tab === "reviews"
                ? "text-[#C33130] border-b-2 border-[#C33130]"
                : "text-[#212121]"
            }`}
          >
            REVIEWS (5)
          </button>
        </div>

        {/* DESCRIPTION */}
        {tab === "desc" && (
          <div className="mt-10 text-[#464646] text-[18px] leading-relaxed max-w-[1000px]">
            <p>
              Natus eum omnis animi quia autem et tenetur. Doloremque quia
              dolorem porro et sunt. Odio repellat aut amet adipisci eos. Ut
              laboriosam beatae veniam.
            </p>

            <p className="mt-4">
              Veritatis dolorum eaque cum non maxime minima nihil. Vitae beatae
              qui aspernatur tempore et. Amet architecto id a praesentium vel
              minima consequuntur natus.
            </p>
          </div>
        )}

        {/* REVIEWS */}
        {tab === "reviews" && (
          <div className="mt-10">
            <h4 className="text-[14px] tracking-[2px] font-medium uppercase">
              5 reviews for Big Mac
            </h4>

            {/* SUMMARY BOX */}
            <div className="border border-gray-200 rounded-2xl p-8 mt-10 flex flex-col lg:flex-row gap-10">
              {/* LEFT */}
              <div className="text-center min-w-[200px]">
                <p className="text-[#464646]">5 Customer Reviews</p>
                <h2 className="text-[48px] font-semibold text-[#C33130] mt-4">
                  4.4<span className="text-[24px]">/5</span>
                </h2>
                <div className="text-[#FF9E0B] flex gap-0.5 items-center text-center justify-center mt-2">
                  <Star fill="#FF9E0B" size={19} />
                  <Star fill="#FF9E0B" size={19} />
                  <Star fill="#FF9E0B" size={19} />
                  <Star fill="#FF9E0B" size={19} />
                  <Star fill="#FF9E0B" size={19} />
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full space-y-4 ">
                {[40, 60, 0, 0, 0].map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[100px] text-[#FF9E0B] text-sm">
                      {"★".repeat(5 - i)}
                    </div>

                    <div className="flex-1 h-[8px] bg-[#CFCFCA] rounded-full overflow-hidden">
                      <div
                        className="h-full w-[14px] bg-[#C33130]"
                        style={{ width: `${val}%` }}
                      />
                    </div>

                    <span className="text-[18px] text-gray-500 w-[40px]">
                      {val}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEW LIST */}
            <div className="mt-16 space-y-8">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-300">
                    <img
                      className="rounded-full"
                      src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g"
                      alt=""
                    />
                  </div>

                  <div>
                    <div className="text-[#FF9E0B] flex gap-0.5  mt-2">
                      <Star fill="#FF9E0B" size={14} />
                      <Star fill="#FF9E0B" size={14} />
                      <Star fill="#FF9E0B" size={14} />
                      <Star fill="#FF9E0B" size={14} />
                      <Star fill="#FF9E0B" size={14} />
                    </div>

                    <p className="font-bold uppercase text-[#212121]">
                      Join Hiddleston
                      <span className="text-gray-400 text-sm font-normal ml-2">
                        - October 27, 2023
                      </span>
                    </p>

                    <p className="text-[#464646] text-[18px] mt-4 max-w-[1290px]">
                      This poster is absolutely stunning! The vibrant colors and
                      elegant design create a perfect harmony.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ADD REVIEW */}
            <div className="mt-16">
              <h2 className="text-[50px] tracking-[0.5px] font-bold text-[#212121]">
                ADD A REVIEW
              </h2>

              <p className="text-[#464646] text-[18px] mt-2">
                Your email address will not be published. Required fields are
                marked <span className="text-red-600">*</span>
              </p>

              <div className="mt-9 flex items-center gap-3">
                <p className="font-medium text-black text-[18px]">
                  Your rating <span className="text-red-600">*</span>
                </p>
                <div className="text-[#C8C6C1] flex gap-0.5 mt-2 text-xl">
                  <Star fill="#C8C6C1" size={18} />
                  <Star fill="#C8C6C1" size={18} />
                  <Star fill="#C8C6C1" size={18} />
                  <Star fill="#C8C6C1" size={18} />
                  <Star fill="#C8C6C1" size={18} />
                </div>
              </div>

              <div className="mt-5">
                <p className="font-medium text-[18px] text-black">
                  Your review <span className="text-red-600">*</span>
                </p>
                <textarea className="w-full h-[200px] mt-2 border border-[#EAEAEA] shadow-2xs rounded-xl p-4 outline-none"></textarea>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-medium text-[18px]">
                    Name <span className="text-red-600">*</span>
                  </p>
                  <input className="w-full border mt-2 shadow-2xs border-[#EAEAEA] h-[50px] rounded-xl px-4 outline-none" />
                </div>

                <div>
                  <p className="font-medium text-[18px]">
                    Email <span className="text-red-600">*</span>
                  </p>
                  <input className="w-full shadow-2xs border border-[#EAEAEA] mt-2 h-[50px] rounded-xl px-4 outline-none" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-gray-500">
                <input type="checkbox" />
                <span className="text-[15px] text-[#464646]">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </div>

              <button
                type="submit"
                className="relative overflow-hidden text-[16px] text-white font-semibold rounded-md w-[176px] h-[60px] flex items-center justify-center mt-4 lg:mt-0 lg:col-span-2 gap-2 mx-auto
    bg-gradient-to-r from-[#007537] via-[#007537] to-[#AF2C2B] bg-[length:200%_100%] bg-left transition-all duration-500 hover:bg-right"
              >
                SUBMIT
                <span className="inline-block"><ArrowBigRight /></span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
