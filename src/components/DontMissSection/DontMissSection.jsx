/* eslint-disable react/no-unescaped-entities */
const DontMissSection = () => {
  return (
    <div className="cursor-pointer mt-10">
      <div>
        <h3 className="text-3xl">DON'T MISS</h3>
      </div>
      <div className="md:flex gap-10">
        <div className="flex flex-col mt-10">
          <div>
            <img
              className="object-cover w-[356px] "
              src="public/C0xk6rQSQT2OIILUpgyE_0S9A8983.webp"
              alt=""
            />
          </div>
          <div>
            {" "}
            <div className="-mt-20 flex flex-col text-white gap-1 pb-3 pl-2  bg-gradient-to-t from-black bg-opacity-10 w-[356px]">
              {" "}
              <p className="font-bold">COLLECTION</p>
              <h3 className="text-3xl font-semibold">
                21 BEST SUMMER RECIPES FOR HOT...
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div>
            <img
              className="object-cover w-[356px] "
              src="public/5DPuh7l0QOgenDaIYfW6_0S9A6534.webp"
              alt=""
            />
          </div>
          <div>
            {" "}
            <div className="-mt-20 flex flex-col text-white gap-1 pb-3 pl-2  bg-gradient-to-t from-black bg-opacity-10 w-[356px]">
              {" "}
              <p className="font-bold">COLLECTION</p>
              <h3 className="text-3xl font-semibold">
                24 BEST CORN RECIPES TO MAKE...
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div>
            <img
              className=" w-[356px] "
              src="public/QmQP2xL1QyOTq0Idbf1z_untitled-1226.webp"
              alt=""
            />
          </div>
          <div>
            {" "}
            <div className="-mt-20 flex flex-col text-white gap-1 pb-3 pl-2  bg-gradient-to-t from-black bg-opacity-10 w-[356px]">
              {" "}
              <p className="font-bold">COLLECTION</p>
              <h3 className="text-3xl font-semibold">
                50 QUICK & EASY SUMMER DINNER...{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMissSection;
