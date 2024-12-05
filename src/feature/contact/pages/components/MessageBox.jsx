import React from "react";
import ContanctImg from "../../../../assets/Contact Us/ContactImg.png";

const MessageBox = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center w-full px-4 md:px-10">
        <div className="flex justify-center lg:justify-start">
          <img
            src={ContanctImg}
            className="w-3/4 md:w-2/3 lg:w-full ml-7 max-w-sm"
            alt="Contact illustration"
          />
        </div>

        <div className="lg:col-span-2">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
              Let’s Talk
            </h2>
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              To request a quote or meet up for coffee, contact us directly or
              fill out the form. We'll get back to you promptly.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="mt-1 border p-2 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="mt-1 border p-2 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block p-2 w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-md"
                  placeholder="Type your message here."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-color text-white py-2 px-4 rounded-md shadow  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageBox;
