import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Magazine",
    categories: ["Web development"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-2.jpg", 
  },
  {
    title: "Snapclear",
    categories: ["UX Strategy", "UI Design"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-1.jpg",
  },
  {
    title: "Amber Bottle",
    categories: ["Web development", "Digital design"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-2.jpg",
  },
  {
    title: "Pixelforge",
    categories: ["UI/UX design", "Web development"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-3.jpg",
  },
  {
    title: "BioTrack Ll",
    categories: ["Web development", "App design"],
    image: "https://themewagon.github.io/Studiova/assets/images/portfolio/portfolio-img-4.jpg",
  }
];





export default function ProjectsCardSection() {
    return (
        <section className="w-full bg-[#f4f5f6] text-[#1D1D24] py-24 lg:py-32 overflow-hidden">
      
      <div className="max-w-[1710px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full group">
              <div className="relative w-full aspect-[1.4/1] overflow-hidden mb-6 bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                     e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                  }}
                  draggable={false}
                />
                
                <div className="absolute top-0 left-0 w-full h-0 bg-black/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group-hover:h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C1FE72] flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
                    <ArrowUpRight className="w-6 h-6 text-[#1D1D24]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-[32px] md:text-[36px] lg:text-[42px] font-bold mb-4 text-[#1D1D24] tracking-tight leading-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat, i) => (
                    <span key={i} className="px-5 py-2 border border-gray-200 rounded-[30px] text-[14px] lg:text-[16px] font-medium text-gray-800 bg-transparent">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
        </section>
    );
}