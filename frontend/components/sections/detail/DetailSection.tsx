"use client";

import { ArrowLeft, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { articles } from "@/constant/articles";

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

export default function DetailSection() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const id = idParam ? parseInt(idParam) : 0;

  const article = articles.find(a => a.id === id) || articles[0];

  return (
    <article className="w-full bg-white relative pb-24">
      {/* Hero Section */}
       <section className="relative w-full h-[85vh] min-h-[600px] lg:min-h-[800px] overflow-hidden flex flex-col justify-end bg-black">
      <img
        src={article.image}
        alt={article.title}
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
            In a <span className="text-[#C4F252] font-medium">world where standing</span> still means falling behind, we knew it was time for a bold transformation..
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-end gap-3 md:gap-5">
          <h1 className="text-[48px] sm:text-[60px] md:text-[72px] lg:text-[90px] font-bold text-white leading-[0.9] tracking-tight m-0">
            {article.title}
          </h1>
          <Link
            href="/blog"
            className="w-[100px] h-14 md:w-[86px] md:h-[60px] rounded-full bg-[#C4F252] flex items-center justify-end p-1.5 md:p-2 group shrink-0 mb-1 md:mb-2 transition-colors duration-300 hover:bg-[#aee63a]"
          >
            <div className="w-11 h-11 md:w-[52px] md:h-[52px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
              <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6 text-[#1D1D24] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </section>

      <div className="container mx-auto px-6 lg:px-12 pt-20 mt-10 md:pt-32">
         <div className="max-w-[800px] mx-auto">
             <div className="mb-16">
                 <p className="text-2xl md:text-[28px] text-[#1A202C] font-semibold leading-[1.6] mb-10 tracking-tight">
                     In today's fast-paced digital world, creating a brand that truly resonates with audiences requires more than just aesthetics. It demands a deep understanding of human connection, storytelling, and an unwavering commitment to authenticity.
                 </p>
                 
                 <p className="text-gray-500 text-[18px] leading-loose mb-8">
                     We started this project by asking a simple question: what makes people care? Often, brands focus too heavily on what they do, rather than why they do it. For this campaign, we decided to strip away the noise and focus on the fundamental human truth at the core of the product. The result was a minimalist, emotionally driven experience that spoke directly to the hearts of consumers.
                 </p>
                 
                 <h2 className="text-[36px] font-bold text-[#1A202C] mt-20 mb-8 tracking-tight">The strategy behind the success</h2>
                 
                 <p className="text-gray-500 text-[18px] leading-loose mb-8">
                     Visual identity is only the tip of the iceberg. True branding is a multidisciplinary effort that includes market positioning, tone of voice, and interactive design. By bringing all these elements into harmony, we ensured that every touchpoint—from the landing page to the social media assets—delivered a consistent, powerful message.
                 </p>

                 <div className="my-20 md:my-24 pl-8 md:pl-12 border-l-[6px] border-[#CFFF70]">
                     <p className="text-[32px] md:text-[40px] font-bold text-[#1A202C] italic leading-[1.3] tracking-tight">
                         "Design is not just what it looks like and feels like. Design is how it works, and how it connects people to their deepest desires."
                     </p>
                 </div>

                 <p className="text-gray-500 text-[18px] leading-loose mb-8">
                     By the launch date, the metrics spoke for themselves. Engagement rates soared by 120%, and the brand saw a significant uplift in organic sharing. It was clear proof that when you invest completely in storytelling, the audience will reward you with their attention.
                 </p>
             </div>

             <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                 <div className="flex gap-3 flex-wrap">
                     {['Branding', 'Design', 'Strategy', 'UX'].map(tag => (
                         <span key={tag} className="px-5 py-2.5 bg-[#F4F8FA] text-[#1A202C] text-sm font-bold rounded-full hover:bg-[#E2E8F0] cursor-pointer transition-colors">
                             {tag}
                         </span>
                     ))}
                 </div>
                 <div className="flex items-center gap-4">
                     <span className="text-[#1A202C] font-bold text-sm uppercase tracking-widest">Share:</span>
                     <div className="flex gap-2">
                         <button className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center text-[#1A202C] hover:bg-[#CFFF70] hover:border-[#CFFF70] transition-colors group">
                             <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                         </button>
                         <button className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center text-[#1A202C] hover:bg-[#CFFF70] hover:border-[#CFFF70] transition-colors group">
                             <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                         </button>
                         <button className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center text-[#1A202C] hover:bg-[#CFFF70] hover:border-[#CFFF70] transition-colors group">
                             <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                         </button>
                         <button className="w-[46px] h-[46px] rounded-full border border-gray-200 flex items-center justify-center text-[#1A202C] hover:bg-[#CFFF70] hover:border-[#CFFF70] transition-colors group">
                             <Copy size={18} className="group-hover:scale-110 transition-transform" />
                         </button>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </article>
  );
}
