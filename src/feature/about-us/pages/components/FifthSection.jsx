import React from "react";

const FifthSection = () => {
  return (
    <section className=" ">
      <div className="grid grid-cols-5 bg-primary-color p-12  rounded-lg justify-center ml-20 absolute translate-y-1/4">
        <div className="col-span-3 ">
          <p className="text-4xl mb-4 text-white font-miniHeader_weight font-header_font_style">
            Ready to Explore New
          </p>
          <p className="text-4xl mb-4 text-white font-miniHeader_weight font-header_font_style">
            Languages and Cultures?
          </p>
          <p className="text-white text-ps_font_size">
            Join us for tips, lessons, and exclusive updates straight to your
            inbox!
          </p>
        </div>
        <div className="col-span-2 ">
          {" "}
          <form className="w-full max-w-md mt-10">
            <div className="relative bg-white px-9 py-2 rounded-lg justify-center">
              {" "}
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-none rounded-sm border border-gray-300 px-3 py-2 pr-24 text-sm focus:border-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="absolute rounded-sm right-0 mr-4 py-2  translate-y-1/5 rounded-r-sm bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
