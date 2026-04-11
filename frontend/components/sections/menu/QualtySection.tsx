import { Clock, School, SmartphoneCharging } from "lucide-react";

export default function QualitySection() {
    return(
<section className="bg-[#f3f1eb] font-barlow max-w-[1200px] mx-auto px-4 py-20 text-center">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="group">
            <div className="relative inline-block mb-6">
              <div className="absolute -bottom-2 -right-2 w-18 h-18 bg-[#FFCC1A] rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-3"></div>
              <School
                      strokeWidth={0.8} 
              className="relative z-10 w-20 h-20 text-[#212121]" />
            </div>

            <h4 className="font-bold uppercase text-[24px] mb-3">QUALITY FOODS</h4>

            <p className="text-[#6d6d6d] text-[18px] leading-[1.3] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

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
            ORIGINAL RECIPES
            </h4>

            <p className="text-[#6d6d6d] text-[18px] leading-[1.5]">
        
        
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            FAST DELIVERY
            </h4>

           
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
</section>
    );
}