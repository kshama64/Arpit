import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img from "../assets/arpit.png";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import axios from "axios"


export default function Form() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [homeType, setHomeType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [agreeToUpdates, setAgreeToUpdates] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [locationData, setLocationData] = useState("");
  const [pincode, setPincode] = useState();

  const [isFormVisible, setIsFormVisible] = useState(true);

  // const [isChecked, setIsChecked] = useState(true)
  const navigate = useNavigate()

  // const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsFormVisible(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
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

    if (!propertyName) {
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

      if (agreeToUpdates) {
        // API call payload
        const data = new URLSearchParams({
          apiToken: '7428%7C2f1PQOaINhAiqFrRPnQQCx4gKLhT9cQUZvPpKZ2V',
          phone_number_id: '339128885942421',
          template_id: '130298',
          template_header_media_url: 'https://bot-data.s3.ap-southeast-1.wasabisys.com/upload/2024/12/flowbuilder/flowbuilder-65163-1734431036.pdf',
          template_quick_reply_button_values: '["EXTERNAL_ECOMMERCE_CANCEL_ORDER","EXTERNAL_ECOMMERCE_CANCEL_ORDER"]',
          phone_number: phone,
        });
        const response = await axios.post('https://botsailor.com/api/v1/whatsapp/send/template', data);
        // console.log('Success:', response.data);

      }
      // Send the template message

      // Send email using emailjs
      await emailjs.send("service_rblpkcm", "template_ivr9ggb", {
        to_name: name,
        to_email: email,
      });

      console.log('Email sent successfully.');

      // Clear error and set success message
      setError("");
      setSuccessMessage("Form submitted successfully!");

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("+91");
      setHomeType("");
      setPropertyName("");
      setAddress("");
      setAgreeToUpdates(true);
      setLoading(false)
      setIsFormVisible(false)
      // Navigate to home
      navigate("/");
      window.location.reload();
    } catch (error) {
      setLoading(true)
      console.error('Error:', error.response ? error.response.data : error.message);
      setError("An error occurred while submitting the form. Please try again.");
    }
  };

  useEffect(() => emailjs.init("c4sWy2XWFZOyRW6c4"), []);

  const handleSearch = async () => {

    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error("Google Maps API is not loaded.");
      return;
    }

    const service = new window.google.maps.places.AutocompleteService();
    const request = { input: propertyName, types: ["geocode"] };

    service.getPlacePredictions(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        console.log(results);
        setLocationData(results[0]?.description || "");
      } else {
        console.error("AutocompleteService error:", status);
      }
    });
  };

  useEffect(() => {


    if (propertyName) {
      handleSearch();
    }
  }, [propertyName]);


  return (
    <div>
      {isFormVisible && (
        <div className="relative flex justify-center items-center pt-64 w-100 h-screen overflow-auto">
          <button
            onClick={closeModal}
            className="absolute top-4 right-3 md:top-1 md:right-5 text-red-700 hover:text-red-800 text-2xl font-bold"
          >
            &times;
          </button>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-2xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          >
            <img
              src={img}
              alt="Banner"
              className="rounded-t-xl mb-4"
              height="150px"
            // width="100"
            />
            <h2 className="text-lg font-semibold text-gray-700 mb-6">
              Budget-friendly design, Get in touch!
            </h2>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <PhoneInput
              country="in"
              value={phone}
              onChange={setPhone}
              inputStyle={{ height: "40px", width: "100%" }}
            // inputClass="w-full mb-4 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              placeholder="Enter property name"
              className="w-full mt-4 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Pincode"
              className="w-full mt-4 px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />


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

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={agreeToUpdates}
                onChange={(e) => setAgreeToUpdates(e.target.checked)}
                className="mr-2 accent-red-800"
              />
              <label>Send me updates on WhatsApp</label>
            </div>


            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

            <button
              type="submit"
              className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-red-800"
            >
              {
                loading ? "Processing.." : "Quote"
              }
            </button>

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
      )}

    </div>
  );
}
