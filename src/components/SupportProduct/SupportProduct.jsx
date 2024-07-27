const SupportProduct = () => {
  return (
    <div className="">
      {" "}
      <h3 className="text-3xl font-semibold">
        COMMUNITY-SUPPORTED AGRICULTURE FINDS
      </h3>
      <div className="md:flex mt-10 gap-10">
        <div className="flex flex-col border w-[25%] rounded cursor-pointer gap-4">
          <div>
            <img className="w-full h-[206px]" src="/33.jpg" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">THE SUMMER VEGGIE BOX</h4>
          </div>
        </div>
        <div className="flex flex-col border w-[25%] rounded cursor-pointer gap-4">
          <div>
            <img className="w-full h-[206px]" src="/com2.webp" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">THE SUMMER VEGGIE BOX</h4>
          </div>
        </div>
        <div className="flex flex-col border w-[25%] rounded cursor-pointer gap-4">
          <div>
            <img className="w-full h-[206px]" src="/com3.jpg" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">THE FALL VEGGIE BOX</h4>
          </div>
        </div>
        <div className="flex flex-col border w-[25%] rounded cursor-pointer gap-4">
          <div>
            <img className="w-full h-[206px]" src="/com4.jpg" alt="" />
          </div>
          <div className="pb-8 pl-4">
            <h4 className="text-xl font-semibold">THE WINTER VEGGIE BOX</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportProduct;
