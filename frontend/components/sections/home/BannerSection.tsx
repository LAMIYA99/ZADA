import Link from "next/link";

const SnowflakeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C12.5523 2 13 2.44772 13 3V10.1L19.1483 6.54974C19.6264 6.27373 20.2381 6.43729 20.5141 6.91535L21.3802 8.41535C21.6562 8.89341 21.4926 9.50508 21.0146 9.78109L14.866 13.3313L21.0146 16.8816C21.4926 17.1576 21.6562 17.7693 21.3802 18.2473L20.5141 19.7473C20.2381 20.2254 19.6264 20.389 19.1483 20.1129L13 16.5627V23.6627C13 24.215 12.5523 24.6627 12 24.6627H10.2679C9.71566 24.6627 9.26795 24.215 9.26795 23.6627V16.5627L3.11961 20.1129C2.64155 20.389 2.02988 20.2254 1.75387 19.7473L0.887851 18.2473C0.61184 17.7693 0.775402 17.1576 1.25346 16.8816L7.40209 13.3313L1.25346 9.78109C0.775402 9.50508 0.61184 8.89341 0.887851 8.41535L1.75387 6.91535C2.02988 6.43729 2.64155 6.27373 3.11961 6.54974L9.26795 10.1V3C9.26795 2.44772 9.71566 2 10.2679 2H12Z" />
  </svg>
);

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

export default function BannerSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col justify-end bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://themewagon.github.io/Studiova/assets/images/backgrounds/banner-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-10 w-full px-6 pb-6 md:px-12 md:pb-10 flex flex-col gap-4 md:gap-6 mt-auto" data-aos="fade-up">
        <div className="flex gap-3 md:gap-4 items-start max-w-[527px] pl-2">
          <img
            src="https://themewagon.github.io/Studiova/assets/images/svgs/primary-leaf.svg"
            alt="Leaf"
            className="w-10 h-10 shrink-0 mt-1 animate-[spin_1.5s_linear_infinite]"
          />
          <p className="text-gray-300 text-[18px] leading-relaxed">
            We create{" "}
            <span className="text-[#C4F252] font-medium">high-performing</span>{" "}
            digital designs that elevate brands and enhance conversions.
          </p>
        </div>

        <div className="flex items-end gap-4 md:gap-8">
          <h1 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[128px] font-bold text-white leading-[0.8] tracking-tight m-0">
            Studiova
          </h1>
          <Link
            href="#"
            className="w-[100px] h-14 md:w-[86px] md:h-[60px] rounded-full bg-[#C4F252] flex items-center justify-end p-1.5 md:p-2 group shrink-0 mb-1 md:mb-3 transition-colors duration-300 hover:bg-[#aee63a]"
          >
            <div className="w-11 h-11 md:w-[52px] md:h-[52px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
              <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6 text-[#1D1D24] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
