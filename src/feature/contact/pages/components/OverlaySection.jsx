import React from "react";

const OverlaySection = () => {
  return (
    <section className=" flex justify-center items-center mt-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 bg-primary-color p-6 lg:p-12 absolute translate-y-1/3 w-full max-w-5xl rounded-lg items-center gap-6">
        <div className="lg:col-span-3 text-center lg:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white font-miniHeader_weight font-header_font_style">
            Ready to Explore New
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white font-miniHeader_weight font-header_font_style">
            Languages and Cultures?
          </p>
          <p className="text-white text-sm md:text-base">
            Join us for tips, lessons, and exclusive updates straight to your
            inbox!
          </p>
        </div>

        <div className="lg:col-span-2">
          <form className="w-full max-w-md mx-auto lg:mx-0 mt-6 lg:mt-0">
            <div className="relative bg-white px-4 py-2 rounded-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-gray-600"
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

export default OverlaySection;
