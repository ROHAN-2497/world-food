/* eslint-disable react/no-unescaped-entities */
const SeasonalRecipe = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex flex-col">
        {" "}
        <div className="w-[60%] py-10">
          <h3 className="uppercase text-4xl font-semibold pb-4">
            seasonal recipes
          </h3>
          <p className="">
            Make the most of the season's finest produce, whether it's spring,
            summer, fall or winter. These seasonal recipes range from
            garden-fresh to cold-friendly.
          </p>
        </div>
        <div className="md:flex cursor-pointer sm:gap-10 gap-10 md:text-center">
          <div className="flex flex-col gap-4">
            {" "}
            <div>
              <img
                className="rounded-full w-[162px] h-[162px] object-cover"
                src="public/winterRecipes.webp"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-1xl font-semibold hover:text-blue-700">
                WINTER RECIPES
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <div>
              <img
                className="rounded-full w-[162px] h-[162px] object-cover"
                src="public/springRecipes.webp"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-1xl font-semibold hover:text-blue-700">
                SPRING RECIPES
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <div>
              <img
                className="rounded-full w-[162px] h-[162px] object-cover"
                src="public/summerRecipes.webp"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-1xl font-semibold hover:text-blue-700">
                SUMMER RECIPES
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <div>
              <img
                className="rounded-full w-[162px] h-[162px] object-cover"
                src="public/fallRecipes.webp"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-1xl font-semibold hover:text-blue-700">
                FALL RECIPES
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalRecipe;
