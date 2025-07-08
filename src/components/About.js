import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-green-600">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-justify">
        Welcome to <span className="font-semibold text-green-700">TastyBite</span> – your go-to destination for
        delicious food delivered straight to your doorstep. Founded in 2025, our mission is to connect people with their favorite restaurants and deliver happiness through every meal. Whether it's a midnight craving or a family dinner, TastyBite is here to serve you hot and fresh!
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Wide range of restaurants and cuisines</li>
        <li>Fast and real-time delivery tracking</li>
        <li>Exciting offers and discounts</li>
        <li>Easy-to-use app interface</li>
        <li>Dedicated customer support</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold">Brahma Reddy</h3>
          <p className="text-sm text-gray-600">Frontend Developer</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold">Choppra subhash</h3>
          <p className="text-sm text-gray-600">Backend Developer</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold">Talluri Suresh Babu</h3>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Contact Us</h2>
      <p className="text-gray-700">
        📧 chintabrahmareddy50@gmail.com <br />
        📍 Hyderabad, India
      </p>
    </div>
  );
};

export default AboutUs;
