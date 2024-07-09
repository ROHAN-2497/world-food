/* eslint-disable react/prop-types */
import Cover from "@/Shared/RecipeCover/Cover";
const Banner = ({ img }) => {
  return (
    <div
      className="object-cover h-[700px] mt-10 mb-10"
      style={{
        maxHeight: "700px",
        objectFit: Cover,
        backgroundImage: `url("${img}")`,
      }}
    >
      {" "}
      <div className="flex flex-col text-white gap-4 pl-20 justify-center bg-gradient-to-r from-black bg-opacity-10 h-full  items-start ">
        {" "}
        <h2 className=" text-5xl font-semibold ">
          THE 60 RECIPES YOU <br /> NEED FOR SUMMER
        </h2>
        <button className="p-4 bg-[#f5ce35]  hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          SEE THEM ALL
        </button>
      </div>
    </div>
  );
};

export default Banner;
