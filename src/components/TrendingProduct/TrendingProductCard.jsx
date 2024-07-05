const TrendingProductCard = () => {
  return (
    <div className="md:flex mt-10 gap-10">
      <div className="flex flex-col border rounded cursor-pointer gap-4">
        <div>
          <img
            className="object-cover"
            src="public/YYUaTlx1QVigXh2hbQ4D_peachbruschetta3.webp"
            alt=""
          />
        </div>
        <div className="pb-8 pl-4">
          <h4 className="text-xl font-semibold">
            PEACH AND ROASTED <br /> RED PEPPER <br />
            BRUSCHETTA
          </h4>
        </div>
      </div>
      <div className="flex flex-col border rounded gap-4 cursor-pointer">
        <div>
          <img
            className="object-cover"
            src="public/xMWXZh5PTfa0soG1jjn4_GKNOW104_Alikah Hughes-Mike Lockyer-Marinated Steak_16x9_v17_H.webp"
            alt=""
          />
        </div>
        <div className="pb-8 pl-4">
          <h4 className="text-xl font-semibold">
            COURGETTE / <br /> ZUCCHINI PASTA WITH <br /> CHILI, GARLIC &AMP;{" "}
            <br />
            PARMESAN
          </h4>
        </div>
      </div>
      <div className="flex flex-col border gap-4 rounded cursor-pointer">
        <div>
          <img
            className="object-cover"
            src="public/PXDAEZnLRHSOUCBpGvQ0_untitled-2582.webp"
            alt=""
          />
        </div>
        <div className="pb-8 pl-4">
          <h4 className="text-xl font-semibold">
            MISO-GLAZED <br /> EGGPLANT
          </h4>
        </div>
      </div>
      <div className="flex flex-col rounded cursor-pointer border gap-4">
        <div>
          <img
            className="object-cover"
            src="public/pjxPldsR02IzWiPsu5QB__MG_4451.webp"
            alt=""
          />
        </div>
        <div className="pb-8 pl-4">
          <h4 className="text-xl font-semibold">
            MARINATED STEAK <br /> LETTUCE WRAPS
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
