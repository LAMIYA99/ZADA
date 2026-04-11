import { Search } from "lucide-react";
import BlogPageSideBar from "./BlogPageSidebar";
import BlogSection from "./BlogPageSection";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";

export default function BlogPageView() {
  return (
    <>
      <section>
        <BreadcrumbBanner
          img="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog-bc.jpg" title="Blog"
          paths={[{ name: "Home Page", href: "/" }, { name: "Blog" }]}
        />
        <div className="container mx-auto px-4 font-barlow lg:px-8 max-w-350 mt-24">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-9">
              <BlogSection />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <BlogPageSideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
