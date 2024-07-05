const Explore = () => {
  return (
    <div className="w-[85%] mx-auto">
      <div className="mb-10">
        <h3 className="text-3xl">EXPLORE MORE</h3>
      </div>
      <div className="flex cursor-pointer gap-10 text-center">
        <div className="flex flex-col gap-4">
          {" "}
          <div>
            <img
              className="rounded-full object-cover"
              src="public/be27babc-a2cb-4807-a7cf-f492f190f130.webp"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-1xl font-semibold hover:text-blue-700 ">
              COMFORT FOOD CLASSICS
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div>
            <img
              className="rounded-full object-cover"
              src="public/0ba5e633-8a82-4412-9912-3e4b021d3f36.webp"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-1xl font-semibold hover:text-blue-700">
              INTERNATIONAL EATS{" "}
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div>
            <img
              className="rounded-full object-cover"
              src="public/0e6210a9-7b32-4bae-a8a2-b1f8178cd33a.webp"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-1xl font-semibold hover:text-blue-700">
              BREAKFAST & BRUNCH{" "}
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div>
            <img
              className="rounded-full object-cover"
              src="public/4c90f65d-398c-462c-a165-eeca9e73aa8a.webp"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-1xl font-semibold hover:text-blue-700">
              COMMUNITY PICKS
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div>
            <img
              className="rounded-full object-cover"
              src="public/9985d8e3-87d3-4cfc-b312-b355a6630e76.webp"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-1xl font-semibold hover:text-blue-700">
              QUICK & EASY
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div>
            <img
              className="rounded-full object-cover"
              src="public/b968c752-8018-429d-aa68-b0baf71a9129.webp"
              alt=""
            />
          </div>
          <div>
            <h4 className="text-1xl font-semibold hover:text-blue-700">
              COPYCAT RECIPES
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
