import Banner from "@/components/Banner/Banner";
import Carving from "@/components/Carving/Carving";
import DontMissSection from "@/components/DontMissSection/DontMissSection";
import Explore from "@/components/Explore/Explore";
import MoreIdeaSection from "@/components/MoreIdeaSection/MoreIdeaSection";
import RecipeBar from "@/components/RecipeBar/RecipeBar";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";
import { Helmet } from "react-helmet-async";
import banner from "../../../../public/banner.webp";

const Home = () => {
  return (
    <div className="w-[85%] mx-auto">
      <Helmet>
        <title>World Food | Home Page</title>
      </Helmet>
      <Banner img={banner} />
      <Testimonials />
      <Carving />
      <Explore />
      <TrendingProduct />
      <DontMissSection />
      <MoreIdeaSection />
      <RecipeBar />
    </div>
  );
};

export default Home;
