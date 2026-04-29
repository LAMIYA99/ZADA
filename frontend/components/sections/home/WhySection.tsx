export default function WhySection() {
  return (
    <section className="bg-[#F4F8FA] py-20 px-4 md:px-8 lg:px-8 relative">
      <div className="mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <div className="lg:col-span-3 flex flex-col pt-8 pr-4" data-aos="fade-right">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-[#CFFF70] flex items-center justify-center font-medium text-sm text-[#1A202C]">04</span>
              <div className="w-8 h-[1px] bg-gray-300"></div>
              <span className="px-5 py-2 bg-[#21282C] text-white rounded-full text-sm font-medium">About us</span>
            </div>
            <h2 className="text-4xl md:text-[44px] font-bold mb-6 text-[#1A202C] leading-tight">Why choose us</h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              We blend creativity with strategy to craft unique digital experiences that make an impact. With a focus on innovation, attention to details.
            </p>
          </div>

          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-[#CFFF70] p-8 lg:p-10 h-full min-h-[440px] flex flex-col justify-between relative overflow-hidden ">
               <div className="absolute right-0 bottom-0 w-[150%] h-[150%] translate-x-[30%] translate-y-[30%] bg-white/20 rounded-tl-full opacity-60 pointer-events-none"></div>

               <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4].map(i => (
                          <svg key={i} className="w-5 h-5 text-[#1A202C]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                      <svg className="w-5 h-5 text-[#1A202C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  <p className="text-[18px] text-[#1A202C] leading-snug font-medium mb-10 max-w-[280px]">
                      The team exceeded our expectations with a stunning brand identity.
                  </p>
               </div>
               
               <div className="relative z-10 mt-auto">
                  <h3 className="text-[54px] font-bold text-[#1A202C] leading-none mb-1">98.6%</h3>
                  <p className="text-sm text-gray-700 mb-6 font-medium">Customer satisfaction</p>
                  <div className="w-full h-[1px] bg-[#1A202C] opacity-10 mb-6"></div>
                  <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Wade Warren" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                          <h4 className="font-bold text-[#1A202C] text-[15px]">Wade Warren</h4>
                          <p className="text-[13px] text-gray-700 font-medium">Bank of America</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-10 h-full" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full relative bg-[#E1E5DF] h-1/2 min-h-[200px] overflow-hidden border border-gray-100/50">
                <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop" alt="Phone in sand" className="object-cover w-full h-full" />
            </div>
            <div className="bg-[#21282C] p-6 lg:p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-4xl lg:text-[40px] font-bold text-white mb-2">500+</h3>
                <p className="text-sm text-gray-400 mb-8 leading-snug">Successful projects completed</p>
                <div className="flex -space-x-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-[#21282C] object-cover" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-[#21282C] object-cover" />
                    <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-[#21282C] object-cover" />
                    <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-[#21282C] object-cover" />
                </div>
            </div>
          </div>

          <div className="lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
            <div className="border border-gray-200 bg-white p-8 lg:p-10 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none stroke-gray-200">
                  <svg fill="none" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full vector-effect-non-scaling-stroke">
                      <path d="M -20,50 Q 50,110 120,50" strokeWidth="0.5" />
                      <path d="M -20,50 Q 50,-10 120,50" strokeWidth="0.5" />
                  </svg>
              </div>
              
              <div className="relative z-10 pt-2">
                  <h3 className="text-4xl lg:text-[42px] font-bold text-[#1A202C] mb-2 leading-none">238+</h3>
                  <p className="text-sm text-gray-500 font-medium">Brands served worldwide</p>
              </div>
              
              <div className="relative z-10 pb-2">
                  <h4 className="text-[32px] font-bold text-[#1A202C] mb-4">Studiova.</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed max-w-[260px]">
                      Our global reach allows us to create unique, culturally relevant designs for businesses across different industries.
                  </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
