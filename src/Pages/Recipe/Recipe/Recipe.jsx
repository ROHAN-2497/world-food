import { Helmet } from "react-helmet-async";
import RecipeCover from "./RecipeCover";
import SeasonalRecipe from "@/components/SeasonalRecipe/SeasonalRecipe";

const Recipe = () => {
  return (
    <div>
      <Helmet>
        <title>World Food | Recipe page</title>
      </Helmet>
      <RecipeCover />
      <SeasonalRecipe />
    </div>
  );
};

export default Recipe;
