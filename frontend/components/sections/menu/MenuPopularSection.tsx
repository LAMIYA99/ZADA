import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import PopularSection from "../home/PopularSection";

export default function MenuPopularSection() {
    return (
    <section className="w-full font-barlow bg-[#f5f2ed] ">
        <BreadcrumbBanner 
          title="MENU RESTAURANT"
          img="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg"
          paths={[
            { name: "Home Page", href: "/" },
            { name: "Menu" }
          ]}
        />
        <div>
          <PopularSection />
        </div>
    </section>
 );
}