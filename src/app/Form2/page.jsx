 "use client";

import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
 
 // Ensure the file matches this import path

export default function DoNotSellForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    company: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: "c9f66eb3-7bae-487c-bd58-ab7a0f817bff", ...formData }),
    });

    if (response.ok) setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>QUORE B2B MARKETING - DO NOT SELL MY INFO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-[#f5faff] py-10 px-4">
        {!submitted ? (
          <>
            <div className="bg-gradient-to-r from-[#00D2A8] to-[#84D82D] text-white py-4 text-center text-2xl font-bold">
              QUORE B2B MARKETING CALIFORNIA DO NOT SELL MY INFO
            </div>

            <p className="text-center text-gray-700 text-base mt-6 max-w-4xl mx-auto px-4 leading-relaxed">
              We take your privacy seriously. If you are a resident of California, you may use this form to make a request to exercise certain rights which you may have under the California Consumer Privacy Act.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 max-w-2xl mx-auto bg-[#f7f8fa] p-6 md:p-10 rounded-xl shadow-lg border"
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    required
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D2A8]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    required
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D2A8]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex: myname@example.com"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D2A8]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <select
                    name="countryCode"
                    required
                    onChange={handleChange}
                    className="col-span-1 border border-gray-300 px-2 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D2A8]"
                  >
                    <option value="">Select</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+81">+81 (Japan)</option>
                    <option value="+49">+49 (Germany)</option>
                    <option value="+33">+33 (France)</option>
                    <option value="+39">+39 (Italy)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone no."
                    required
                    onChange={handleChange}
                    className="col-span-3 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D2A8]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="company name"
                  required
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D2A8]"
                />
              </div>

              <div className="mb-6 flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  onChange={handleChange}
                  className="accent-[#00D2A8] mt-1"
                />
                <label className="text-sm text-gray-700">
                  Please do not sell my personal information <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#00D2A8] to-[#84D82D] text-white px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
        <div className="flex flex-col items-center justify-center text-center -mt-8">
  <Image
    src="/images/thankyou.png"
    alt="Thank you"
    width={420}
    height={120}
    className="-mb-18"  // ⬅️ reduced from mb-6 to mb-2
  />
  <h2 className="text-3xl font-bold text-gray-800">Thank You!</h2>
  <p className="text-gray-600 mt-0">Your submission has been received.</p> {/* ⬅️ optional: also reduced mt if needed */}
</div>

        )}
      </div>
    </>
  );
}
