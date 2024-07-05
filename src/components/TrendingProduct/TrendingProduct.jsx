import TrendingProductCard from "./TrendingProductCard";

const TrendingProduct = () => {
  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl">TRENDING NOW</h3>
        <p className="font-semibold text-blue-700">View All</p>
      </div>{" "}
      <TrendingProductCard />
    </div>
  );
};

export default TrendingProduct;
