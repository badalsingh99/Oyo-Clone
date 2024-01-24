import React from "react";
import Banner5 from "../images/banner5.avif";

const Section = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="flex justify-between items-center px-5">
        <div className="flex items-start">
          <img
            src={Banner5}
            alt="Banner5"
            width={200}
            height={200}
            className="w-full h-80 "
          />
        </div>
        <div className="flex flex-col items-center mr-40 pl-5">
          <h1 className="text-3xl font-bold text-black py-6">
            There's an OYO around. Always.
          </h1>
          <p className="text-gray-600 py-3">
            More Destinations. More Ease. More Affordable.
          </p>
          <div className="slash-container">
            <span className="text-3xl font-bold ml-3">35+</span>
            <span className="ml-2">Countries & cities</span>
            <span className="slash-line"></span>
            <h3 className="text-3xl font-bold">174,000+</h3>
            <p className="ml-2">Hotels & Homes</p>
          </div>
          <div className="grid grid-cols-3 gap-5 pb-4 ">
            {[
              { country: "Indonesia" },
              { country: "Malaysia" },
              { country: "Denmark" },
              { country: "US" },
              { country: "UK" },
              { country: "Netherlands" },
            ].map((item, index) => (
              <div className="mb-4">
                <div key={index} className="flex items-center">
                  <span className="mr-2 font-bold text-lg text-blue-400">
                    &#8226;
                  </span>
                  <span className="font-bold text-gray-600">
                    {item.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
