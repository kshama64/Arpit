import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import intimg from "../assets/interior.jpg";
import emailjs from "@emailjs/browser";
import axios from "axios";

export default function Formimg({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [homeType, setHomeType] = useState("");
  const [property, setProperty] = useState("");
  const [agreeToUpdates, setAgreeToUpdates] = useState(true);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    emailjs.init("c4sWy2XWFZOyRW6c4");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
    // Validation checks
    if (!name) {
      setLoading(false)
      setError("Name is required.");
      setSuccessMessage("");
      return;
    }

    if (!email) {
      setLoading(false)
      setError("Email is required.");
      setSuccessMessage("");
      return;
    }

    if (!phone || !/^\d{12}$/.test(phone)) {
      setLoading(false)
      setError("Please enter a valid 10-digit phone number.");
      setSuccessMessage("");
      return;
    }

    if (!homeType) {
      setLoading(false)
      setError("Home type is required.");
      setSuccessMessage("");
      return;
    }

    if (!property) {
      setLoading(false)
      setError("Property name is required.");
      setSuccessMessage("");
      return;
    }

    if (!pincode || !/^\d{6}$/.test(pincode)) {
      setLoading(false)
      setError("Please enter a valid 6-digit pincode.");
      setSuccessMessage("");
      return;
    }

    try {
      // WhatsApp message logic
      if (agreeToUpdates) {
        const data = new URLSearchParams({
          apiToken: '7428%7C2f1PQOaINhAiqFrRPnQQCx4gKLhT9cQUZvPpKZ2V',
          phone_number_id: '339128885942421',
          template_id: '130298',
          template_header_media_url: 'https://bot-data.s3.ap-southeast-1.wasabisys.com/upload/2024/12/flowbuilder/flowbuilder-65163-1734431036.pdf',
          template_quick_reply_button_values: '["EXTERNAL_ECOMMERCE_CANCEL_ORDER","EXTERNAL_ECOMMERCE_CANCEL_ORDER"]',
          phone_number: phone,
        });

        await axios.post('https://botsailor.com/api/v1/whatsapp/send/template', data);
      }

      // Email logic
      await emailjs.send("service_rblpkcm", "template_ivr9ggb", {
        to_name: name,
        to_email: email,
      });

      setSuccessMessage("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("+91");
      setHomeType("");
      setProperty("");
      setPincode("");
      setAgreeToUpdates(true);

      // Navigate and reload
      navigate('/');
      window.location.reload();
    } catch (error) {
      setError("An error occurred while submitting the form. Please try again.");
      console.error(error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSuccessMessage("");
  }, []);

  return (
    <div className="flex mb-3 justify-center items-center min-h-screen mt-5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 space-y-8 sm:space-y-0 sm:space-x-8 flex-wrap">
      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-all duration-300 transform flex-1"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-6 text-center">
            Budget-friendly design, Get in touch!
          </h2>

          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <PhoneInput
              country="in"
              value={phone}
              inputStyle={{ height: "40px", width: "100%" }}
              onChange={(phone) => setPhone(phone)}
              inputClass="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              placeholder="Enter your property name"
              
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <input
              type="number"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Pincode"
              className="w-full mt-2 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              checked={agreeToUpdates}
              onChange={(e) => setAgreeToUpdates(e.target.checked)}
              className="mr-2 w-5 h-5 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-800 accent-red-800"
            />
            <p className="text-gray-700 text-sm">Send me updates on WhatsApp</p>
          </div>

          <div className="mb-6">
            <select
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
              
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

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}

          {successMessage && (
            <div className="text-green-700 text-sm text-center mb-4">
              {successMessage}
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-red-900 text-white py-3 rounded-md hover:bg-red-500 transition-all duration-300 transform hover:scale-105 font-bold text-lg"
              disabled={loading}
            >
              {loading ? "Processing..." : "Quote"}
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

      <div className="flex-1 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 sm:mt-0">
        <img
          src={intimg}
          alt="Interior"
          className="w-full h-auto rounded-lg shadow-xl object-cover"
        />
      </div>
    </div>
  );
}
