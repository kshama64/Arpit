import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import img from "../assets/arpit.png";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import axios from "axios"


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
  const [locationData, setLocationData] = useState("");
  const [pincode, setPincode] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();






    if (!name || !email || !phone || !homeType || !propertyName || !pincode) {
      setError("Please fill out all fields");
      setSuccessMessage("");
      return;
    }



    const data = new URLSearchParams({
      apiToken: '7428%7C2f1PQOaINhAiqFrRPnQQCx4gKLhT9cQUZvPpKZ2V',
      phone_number_id: '339128885942421',
      template_id: '130298',
      template_header_media_url: 'https://bot-data.s3.ap-southeast-1.wasabisys.com/upload/2024/12/flowbuilder/flowbuilder-65163-1734431036.pdf',
      template_quick_reply_button_values: '["EXTERNAL_ECOMMERCE_CANCEL_ORDER","EXTERNAL_ECOMMERCE_CANCEL_ORDER"]',
      phone_number: phone
    });

    axios.post('https://botsailor.com/api/v1/whatsapp/send/template', data)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
      });



    await emailjs.send("service_pqrd70b", "template_ivr9ggb", {
      to_name: name,
      to_email: email
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    navigate("/")

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
          Quote
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
  );
}
