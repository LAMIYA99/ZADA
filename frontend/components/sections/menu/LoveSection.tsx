"use client";
const MENU_ITEMS = [
  { id: 1, name: "TRIPLE CHEESEBURGER", price: "$39.00", description: "Elementum tempus egestas" },
  { id: 2, name: "THE DESSERT FOR TWO", price: "$49.00", description: "Elementum tempus egestas" },
  { id: 3, name: "SEAFOOD EXTRA MEAL", price: "$59.00", description: "Elementum tempus egestas" },
  { id: 4, name: "PIZZA QUATTRO STAGIONI", price: "$29.00", description: "Elementum tempus egestas" },
  { id: 5, name: "2X BREAKFAST COMBO", price: "$79.00", description: "Elementum tempus egestas" },
];

export default function LoveSection() {
  return (
    <section className="bg-[#F4F1EA] py- md:py-32 relative overflow-visible font-barlow w-full">
      
      {/* Top right decorative placeholder (for tomatoes/pasta style accents) */}
      <div className="absolute top-[-50px] right-0 z-0 pointer-events-none hidden lg:block opacity-100">
        {/* Placeholder svgs to match the vibe if image references fail */}
        <img 
          src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_icon-1.png" 
          alt="decoration" 
          className="absolute top-10 right-20 w-16" 
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <img 
          src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_icon-2.png" 
          alt="decoration" 
          className="absolute top-32 right-0 w-32" 
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col relative w-full">
          <div className="mb-10 z-20">
            <span className="text-[#C33130] font-bold text-[14px] tracking-[2px] uppercase mb-4 block">EXPLORE THE NEW TASTE</span>
            <h2 className="text-[70px] font-bold text-[#212121] leading-[1.05] uppercase">
              WE LOVE TO<br/>SURPRISE YOU
            </h2>
          </div>
          
          {/* Image touches left bounds visually on large screens */}
          <div className="w-full lg:w-[calc(100%+calc((100vw-1024px)/2))] lg:-ml-[calc((100vw-1024px)/2)] xl:w-[calc(100%+calc((100vw-1280px)/2))] xl:-ml-[calc((100vw-1280px)/2)] 2xl:w-[calc(100%+calc((100vw-1536px)/2))] 2xl:-ml-[calc((100vw-1536px)/2)] relative h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
            <img 
              src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/menu_img1.jpg" 
              alt="People eating pizza" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col relative ">
          
          {/* Circular Badge from TodaySection */}
          <div className="relative w-85 h-85 group cursor-pointer ">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 200,200 m -105,0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0"
            />
          </defs>
          <circle cx="200" cy="200" r="125" fill="none" stroke="#B91C1C" strokeWidth="3" />
          <g className="origin-center animate-[spin_15s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all duration-300">
            <text fill="black" fontSize="20" fontWeight="bold" letterSpacing="4">
              <textPath href="#textCircle">DOWNLOAD MENU - FAZFOOD - SPECIAL MENU -</textPath>
            </text>
          </g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <circle cx="55" cy="55" r="55" fill="url(#paint0_linear_todays)" />
            <path
              d="M66.2741 36H55.308L62.7689 43.8439C64.368 42.8589 66.4934 43.0527 67.8811 44.4293L74.0221 50.5208C74.3132 50.8096 74.5246 51.1221 74.6322 51.395C74.7399 51.6679 74.7399 51.9013 74.6123 52.0279C74.3571 52.281 73.6752 52.02 73.093 51.4425L67.3428 45.7346C66.7606 45.1571 66.0787 44.8921 65.8235 45.1492C65.6959 45.2758 65.6959 45.5091 65.8035 45.7821C65.9112 46.055 66.1225 46.3675 66.4136 46.6562L72.1678 52.3601C72.4589 52.6489 72.6703 52.9614 72.778 53.2343C72.8856 53.5073 72.8856 53.7406 72.758 53.8672C72.5028 54.1204 71.8209 53.8593 71.2387 53.2818L65.4845 47.5779C64.9023 47.0004 64.2204 46.7354 63.9652 46.9925C63.8376 47.119 63.8376 47.3524 63.9453 47.6254C64.0529 47.8983 64.2643 48.2108 64.5554 48.4995L70.3096 54.2034C70.6007 54.4922 70.812 54.8047 70.9197 55.0776C71.0274 55.3505 71.0274 55.5839 70.8998 55.7105C70.6446 55.9636 69.9627 55.7026 69.3805 55.1251L63.6302 49.4212C63.048 48.8437 62.3661 48.5786 62.1109 48.8358C61.9833 48.9623 61.9833 49.1957 62.091 49.4686C62.1987 49.7416 62.41 50.0541 62.7011 50.3428L68.4553 56.0467C68.7464 56.3355 68.9578 56.648 69.0654 56.9209C69.1731 57.1938 69.1731 57.4272 69.0455 57.5538C68.7903 57.8069 68.1084 57.5459 67.5262 56.9684L61.3852 50.8768C59.9975 49.5003 59.7981 47.3959 60.787 45.8098L56.5322 41.8344C52.5285 38.0885 47.2329 36 41.7299 36C36.3545 36 32 40.3195 32 45.6515V59.0411C32 64.3731 36.3545 68.6926 41.7299 68.6926H55.4316L53.2503 60.56C50.8099 60.5204 48.3016 58.2974 47.2768 55.038C46.0765 51.2249 47.3565 47.4355 50.1359 46.5732C52.9154 45.7148 56.1414 48.1079 57.3417 51.9211C58.3665 55.1804 57.5809 58.424 55.5951 59.8322L61.1659 77.5214C61.3493 78.1384 62.2186 78.1622 62.4379 77.557L66.2701 68.6886C71.6455 68.6886 76 64.3692 76 59.0371V45.6515C76 40.3195 71.6455 36 66.2741 36Z"
              fill="white"
            />
            <defs>
              <linearGradient id="paint0_linear_todays" x1="116" y1="49" x2="0" y2="49" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C33130" />
                <stop offset="1" stopColor="#FF8A00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

          <ul className="space-y-10 w-full z-10 relative pt-40 lg:pt-0">
            {MENU_ITEMS.map((item) => (
              <li key={item.id} className="flex flex-col w-full group cursor-pointer">
                <div className="flex justify-between items-baseline w-full relative">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#212121] uppercase pr-4 bg-[#F4F1EA] z-10 transition-colors group-hover:text-[#C33130]">
                    {item.name}
                  </h3>
                  <div className="flex-grow border-b-[2px] border-dotted border-[#dcdcdc] z-0 -translate-y-[8px] mx-1 hidden sm:block"></div>
                  <span className="text-[18px] md:text-[20px] font-bold text-[#C33130] pl-4 bg-[#F4F1EA] z-10">
                    {item.price}
                  </span>
                </div>
                <p className="text-[#646464] text-[15px] mt-1">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
