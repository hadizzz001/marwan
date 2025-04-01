"use client";

import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleWhatsAppRedirect = () => {
    if (!selectedOption) {
      alert("Please select an option before proceeding.");
      return;
    }

    const phoneNumber = "+9613682289";
    const message = encodeURIComponent(`I am interested in: ${selectedOption}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white lg:grid lg:min-h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Book a
            <strong className="text-[#000768]"> consultancy </strong>
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Unlock tailored solutions for your personal and professional growth. Whether you’re looking for expert corporate training, skills development, or life coaching, I offer customized consultancy sessions to help you achieve your goals. Book your session today and take the next step toward transformation.
          </p>

          {/* Radio Buttons */}
          <div className="mt-6 space-y-2">
            {[
              "E-Government and Digital Transformation",
              "Skills Training & Coaching",
              "Parental Coaching",
              "Life Coaching",
            ].map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="consultancy"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="mt-4 flex gap-4 sm:mt-6">
            <button
              className="inline-block rounded border border-indigo-600 bg-[#000768] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-800"
              onClick={handleWhatsAppRedirect}
            >
              Book via WhatsApp
            </button>
          </div>
        </div>

        {/* Responsive Image */}
        <div className="mt-6 md:mt-0 sm:p-10">
          <img
            className="w-full h-auto max-w-full rounded-lg object-cover md:h-[400px] lg:h-[500px]"
            src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164628/zjbuggj5eaoua3vo93r5.jpg"
            alt="Any Image Here"
          />
        </div>
      </div>
    </section>
  );
}
