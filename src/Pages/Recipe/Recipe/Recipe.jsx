import { Helmet } from "react-helmet-async";
import RecipeCover from "./RecipeCover";
import SeasonalRecipe from "@/components/SeasonalRecipe/SeasonalRecipe";
import Cover from "@/Shared/RecipeCover/Cover";
import coverImg from "../../../../public/coverIMG.jpg";
import coverImg2 from "../../../../public/coverIMG2.jpg";
import SupportProduct from "@/components/SupportProduct/SupportProduct";

const Recipe = () => {
  return (
    <div>
      <Helmet>
        <title>World Food | Recipe page</title>
      </Helmet>
      <RecipeCover />
      <div className="w-[85%] mx-auto">
        {" "}
        <SeasonalRecipe />
      </div>{" "}
      <Cover img={coverImg} title="FAVORITE CANNING & PICKLING RECIPES" />
      <div className="w-[85%] mx-auto">
        {" "}
        <SupportProduct />
      </div>{" "}
      <Cover img={coverImg2} title="QUICK & EASY SPRING DINNERS" />
    </div>
  );
};

export default Recipe;
