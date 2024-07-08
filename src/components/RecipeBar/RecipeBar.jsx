/* eslint-disable react/no-unescaped-entities */
const RecipeBar = () => {
  return (
    <div className="mt-20 md:flex">
      <div className="md:w-[70%]">
        <img src="public/picmtVAZB.webp" alt="" />
      </div>
      <div className="md:w-[30%] p-8 border h-[400px]:">
        <div className=" h-[90%] bg-white flex flex-col gap-4">
          <p className="font-bold">RECIPE</p>
          <h3 className="text-xl font-semibold">HOW TO GRILL OYSTERS</h3>
          <p className="hover:scrollbar-thumb-sky-500 active:scrollbar-thumb-sky-400  scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll">
            SUPER simple!!! Serve with a squeeze of lemon, BBQ sauce, cocktail
            sauce, horseradish, salsa. . .you name it! No shucking required.
            NOTE: make sure you buy LARGE oysters, as they are quite small when
            cooked and also make sure your heat is on HIGH or else the shells
            won't pop open. 2 dozen oysters will serve 4 as an appetizer or 2 as
            a main course. Recipe from Steven Raichlen's How to Grill.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBar;
