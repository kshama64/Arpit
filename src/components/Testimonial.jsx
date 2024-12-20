import React, { useEffect, useState } from "react";
import menicon from "../assets/menicon.png";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Testimonial({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [homeType, setHomeType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [agreeToUpdates, setAgreeToUpdates] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [pincode, setPincode] = useState()
  const navigate = useNavigate()

  const testimonials = [
    {
      name: "Ashfaq Badsha",
      content: "Naim's interior was astonishing!...",
    },
    {
      name: "Uma Narayanan",
      content: "I Really Like what Naims Interior has done!...",
    },
    {
      name: "Ravi Shankar S",
      content: "Imtiyaz and his team are skilled woodworkers...",
    },
    {
      name: "Robert Brown",
      content: "Working with Naims Interior was a fantastic experience...",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


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



    await emailjs.send("service_rblpkcm", "template_ivr9ggb", {
      to_name: name,
      to_email: email
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })

    navigate('/')

    setError("");
    setSuccessMessage("Form submitted successfully!");
    setName("");
    setEmail("");
    setPhone("+91");
    setHomeType("");
    setPropertyName("");
    setAgreeToUpdates(true);
    setIsModalOpen(false);
    setSuccessMessage("");
  };

  useEffect(() => emailjs.init("c4sWy2XWFZOyRW6c4"), []);

  return (
    <div className="py-16 px-4 bg-gray-100">
      <h1 className="text-2xl font-extrabold text-center text-gray-900 mb-10 font-serif">
        Check Out Some of Our Customer Reviews
      </h1>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w-xs mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50"
          >
            <img
              src={menicon}
              alt={`${testimonial.name}'s image`}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {testimonial.name}
            </h3>
            <p className="text-gray-800 font-serif">{testimonial.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={openModal}
          className="bg-red-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-lg sm:text-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        >
          Get in Touch!
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                Get in Touch!
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800"
              >
                &#10005;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
                inputClass="w-full mb-4 border border-gray-300 rounded-md"
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
              {/* <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              /> */}
              <select
                value={homeType}
                onChange={(e) => setHomeType(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Your Home Type</option>
                <option value="villa">Independent Houses/Villa</option>
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
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
