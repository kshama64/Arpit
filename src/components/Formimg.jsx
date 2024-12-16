import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import intimg from "../assets/interior.jpg";

export default function Formimg({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [homeType, setHomeType] = useState("");
  const [property, setProperty] = useState(""); // New state for property
  const [agreeToUpdates, setAgreeToUpdates] = useState(true); // Default checked
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !homeType || !property) {
      setError("Please fill out all fields");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage("Form submitted successfully!");

    console.log({
      name,
      email,
      phone,
      homeType,
      property,
      agreeToUpdates,
    });

    setName("");
    setEmail("");
    setPhone("+91");
    setHomeType("");
    setProperty("");
    setAgreeToUpdates(true);
    setOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen mt-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 space-y-8 sm:space-y-0 sm:space-x-8 flex-wrap">
        {/* Form Section */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-all duration-300 transform flex-1"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-6 text-center">
              Budget-friendly design, Get in touch!
            </h2>

            {/* Name Field */}
            <div className="mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-6">
              <PhoneInput
                country="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputClass="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            {/* Property Name Field */}
            <div className="mb-6">
              <input
                type="text"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                placeholder="Enter your property name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            {/* Checkbox for Updates */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                checked={agreeToUpdates}
                onChange={(e) => setAgreeToUpdates(e.target.checked)}
                className="mr-2 w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
              />
              <p className="text-gray-700 text-sm">Send me updates on WhatsApp</p>
            </div>

            {/* Home Type Dropdown */}
            <div className="mb-6">
              <select
                value={homeType}
                onChange={(e) => setHomeType(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Please Select Your Home Type</option>
                <option value="apartment">Independent Houses/Villa</option>
                <option value="house">RK/Studio</option>
                <option value="condo">1BHK</option>
                <option value="villa">2BHK</option>
                <option value="villa">3BHK</option>
                <option value="villa">4+BHK/Duplex</option>
              </select>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">{error}</div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="text-green-700 text-sm text-center mb-4">
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 rounded-md hover:bg-red-500 transition-all duration-300 transform hover:scale-105 font-bold text-lg"
              >
                 Quote
              </button>
              <div>
                <p className="text-sm text-gray-700 mt-4">
                  By submitting this form, you agree to the <br />
                  <Link to="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms" className="text-blue-600 hover:underline">
                    Terms of Use
                  </Link>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 sm:mt-0">
          <img
            src={intimg}
            alt="Interior"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </>
  );
}