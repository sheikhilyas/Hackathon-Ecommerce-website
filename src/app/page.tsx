import About from "@/components/About";
import FoodCategory from "@/components/FoodCategory";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Headerhero from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function page() {
  return (
    <div>
      <Headerhero />
      <About />
      <FoodCategory/>
      <WhyChooseUs/>
      <Footer />
      <Menu/>

    </div>
  );
}