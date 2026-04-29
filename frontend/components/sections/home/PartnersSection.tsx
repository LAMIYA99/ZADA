import { Command, Box, Hexagon, CircleDashed, Triangle, Layers } from "lucide-react";

const Logoipsum = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="font-bold text-[22px] text-[#21282C] tracking-tight">Logoipsum</span>
  </div>
);

export default function PartnersSection() {
    const logos = [
        <div key="189" className="flex items-center gap-1.5">
            <span className="bg-[#FFCC1A] text-black px-2 py-1 rounded-[4px] text-[22px] font-black italic leading-none shadow-sm">189</span> 
            <span className="text-[24px] font-black italic text-[#1A202C] tracking-tight">TAXI</span>
        </div>,
        <Logoipsum key="c" icon={<Command className="text-[#21282C]" size={32} strokeWidth={2.5} />} />,
        <div key="apar" className="text-[26px] font-black text-[#D32F2F] flex items-center tracking-[0.1em] uppercase">
            APAR
        </div>,
        <Logoipsum key="b" icon={<Box className="text-[#21282C]" size={32} strokeWidth={2.5} />} />,
        <Logoipsum key="h" icon={<Hexagon className="text-[#21282C]" size={32} strokeWidth={2.5} />} />,
        <Logoipsum key="cd" icon={<CircleDashed className="text-[#21282C]" size={32} strokeWidth={2.5} />} />,
        <Logoipsum key="t" icon={<Triangle className="text-[#21282C]" size={32} strokeWidth={2.5} />} />,
        <Logoipsum key="l" icon={<Layers className="text-[#21282C]" size={32} strokeWidth={2.5} />} />,
    ];

    // Combine them 3 times so the marquee has plenty of width to loop seamlessly
    const allLogos = [...logos, ...logos, ...logos];

    return (
        <section className="bg-[#F4F8FA] py-16 overflow-hidden">
            <style>{`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-slide {
                    animation: slide 25s linear infinite;
                }
            `}</style>
            
            <div className="container mx-auto px-4 text-center mb-12" data-aos="fade-up">
                <p className="text-[#21282C] text-[15px] font-medium tracking-wide">More than 320 trusted partners & clients</p>
            </div>
            
            <div className="w-full relative flex items-center group">
                {/* Left/Right fading gradients to make it look smooth */}
                <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#F4F8FA] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#F4F8FA] to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex w-max animate-slide hover:[animation-play-state:paused] gap-16 md:gap-24 px-8 items-center cursor-pointer">
                    {allLogos.map((logo, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}