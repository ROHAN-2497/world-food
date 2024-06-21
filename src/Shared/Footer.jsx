import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { GoMoveToTop } from "react-icons/go";
const Footer = () => {
  return (
    <div className="flex text-white items-center justify-between mt-20 bg-black">
      <div className="flex flex-col justify-center gap-4  p-8">
        <div className="flex gap-4 py-2 ">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTwitterSquare />
          <FaYoutubeSquare />
          <FaYoutubeSquare />
          <div className="flex px-4 gap-4">
            <GoMoveToTop></GoMoveToTop>{" "}
            <h3 className="text-1xl font-semibold">Back To Top</h3>
          </div>
        </div>
        <div className="flex gap-4">
          <p>All Categories</p>
          <p>Site Map</p>
          <p>About Us</p>
          <p>Help</p>
        </div>
      </div>
      <div className="flex flex-col px-8">
        <h3 className="text-1xl font-bold">The Discovery Family of Networks</h3>
        <p className="text-gray-300">
          © 2024 Warner Bros. Discovery, Inc. or its subsidiaries and
          affiliates. All rights reserved
        </p>
        <div className="flex flex-col py-2">
          <div className="flex gap-4">
            <p>Visitor Agreement</p>
            <p>AdChoices</p>
            <p>Advertise</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex gap-2">
            <p> California Privacy Policy</p>{" "}
            <p>Do Not Sell or Share My Personal Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
