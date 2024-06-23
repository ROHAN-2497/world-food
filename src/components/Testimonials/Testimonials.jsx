import { useEffect, useState } from "react";

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
      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <div>
              {" "}
              <img src={review.profile_image} alt="" />
              <p>{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
