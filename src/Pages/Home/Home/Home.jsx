import Banner from "@/components/Banner/Banner";
import Carving from "@/components/Carving/Carving";
import Explore from "@/components/Explore/Explore";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Carving />
      <Explore />
      <TrendingProduct />
    </div>
  );
};

export default Home;
