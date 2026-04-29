import Link from "next/link";
import { articles } from "@/constant/articles";

export default function RecentSection() {
    const recentArticles = articles.slice(0, 3);

    return (
        <section className="bg-[#F4F8FA] py-20 px-4 md:px-8 lg:px-10 relative">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
                    <div className="lg:col-span-4 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-[#CFFF70] flex items-center justify-center font-medium text-sm text-[#1A202C]">09</span>
                        <div className="w-12 h-[1px] bg-gray-300"></div>
                        <span className="px-5 py-2 bg-[#21282C] text-white rounded-full text-sm font-medium">Resources</span>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-5" data-aos="fade-up">
                        <h2 className="text-4xl md:text-[40px] font-semibold mb-4 text-[#1A202C]">Recent news</h2>
                        <p className="text-gray-500 text-lg">
                            Explore the latest trends, bold projects, and creative insights from our agency—shaping the future of branding, digital experiences, and storytelling.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentArticles.map((article, index) => (
                        <Link href={`/detail?id=${article.id}`} key={article.id} className="group cursor-pointer block" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="relative overflow-hidden mb-4 bg-gray-100 h-[520px] w-full shrink-0">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                                <h3 className="text-[22px] font-bold text-[#1A202C] leading-snug group-hover:text-[#8bc22b] transition-colors">{article.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}