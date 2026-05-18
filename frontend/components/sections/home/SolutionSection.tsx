import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations("Solution");

  return (
    <section className="w-full bg-white dark:bg-[#1D1D24] text-[#1D1D24] dark:text-white pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 min-h-[600px]">
        
        <div className="relative w-full h-full min-h-[300px] lg:min-h-full">
          <div className="flex items-center gap-3 lg:gap-4 mb-4 relative z-10 w-max">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C1FE72] flex items-center justify-center text-[12px] lg:text-sm font-semibold text-[#1D1D24]">
              01
            </div>
            <div className="w-8 lg:w-12 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
            <div className="bg-[#1D1D24] dark:bg-white text-white dark:text-[#1D1D24] text-[12px] lg:text-[13px] px-3 py-1.5 lg:px-4 lg:py-1.5 rounded-[30px] font-medium">
              {t("tag")}
            </div>
          </div>
          
          <div className="absolute top-10 left-0 w-[120%] lg:w-[110%] h-[120%] lg:h-[110%] -z-0">
            <img 
              src="https://themewagon.github.io/Studiova/assets/images/backgrounds/stats-facts-bg.svg" 
              alt="Decorative Background"
              className="w-full h-full object-contain object-left-top max-w-full opacity-60 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
            />
          </div>
        </div>

        <div className="flex flex-col relative z-10 w-full pl-0 lg:pl-4 xl:pl-10 h-full justify-center">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-tight mb-5 max-w-[500px]" data-aos="fade-up">
            {t("title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-[16px] lg:text-[18px] mb-10 max-w-[500px] leading-relaxed">
            {t("description")}
          </p>
          
          <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800 mb-10 max-w-[600px]"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-[600px]">
            <div>
              <h3 className="text-[40px] lg:text-[48px] font-bold tracking-tight mb-2">{t("stat1Value")}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed">
                {t("stat1Text")}
              </p>
            </div>
            <div>
              <h3 className="text-[40px] lg:text-[48px] font-bold tracking-tight mb-2">{t("stat2Value")}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed">
                {t("stat2Text")}
              </p>
            </div>
            <div>
              <h3 className="text-[40px] lg:text-[48px] font-bold tracking-tight mb-2">{t("stat3Value")}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed">
                {t("stat3Text")}
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="w-[170px] h-14 rounded-full bg-[#C1FE72] flex items-center justify-between p-1.5 pl-6 group transition-colors duration-300 hover:bg-[#aee63a]"
          >
            <span className="font-semibold text-[#1D1D24] text-[15px]">{t("button")}</span>
            <div className="w-11 h-11 bg-white dark:bg-[#1D1D24] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
              <ArrowUpRightIcon className="w-5 h-5 text-[#1D1D24] dark:text-white group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
