export default function MeetSection() {
    const team = [
        {
            name: "Martha Finley",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Floyd Miles",
            role: "Marketing Strategist",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Glenna Snyder",
            role: "Lead Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Albert Flores",
            role: "UX/UI Developer",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-white py-20 px-4 md:px-8 lg:px-10 relative">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
                    <div className="lg:col-span-4 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-[#CFFF70] flex items-center justify-center font-medium text-sm text-[#1A202C]">06</span>
                        <div className="w-12 h-[1px] bg-gray-300"></div>
                        <span className="px-5 py-2 bg-[#21282C] text-white rounded-full text-sm font-medium">The team</span>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-5" data-aos="fade-up">
                        <h2 className="text-4xl md:text-[40px] font-semibold mb-4 text-[#1A202C]">Meet our team</h2>
                        <p className="text-gray-500 text-lg">
                            Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="group cursor-pointer mx-auto w-full max-w-[388px]" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="relative overflow-hidden mb-5 bg-gray-100 w-full h-[465px]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none z-0"></div>

                                <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                    <div className="flex items-center gap-2 pointer-events-auto">
                                        <a href="#" className="w-10 h-10 rounded-full bg-[#C1FE72] flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm text-[#1A202C]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-[#C1FE72] flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm text-[#1A202C]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.8,8H4.6v8h5.6c2,0,3.3-1.1,3.3-2.6c0-1.2-0.8-2-1.9-2.2c0.8-0.3,1.5-1.1,1.5-2C13.1,8.1,11.8,8,9.8,8z M7.4,10h2c0.7,0,1.1,0.2,1.1,0.8c0,0.5-0.4,0.8-1.1,0.8h-2V10z M7.4,14v-1.8h2.2c0.8,0,1.3,0.3,1.3,0.9c0,0.6-0.5,0.9-1.3,0.9L7.4,14L7.4,14z M17.2,11.2c-2.3,0-2.8,1.8-2.8,2.8c0,1.9,0.7,3.1,2.8,3.1c1.5,0,2.4-0.6,2.7-1.4h-2.1c-0.2,0.3-0.5,0.5-0.9,0.5c-0.7,0-0.9-0.5-0.9-1.2h3.9v-0.5C19.9,12.7,19.2,11.2,17.2,11.2z M17.2,12.6c0.6,0,0.8,0.4,0.8,1.1h-1.6C16.4,13,16.5,12.6,17.2,12.6z M15.4,9h3.6v1h-3.6V9z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-[#C1FE72] flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm text-[#1A202C]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[22px] font-bold text-[#1A202C] mb-1">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}