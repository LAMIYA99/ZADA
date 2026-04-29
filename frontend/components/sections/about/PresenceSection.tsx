export default function PresenceSection() {
  const stats = [
    {
      number: "45+",
      title: "Presence in global markets",
      description: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
      number: "15M",
      title: "In strategic investments",
      description: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
    },
    {
      number: "158+",
      title: "Trusted brand collaborations",
      description: "Shaping industry conversations through innovation, creativity, and lasting influence."
    }
  ];

  return (
    <section className="w-full bg-white text-[#1D1D24] py-24 lg:py-40">
      <div className="max-w-[1710px] mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-32 lg:mb-48">
          <div>
            <h2 className="text-[50px] md:text-[60px] lg:text-[84px] font-bold tracking-tight leading-[1.1]">
              Studiova.
            </h2>
          </div>
          <div className="flex flex-col gap-8 lg:pt-4">
            <p className="text-[17px] md:text-[18px] lg:text-[20px] text-gray-600 leading-[1.6] font-medium">
              It's a canvas for your creativity. It's your opportunity to transform bold ideas into dynamic, interactive experiences. Your work can shape identities, tell compelling stories, or spark meaningful change. As the digital landscape grows, so do the possibilities. And whether you thrive working remotely or in a buzzing agency space, the thrill of seeing your vision come to life is unmatched.
            </p>
            <p className="text-[17px] md:text-[18px] lg:text-[20px] text-gray-600 leading-[1.6] font-medium">
              At Studiova, we bring ideas to life through a range of services: branding, web development, agency solutions, content creation, SaaS, and motion & 3D modeling. As a web designer, you merge artistry and technology to craft "digital experiences" that inform, captivate, and inspire. Every day brings something new — one moment you're sketching innovative concepts, the next you're turning them into seamless, responsive designs. Web design keeps you pushing boundaries and creating at every turn!
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[54px] md:text-[64px] lg:text-[80px] font-bold tracking-tighter mb-4 leading-none">
                {stat.number}
              </span>
              <div className="w-full h-[1px] bg-gray-200 mb-8 lg:mb-10"></div>
              <h3 className="text-[22px] md:text-[24px] lg:text-[28px] font-bold mb-5 tracking-tight">
                {stat.title}
              </h3>
              <p className="text-gray-500 text-[16px] lg:text-[18px] leading-relaxed max-w-[400px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}