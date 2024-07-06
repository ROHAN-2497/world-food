import Banner from "@/components/Banner/Banner";
import Carving from "@/components/Carving/Carving";
import DontMissSection from "@/components/DontMissSection/DontMissSection";
import Explore from "@/components/Explore/Explore";
import MoreIdeaSection from "@/components/MoreIdeaSection/MoreIdeaSection";
import Recipe from "@/components/Recipe/Recipe";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";

const Home = () => {
  return (
    <div className="w-[85%] mx-auto">
      <Banner />
      <Testimonials />
      <Carving />
      <Explore />
      <TrendingProduct />
      <DontMissSection />
      <MoreIdeaSection />
      <Recipe />
    </div>
  );
};

export default Home;
