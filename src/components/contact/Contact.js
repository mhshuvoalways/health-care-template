import React from "react";

const Contact = () => {
  return (
    <div className="w-10/12 m-auto my-20">
      <div className="w-full md:w-6/12 space-y-5">
        <p className="w-2/12 text-xl border-b-2 pb-2 border-red-600 text-red-600 text-center">
          Contact us
        </p>
        <p className="text-5xl font-light">Send us</p>
        <p className="text-5xl font-bold text-red-600 ">your message</p>
        <p className="text-xl text-gray-600 tracking-normal">
          Proactively envisioned multimedia based expertise and cross-media
          growth strategies. Seamlessly visualize quality intellectual capital.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-6/12">
          <iframe
            title="usmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917598.1275009983!2d14.163040921372223!3d44.42871238944692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133441080add95ed%3A0xa0f3c024e1661b7f!2sCroatia!5e0!3m2!1sen!2sbd!4v1663657336000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="w-full md:w-6/12 space-y-2">
          <div>
            <label>Your Name*</label>
            <br />
            <input
              type="text"
              className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label>Your Email*</label>
            <br />
            <input
              type="email"
              className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label>Your Company*</label>
            <br />
            <input
              type="text"
              className="p-3 my-2 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label>Select Area*</label>
            <select className="p-3 my-2 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring">
              <option>Denmark</option>
              <option>Croatia</option>
              <option>Something</option>
            </select>
          </div>
          <div>
            <label>Your Message*</label>
            <textarea className="p-3 my-2 h-20 placeholder-gray-400 text-gray-600 w-full bg-gray-100 rounded text-sm outline-none focus:outline-none focus:ring" />
          </div>
          <p className="bg-red-600 hover:bg-gray-900 text-gray-100 py-2 px-3 cursor-pointer rounded-full w-full sm:w-4/12 text-center">Send Message</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
