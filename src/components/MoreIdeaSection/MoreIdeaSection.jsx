/* eslint-disable react/no-unescaped-entities */
const MoreIdeaSection = () => {
  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl">MORE IDEAS</h3>
        <p className="font-semibold text-blue-700">View All</p>
      </div>{" "}
      <div className="md:flex mt-10 gap-10">
        <div className="flex flex-col border rounded cursor-pointer gap-4">
          <div>
            <img className="object-cover" src="public/more1.webp" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">
              CHICKEN TIKKA <br /> MASALA
            </h4>
          </div>
        </div>
        <div className="flex flex-col border rounded gap-4 cursor-pointer">
          <div>
            <img className="object-cover" src="public/more2.webp" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">VEGAN BACON</h4>
          </div>
        </div>
        <div className="flex flex-col border gap-4 rounded cursor-pointer">
          <div>
            <img className="object-cover" src="public/more3.webp" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">
              COPYCAT MCDONALD'S <br />
              BIG MAC SAUCE
            </h4>
          </div>
        </div>
        <div className="flex flex-col rounded cursor-pointer border gap-4">
          <div>
            <img className="object-cover" src="public/more4.webp" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">CROCK-POT BEEF ROAST </h4>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MoreIdeaSection;
