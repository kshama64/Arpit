import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img from "../assets/arpit.png";
import { Link } from "react-router-dom";

export default function Form({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [homeType, setHomeType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [agreeToUpdates, setAgreeToUpdates] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!name || !email || !phone || !homeType || !propertyName || !address) {
      setError("Please fill out all fields");
      setSuccessMessage("");
      return;
    }

    // Log form data to the console
    console.log({
      name,
      email,
      phone,
      homeType,
      propertyName,
      address,
      agreeToUpdates,
    });

    // Reset form and display success message
    setError("");
    setSuccessMessage("Form submitted successfully!");
    setName("");
    setEmail("");
    setPhone("+91");
    setHomeType("");
    setPropertyName("");
    setAddress("");
    setAgreeToUpdates(true);
    setOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <img
          src={img}
          alt="Banner"
          className="rounded-t-xl mb-4"
          height="150px"
          width="400px"
        />
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Budget-friendly design, Get in touch!
        </h2>

        {/* Name Field */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        {/* Email Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        {/* Phone Number Field */}
        <PhoneInput
          country="in"
          value={phone}
          onChange={setPhone}
          inputClass="w-full mb-4 border border-gray-300 rounded-md"
        />

        {/* Property Name Field */}
        <input
          type="text"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
          placeholder="Enter property name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        {/* Address Field */}
        {/* <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        /> */}

        {/* Home Type Dropdown */}
        <select
          value={homeType}
          onChange={(e) => setHomeType(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Your Home Type</option>
          <option value="apartment">Independent Houses/Villa</option>
          <option value="studio">RK/Studio</option>
          <option value="1bhk">1BHK</option>
          <option value="2bhk">2BHK</option>
          <option value="3bhk">3BHK</option>
          <option value="4bhk">4+BHK/Duplex</option>
        </select>

        {/* Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={agreeToUpdates}
            onChange={(e) => setAgreeToUpdates(e.target.checked)}
            className="mr-2"
          />
          <label>Send me updates on WhatsApp</label>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Success Message */}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-blue-600"
        >
 Quote        </button>

        <p className="text-sm text-gray-500 mt-4">
          By submitting, you agree to the{" "}
          <Link to="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms" className="text-blue-500 hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
