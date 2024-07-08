import Banner from "@/components/Banner/Banner";
import Carving from "@/components/Carving/Carving";
import DontMissSection from "@/components/DontMissSection/DontMissSection";
import Explore from "@/components/Explore/Explore";
import MoreIdeaSection from "@/components/MoreIdeaSection/MoreIdeaSection";
import RecipeBar from "@/components/RecipeBar/RecipeBar";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>World Food | Home Page</title>
      </Helmet>
      <Banner />
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
