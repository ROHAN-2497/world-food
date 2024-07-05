/* eslint-disable react/no-unescaped-entities */
const Carving = () => {
  return (
    <div className="w-[85%] mx-auto m-10 cursor-pointer">
      <div>
        <h3 className="text-3xl">WHAT WE'RE CRAVING</h3>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col mt-10">
          <div>
            <img
              className="object-cover w-[356px] "
              src="public/40ICQT4pSCmcrECpJyCK_DSC05368-2.webp"
              alt=""
            />
          </div>
          <div>
            {" "}
            <div className="-mt-20 flex flex-col text-white gap-1 pb-3 pl-2  bg-gradient-to-t from-black bg-opacity-10 w-[356px]">
              {" "}
              <p className="font-bold">COLLECTION</p>
              <h3 className="text-3xl font-semibold">
                27 FRESH TOMATO RECIPES FOR...
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div>
            <img
              className="object-cover w-[356px] "
              src="public/j4XpnNR3Sfiv8otvc5HS_cauliflower3.webp"
              alt=""
            />
          </div>
          <div>
            {" "}
            <div className="-mt-20 flex flex-col text-white gap-1 pb-3 pl-2  bg-gradient-to-t from-black bg-opacity-10 w-[356px]">
              {" "}
              <p className="font-bold">COLLECTION</p>
              <h3 className="text-3xl font-semibold">
                50 VEGETARIAN <br /> RECIPES FOR...
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div>
            <img
              className="object-cover w-[356px] "
              src="public/RDxdbGNvSMCdTDLEYy96_pieoyster-939.webp"
              alt=""
            />
          </div>
          <div>
            {" "}
            <div className="-mt-20 flex flex-col text-white gap-1 pb-3 pl-2  bg-gradient-to-t from-black bg-opacity-10 w-[356px]">
              {" "}
              <p className="font-bold">COLLECTION</p>
              <h3 className="text-3xl font-semibold">
                16 BEST SUMMER RECIPES FOR TWO
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carving;
