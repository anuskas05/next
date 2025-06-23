 "use client";

import { useState } from "react";
import Head from "next/head";

export default function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: [],
    message: "",
    referral: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        goals: checked
          ? [...prev.goals, value]
          : prev.goals.filter((goal) => goal !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formDataObj = new FormData(formElement);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitted(true);
        formElement.reset(); // optional: clear form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    }
  };

  return (
    <>
      <Head>
        <title>Get Qualified Leads - Web3Form</title>
        <meta
          name="description"
          content="Reach your top marketing goals with our expert services. Schedule a consultation today!"
        />
        <meta property="og:title" content="Get Qualified Leads - Web3Form" />
        <meta
          property="og:description"
          content="Boost your marketing performance by connecting with us for high-quality leads."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="bg-gradient-to-br from-white to-[#f7fdfb] min-h-screen py-16 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#00D2A8] mb-8">
          Get Qualified Leads – Get in Touch Today!
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
        >
          <input
            type="hidden"
            name="access_key"
            value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-[#00D2A8] focus:border-[#00D2A8]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-[#00D2A8] focus:border-[#00D2A8]"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-[#00D2A8] focus:border-[#00D2A8]"
            />
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-[#00D2A8] mb-2">
              What are your top marketing goals?
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Build Brand Awareness",
                "Create & Capture Demand",
                "Account-Based Marketing Program",
                "Increase Pipeline Revenue",
                "Improve Conversion Rates",
                "Google Search",
                "Email Marketing",
                "Others",
              ].map((goal, idx) => (
                <label key={idx} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    name="goals"
                    value={goal}
                    onChange={handleChange}
                    className="accent-[#00D2A8]"
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Tell us more about your needs
            </label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-[#00D2A8] focus:border-[#00D2A8]"
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              How did you hear about us? *
            </label>
            <select
              name="referral"
              required
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-[#00D2A8] focus:border-[#00D2A8]"
            >
              <option value="">Please Select</option>
              <option value="Google">Google</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Email Campaign">Email Campaign</option>
              <option value="Referral">Referral</option>
            </select>
          </div>

          <div className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="text-[#00D2A8] underline">
              Privacy Policy
            </a>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00D2A8] to-[#84D82D] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation Today
            </button>
          </div>
             {/* ✅ Thank You message shown AFTER submission */}
        {submitted && (
          <div className="mt-8 text-center bg-[#f0fff8] border border-[#00D2A8] rounded-xl px-6 py-6 max-w-2xl mx-auto shadow">
            <h2 className="text-1xl font-bold text-[#00D2A8] mb-2">Thank You!</h2>
            <p className="text-gray-700">Your submission has been received. We’ll get back to you shortly.</p>
          </div>
        )}
        </form>
      </section>
    </>
  );
}
