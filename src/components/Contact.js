// const Contact =() => {
//     return (
//         <div>
//             <h1>Contact</h1>
//             </div>
//     );
// };
// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Contact TastyBite
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-4 bg-gray-50 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700">We'd love to hear from you!</p>
          <div className="text-gray-700 space-y-2">
            <p><strong>Email:</strong> chintabrahmareddy50@gmail.com</p>
            <p><strong>Phone:</strong> +91 9346273397</p>
            <p><strong>Address:</strong> TastyBite HQ, Hyderabad, India</p>
            <p><strong>Hours:</strong> 9 AM - 9 PM (Mon - Sat)</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow space-y-4"
        >
          <div>
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded mt-1"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded mt-1"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 border border-gray-300 rounded mt-1"
              rows="5"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
