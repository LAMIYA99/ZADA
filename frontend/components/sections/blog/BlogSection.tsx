import Link from "next/link";
import { articles } from "@/constant/articles";

export default function BlogPageView() {
  return (
    <>
      <section className="bg-white py-20 px-4 md:px-8 lg:px-10 mt-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-4xl md:text-[54px] font-bold mb-16 text-[#1A202C] text-center">Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link href={`/detail?id=${article.id}`} key={article.id} className="group cursor-pointer block">
                <div className="relative overflow-hidden mb-4 bg-gray-100 h-[520px] w-full shrink-0 rounded-sm">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-[22px] font-bold text-[#1A202C] leading-snug group-hover:text-[#8bc22b] transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
