import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { CiHeart } from "react-icons/ci";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex  items-center justify-between ">
        {" "}
        <h2 className="text-3xl">FRESH FROM OUR COMMUNITY</h2>
        <h4 className="text-1xl font-medium">View All</h4>
      </div>
      <div className="flex gap-4">
        {reviews.map((review) => (
          <div className="border p-4" key={review._id}>
            <div className="flex justify-between">
              {" "}
              <img
                className="w-10 h-10 rounded-full "
                src={review.profile_image}
                alt=""
              />
              <p>{review.name}</p>
            </div>
            <div>
              <img src={"/public/O3flKPWrS0eQVldjLMwB_IMG_0423.webp"} alt="" />
              <Rating
                className=""
                style={{ maxWidth: 80 }}
                value={5}
                readOnly
              />
              <p>
                Delicious. I like patties cooked in pan with a little olive oil.
                I used ground chuck roast.
              </p>
            </div>
            <div>
              <p>58 MINUTES AGO</p>
              <div className="flex justify-between">
                {" "}
                <p className="font-semibold">REPLAY</p>
                <CiHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
