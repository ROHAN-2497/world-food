import { Helmet } from "react-helmet-async";
import RecipeCover from "./RecipeCover";
import SeasonalRecipe from "@/components/SeasonalRecipe/SeasonalRecipe";
import Cover from "@/Shared/RecipeCover/Cover";
import coverImg from "../../../../public/coverIMG.jpg";

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
        <Cover img={coverImg} />
      </div>
    </div>
  );
};

export default Recipe;
