"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@/providers/TanstackQueryProvider";
import api from "@/services/api";
import { Blog } from "@/types/global";



export default function BlogSection() {


  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => api.getData("/api/blogs"),
  });



  return (
    <section className="w-full pb-24 font-barlow overflow-hidden">
      <div className="container mx-auto px-[3.5px]">
       

        {isLoading ? (
          <div className="flex -ml-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-8 animate-pulse">
                <div className="aspect-[4/3] rounded-[30px] bg-gray-200 mb-8" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-[#646464] font-barlow font-bold uppercase tracking-widest py-20">No blog posts yet.</p>
        ) : (
          <div className="relative">
            <div className="overflow-hidden" >
              <div className="flex flex-col gap-18">
                {blogs.map((post: Blog) => (
                  <div key={post._id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-8 group cursor-pointer">
                    <div className="flex flex-col">
                      <div className="relative w-[930px] h-[520px] rounded-[30px] overflow-hidden mb-6">
                        <Image
                          src={post.image || "/placeholder.png"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <div className="flex items-center gap-1 text-[13px] font-semibold tracking-[0.1em] font-barlow leading-[1.7142857143] uppercase mb-1">
                        <span className="text-[#C33031]">{post.category}</span>
                        <span className="text-[#B7B7B7]">• {post.date}</span>
                        {post.commentsCount !== undefined && (
                          <span className="text-[#B7B7B7]">• COMMENTS ({post.commentsCount})</span>
                        )}
                      </div>

                      <h3 className="text-[24px] md:text-[40px] font-bold text-[#212121] leading-[1.2] uppercase mb-3 group-hover:text-[#] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-[#646464] text-[18px] text-[#464646] mb-6">
                        {post.excerpt}
                      </p>

                      <button className="flex items-center gap-2 text-[#212121] font-bold text-[14px] uppercase tracking-widest hover:text-[#C33031] transition-colors group/btn">
                        READ MORE
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
