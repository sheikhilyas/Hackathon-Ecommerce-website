import FoodCategory from "@/components/FoodCategory";
import Footer from "@/components/Footer";
import Headerhero from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function page() {
  return (
    <div>
      <Headerhero />
      <FoodCategory/>
      <WhyChooseUs/>
      <Footer />
    </div>
  );
}