export default function TouchSection() {
    return (
        <section className="bg-white py-20 px-4 md:px-8 lg:px-10 relative mt-10">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    <div className="lg:col-span-4" data-aos="fade-right">
                        <div className="flex items-center gap-4 mb-20 lg:mb-40">
                            <span className="w-10 h-10 rounded-full bg-[#CFFF70] flex items-center justify-center font-medium text-sm text-[#1A202C]">10</span>
                            <div className="w-12 h-[1px] bg-gray-300"></div>
                            <span className="px-5 py-2 bg-[#21282C] text-white rounded-full text-sm font-medium">Contact us</span>
                        </div>
                        <p className="text-gray-500 text-lg pr-4 xl:pr-12 leading-relaxed">
                            Let's collaborate and create something amazing! Tell me about your project—I'm all ears.
                        </p>
                    </div>

                    <div className="lg:col-span-8 lg:col-start-5" data-aos="fade-up">
                        <h2 className="text-4xl md:text-[54px] font-semibold mb-16 text-[#1A202C]">Get in touch</h2>

                        <form className="flex flex-col gap-10 w-full max-w-[800px]">
                            <div className="border-b border-gray-400">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    className="w-full pb-4 bg-transparent outline-none text-[#1A202C] placeholder-gray-500" 
                                />
                            </div>
                            <div className="border-b border-gray-400">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full pb-4 bg-transparent outline-none text-[#1A202C] placeholder-gray-500" 
                                />
                            </div>
                            <div className="border-b border-gray-400 mb-8">
                                <textarea 
                                    placeholder="Tell us about your project" 
                                    rows={4}
                                    className="w-full pb-4 bg-transparent outline-none text-[#1A202C] placeholder-gray-500 resize-y" 
                                />
                            </div>

                            <button type="button" className="group relative w-full h-[68px] rounded-full bg-[#C1FF72] hover:bg-[#1F2A2E] flex items-center justify-center transition-colors duration-500">
                                <span className="font-bold text-[#1A202C] group-hover:text-white relative z-20 pointer-events-none transition-colors duration-500">Submit message</span>
                                
                                <div className="absolute right-2 group-hover:right-[calc(100%-64px)] w-14 h-14 bg-white  rounded-full flex items-center justify-center transition-all duration-500 ease-in-out z-10">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A202C] transition-colors duration-500">
                                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                                    </svg>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}