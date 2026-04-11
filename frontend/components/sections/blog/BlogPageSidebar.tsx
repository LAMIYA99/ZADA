import { Search } from "lucide-react";

export default function BlogPageSideBar() {
  return (
    <div className="col-span-12 font-barlow lg:col-span-3">
      <div className="w-full">
        <div className="mb-12">
          <h3 className="text-[30px] font-bold text-[#212121] uppercase mb-6">
            Search Here
          </h3>

          <div className="border border-[#B7B7B7] rounded-[9px] py-[13px] px-[20px] flex items-center justify-between">
            <input
              type="text"
              placeholder="Search ..."
              className="outline-none w-full text-gray-500 bg-transparent"
            />
            <span className="text-xl cursor-pointer">
              {" "}
              <Search className="text-[#282727]" stroke="#282727" />{" "}
            </span>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-[30px] font-bold uppercase mb-6">Recent Posts</h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <img
                src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_12-460x460.jpg"
                className="w-20 h-20 rounded-[24px] object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold text-[#B7B7B7] mb-1 uppercase">October 19, 2023</p>
                <h4 className="font-bold leading-tight uppercase text-[20px] transition-colors duration-300 ease-in-out hover:text-[#AF2C2B] text-[#212121]">
                  Bite-Sized Bliss: The <br /> World Of Fast Food
                </h4>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_11-460x460.jpg"
                className="w-20 h-20 rounded-[24px] object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold uppercase text-[#B7B7B7] mb-1">October 19, 2023</p>
                <h4 className="font-bold text-[20px] leading-tight hover:text-[#AF2C2B] transition-colors duration-300 ease-in-out uppercase text-[#212121]">
                  Quick Cravings: <br /> Unraveling Fast Food...
                </h4>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_10-460x460.jpg"
                className="w-20 h-20 rounded-[24px] object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold text-[#B7B7B7] uppercase mb-1">October 19, 2023</p>
                <h4 className="font-bold text-[20px] uppercase hover:text-[#AF2C2B] transition-colors duration-300 ease-in-out text-[#212121] leading-tight">
                  Fast Food Frenzy: A <br /> Taste Of Convenience
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mb-12">
          <h3 className="text-3xl text-[#212121] font-extrabold  uppercase mb-6">Categories</h3>

          <ul className="space-y-2 text-[18px] text-[#212121]">
            {["Business", "Creativity", "Life Lessons", "Startup"].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-4 h-4 bg-gray-300 inline-block"></span>
                  <span className="font-semibold uppercase">{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* TAGS */}
        <div>
          <h3 className="text-3xl font-bold text-[#212121] uppercase mb-6">
            Popular Tags
          </h3>

          <div className="flex flex-wrap  gap-3">
            {["Beer", "Burgers", "Delicious","Fast Food","Meat","Pizza","good meal","food mood"].map((tag, i) => (
              <span
                key={i}
                className="py-[10px] px-[16px] bg-white rounded-[9px] font-semibold uppercase text-[16px] border-none hover:bg-[#AF2C2B] hover:text-white transition-colors duration-300 ease-in-out text-[#212121] cursor-pointer border border-[#B7B7B7]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
