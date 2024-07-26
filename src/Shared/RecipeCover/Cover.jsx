/* eslint-disable react/prop-types */
const Cover = ({ img, title }) => {
  return (
    <div
      className="h-[1000px] mt-10 mb-10"
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "contain",
      }}
    >
      {" "}
      <div className="flex flex-col text-white gap-4 pl-20 justify-center bg-gradient-to-r from-black bg-opacity-10 h-full  items-start ">
        {" "}
        <h2 className=" text-5xl w-[50%] font-semibold uppercase">{title} </h2>
        <button className="p-4 bg-[#f5ce35]  hover:bg-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          SEE THEM ALL
        </button>
      </div>
    </div>
  );
};

export default Cover;
