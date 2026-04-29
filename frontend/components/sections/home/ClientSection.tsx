export default function ClientSection() {
    return (
        <section className="bg-[#F4F8FA] py-20 px-4 md:px-8 lg:px-10 relative">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
                    <div className="lg:col-span-4 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-[#CFFF70] flex items-center justify-center font-medium text-sm text-[#1A202C]">05</span>
                        <div className="w-12 h-[1px] bg-gray-300"></div>
                        <span className="px-5 py-2 bg-[#21282C] text-white rounded-full text-sm font-medium">Testimonial</span>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-5" data-aos="fade-up">
                        <h2 className="text-4xl md:text-[40px] font-semibold mb-4 text-[#1A202C]">Stories from clients</h2>
                        <p className="text-gray-500 text-lg">
                            Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    <div className="bg-[#CFFF70] col-span-3 p-10 flex flex-col justify-between h-[408px]" data-aos="fade-up" data-aos-delay="100">
                        <div>
                            <p className="text-sm text-gray-700 mb-6">Hear from them</p>
                            <h3 className="text-2xl font-semibold text-[#1A202C] leading-snug">
                                Our website redesign was flawless. They understood our vision perfectly!
                            </h3>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/10">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Albert Flores" className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1A202C]">Albert Flores</h4>
                                <p className="text-sm text-gray-700">MasterCard</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#21282C] col-span-6 p-10 flex flex-col justify-between h-[408px] relative" data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <p className="text-sm text-gray-400 mb-6">Hear from them</p>
                            <h3 className="text-2xl font-semibold text-white leading-snug mb-4">
                                From concept to execution, they delivered outstanding results. Highly recommend their expertise!
                            </h3>
                            <div className="flex items-center gap-2 text-white">
                                <div className="flex text-white gap-1">
                                    {[1, 2, 3, 4].map(idx => (
                                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    ))}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">4.0</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-8 relative z-10">
                            <div className="w-12 h-12 rounded-full overflow-hidden relative bg-white/10">
                                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Robert Fox" className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Robert Fox</h4>
                                <p className="text-sm text-gray-400">Mitsubishi</p>
                            </div>
                        </div>
                        <div className="absolute bottom-10 right-10 opacity-[0.15]">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white p-10 col-span-3 flex flex-col justify-between h-[408px]" data-aos="fade-up" data-aos-delay="300">
                        <div>
                            <p className="text-sm text-gray-500 mb-6">Hear from them</p>
                            <h3 className="text-2xl font-semibold text-[#1A202C] leading-snug">
                                Super smooth process with incredible results. highly recommend!
                            </h3>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-12 h-12 rounded-full overflow-hidden relative bg-black/10">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jenny Wilson" className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1A202C]">Jenny Wilson</h4>
                                <p className="text-sm text-gray-500">Pizza Hut</p>
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        </section>
    );
}