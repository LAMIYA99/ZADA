import Link from 'next/link';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SolutionSection() {
  return (
    <section className="w-full bg-white text-[#1D1D24] pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 min-h-[600px]">
        
        {/* Left Side (Background pattern and indicator) */}
        <div className="relative w-full h-full min-h-[300px] lg:min-h-full">
          {/* Indicator */}
          <div className="flex items-center gap-3 lg:gap-4 mb-4 relative z-10 w-max">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C1FE72] flex items-center justify-center text-[12px] lg:text-sm font-semibold">
              01
            </div>
            <div className="w-8 lg:w-12 h-[1px] bg-gray-200"></div>
            <div className="bg-[#1D1D24] text-white text-[12px] lg:text-[13px] px-3 py-1.5 lg:px-4 lg:py-1.5 rounded-[30px]">
              Stats & facts
            </div>
          </div>
          
          {/* Background Graphic */}
          <div className="absolute top-10 left-0 w-[120%] lg:w-[110%] h-[120%] lg:h-[110%] -z-0">
            <img 
              src="https://themewagon.github.io/Studiova/assets/images/backgrounds/stats-facts-bg.svg" 
              alt="Decorative Background"
              className="w-full h-full object-contain object-left-top max-w-full opacity-60 mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col relative z-10 w-full pl-0 lg:pl-4 xl:pl-10 h-full justify-center">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-tight mb-5 max-w-[500px]">
            High quality web design solutions you can trust.
          </h2>
          <p className="text-gray-500 text-[16px] lg:text-[18px] mb-10 max-w-[500px] leading-relaxed">
            When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.
          </p>
          
          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200 mb-10 max-w-[600px]"></div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-[600px]">
            <div>
              <h3 className="text-[40px] lg:text-[48px] font-bold tracking-tight mb-2">40K+</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                People who have launched their websites
              </p>
            </div>
            <div>
              <h3 className="text-[40px] lg:text-[48px] font-bold tracking-tight mb-2">238+</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Experienced professionals ready to assist
              </p>
            </div>
            <div>
              <h3 className="text-[40px] lg:text-[48px] font-bold tracking-tight mb-2">3M+</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Support through messages and live consultations
              </p>
            </div>
          </div>

          {/* Pill Button */}
          <Link
            href="#"
            className="w-[170px] h-14 rounded-full bg-[#C1FE72] flex items-center justify-between p-1.5 pl-6 group transition-colors duration-300 hover:bg-[#aee63a]"
          >
            <span className="font-semibold text-[#1D1D24] text-[15px]">Who we are</span>
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
              <ArrowUpRightIcon className="w-5 h-5 text-[#1D1D24] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
