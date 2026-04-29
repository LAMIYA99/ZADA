
import Link from "next/link";

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

export default function ProjectSection() {
    return (
   <section className="relative w-full h-[85vh] min-h-[600px] lg:min-h-[800px] overflow-hidden flex flex-col justify-end bg-black">
      <img
        src="https://images.pexels.com/photos/37093500/pexels-photo-37093500.jpeg"
        alt="Contact Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60 mix-blend-overlay lg:object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full px-6 pb-12 md:px-12 md:pb-24 lg:pb-32 flex flex-col gap-4 md:gap-6 mt-auto">
        <div className="flex gap-3 md:gap-4 items-start max-w-[420px] pl-2">
          <img
            src="https://themewagon.github.io/Studiova/assets/images/svgs/primary-leaf.svg"
            alt="Leaf"
            className="w-10 h-10 shrink-0 mt-1 animate-[spin_1.5s_linear_infinite]"
          />
          <p className="text-gray-300 text-[18px] leading-relaxed">
      A <span className="text-[#C4F252] font-medium">showcase of creativity</span> , strategy, and results explore <br /> the projects that define us. </p>
        </div>

        <div className="flex items-end gap-2 md:gap-5">
          <h1 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[128px] font-bold text-white leading-[0.8] tracking-tight m-0">
     Projects
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