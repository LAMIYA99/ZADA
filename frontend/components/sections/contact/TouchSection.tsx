import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import { Clock, SmartphoneCharging, School } from "lucide-react";

export default function TouchSection() {
  return (
    <section className="bg-[#f3f1eb] font-barlow">
           <BreadcrumbBanner 
                title=""
                img="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg"
                paths={[
                  { name: "Home Page", href: "/" },
                  { name: "Contact Us" }
                ]}
              />
      <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
        {/* Title */}
        <h2 className="text-[70px] font-bold leading-[1.07] uppercase text-[#212121] mb-6">
          Get In Touch With Us
        </h2>

        {/* Subtitle */}
        <p className="max-w-[600px] mx-auto text-[#464646] leading-[1.7] text-[18px] mb-16">
          Get in touch to discuss your employee wellbeing needs today. Please
          give us a call, drop us an email or fill out the contact form and
          we’ll get back to you.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="group">
            <div className="relative inline-block mb-6">
              <div className="absolute -bottom-2 -right-2 w-18 h-18 bg-[#FFCC1A] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-3"></div>
              <School
                      strokeWidth={0.8} 
              className="relative z-10 w-20 h-20 text-[#212121]" />
            </div>

            <h4 className="font-bold uppercase text-[24px] mb-3">Address</h4>

            <p className="text-[#6d6d6d] text-[18px] leading-[1.3] mb-3">
              Box 565, Pinney's Beach, Charlestown,
              <br />
              Nevis, West Indies, Caribbean
            </p>

            <span className="text-[#AF2C2B] text-[12px] tracking-[0.2em] font-semibold cursor-pointer">
              CHECK LOCATION
            </span>
          </div>

          {/* Item 2 */}
          <div className="group">
            <div className="relative inline-block mb-6">
              <div className="absolute -bottom-2 -right-2 w-18 h-18 bg-[#FFCC1A] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-3"></div>
              <SmartphoneCharging
                strokeWidth={0.8}
                className="relative z-10 w-20 h-20 text-[#212121]"
              />
            </div>

            <h4 className="font-bold uppercase text-[24px] mb-3">
              Get In Touch
            </h4>

            <p className="text-[#6d6d6d] text-[18px] leading-[1.5]">
              Mobile:{" "}
              <span className="font-semibold text-[#464646]">
                084 3456 19 89
              </span>
              <br />
              Hotline:{" "}
              <span className="font-semibold text-[#1f1f1f]">
                (850) 435-4155
              </span>
              <br />
              E-mail: hello@fazfood.com
            </p>
          </div>

          {/* Item 3 */}
          <div className="group">
            <div className="relative inline-block mb-6">
              <div className="absolute -bottom-2 -right-2 w-18 h-18 bg-[#FFCC1A] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-3"></div>
              <Clock
                strokeWidth={0.8}
                className="relative z-10 w-20 h-20 text-[#212121]"
              />
            </div>

            <h4 className="font-bold uppercase text-[24px] mb-3">
              Hour Of Operation
            </h4>

            <p className="text-[#6d6d6d] text-[18px] leading-[1.3]">
              Monday-Friday: 8am-5pm
              <br />
              Saturday: 9am-Midday
            </p>

            <p className="text-green-600 font-semibold text-[16px] mt-2 tracking-wide">
              SUNDAY: CLOSE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
