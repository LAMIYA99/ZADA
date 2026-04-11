"use client";

const ArrowUpRight = ({ className }: { className?: string }) => (
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  {
    title: "Creative design",
    description: "Creative design requires a delicate balance of artistic intuition and strategic thinking.",
    strokePath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    )
  },
  {
    title: "Proven track record",
    description: "It serves as tangible evidence of their ability to deliver results and meet the needs.",
    strokePath: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10M5 4h14v5a2 2 0 0 1-2 2h-1.5M5 4v5a2 2 0 0 0 2 2h1.5M12 17a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5z" />
    )
  },
  {
    title: "Expertise & experience",
    description: "Our team consists of highly skilled professionals and deep expertise in graphic design.",
    strokePath: (
      <polygon strokeLinecap="round" strokeLinejoin="round" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    )
  }
];

export default function WhySection() {
  return (
    <section className="w-full bg-white text-[#1D1D24] py-24 lg:py-32">
      <div className="max-w-[1710px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row relative mb-16 lg:mb-20 gap-10 lg:gap-0">
          
          {/* Left Indicator */}
          <div className="flex items-center gap-3 lg:gap-4 relative z-10 w-max md:absolute left-0 top-0">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C1FE72] flex items-center justify-center text-[12px] lg:text-sm font-semibold">
              04
            </div>
            <div className="w-8 lg:w-16 h-[1px] bg-gray-300"></div>
            <div className="bg-[#1D1D24] text-white text-[12px] lg:text-[15px] px-3 py-1.5 lg:px-5 lg:py-1.5 rounded-[30px] font-medium">
              Features
            </div>
          </div>
          
          {/* Centered Title */}
          <div className="md:w-full flex justify-center">
            <div className="max-w-2xl text-left md:text-center md:pl-32 lg:pl-0 pt-2 md:pt-0">
              <h2 className="text-[40px] md:text-[48px] lg:text-[58px] font-bold leading-[1.05] tracking-tight mb-5 text-[#1D1D24]">
                Why choose us
              </h2>
              <p className="text-gray-500 text-[16px] lg:text-[16px] leading-relaxed mx-auto max-w-[600px]">
                When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group flex flex-col p-8 lg:p-12 rounded-[24px] bg-[#f4f5f8] hover:bg-[#1D1D24] transition-colors duration-500 ease-out cursor-pointer"
            >
              {/* Icon */}
              <div className="w-[72px] h-[72px] lg:w-[84px] lg:h-[84px] rounded-full border border-gray-300/60 group-hover:border-white/10 flex items-center justify-center relative mb-12 lg:mb-16 transition-colors duration-500">
                {/* Green Offset Blob */}
                <div className="absolute w-8 h-8 rounded-full bg-[#C1FE72] -z-0 translate-x-[4px] translate-y-[-4px]"></div>
                
                {/* Icon Path */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="relative z-10 text-[#1D1D24] group-hover:text-white transition-colors duration-500">
                  {feature.strokePath}
                </svg>
              </div>

              {/* Text Content */}
              <h3 className="text-[26px] lg:text-[32px] font-bold tracking-tight mb-4 text-[#1D1D24] group-hover:text-white transition-colors duration-500">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 group-hover:text-gray-400 text-[15px] lg:text-[16px] leading-relaxed mb-10 transition-colors duration-500">
                {feature.description}
              </p>
              
              {/* Arrow Button */}
              <div className="mt-auto w-12 h-12 rounded-full bg-white group-hover:bg-[#C1FE72] shadow-sm flex items-center justify-center transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-[#1D1D24] group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
