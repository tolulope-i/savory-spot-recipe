import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

  }, [])

  return (
    <div className="bg-gray-50">
      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/privacy4.jfif')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg px-2">
            Learn how we handle your information and maintain your privacy.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-primary mb-6">Introduction</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-bold">SavorySpot</span>, we value your privacy
          and are committed to protecting your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          interact with our website.
        </p>

        {/* Information We Collect */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Information We Collect
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <span className="font-bold">Personal Information:</span> Name, email
              address, and contact details provided through forms or account
              creation.
            </li>
            <li>
              <span className="font-bold">Usage Data:</span> Information about how
              you use our site, including pages visited and time spent.
            </li>
            <li>
              <span className="font-bold">Cookies:</span> Data collected through
              cookies to enhance your experience.
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            How We Use Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>To provide and maintain our services.</li>
            <li>To send you updates, newsletters, or promotional content.</li>
            <li>To analyze website traffic and user behavior for improvements.</li>
          </ul>
        </div>

        {/* Sharing Your Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Sharing Your Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share data with trusted partners to enhance
            our services, such as payment processors or analytics providers. These
            partners are bound by strict confidentiality agreements.
          </p>
        </div>

        {/* Your Rights */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">Your Rights</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a user, you have the following rights:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Access your data and request a copy.</li>
            <li>Request corrections or updates to your personal information.</li>
            <li>Request the deletion of your data.</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Contact Us
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy, feel
            free to contact us:
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:info@savoryspot.com"
              className="text-accent hover:underline"
            >
              info@savoryspot.com
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Phone:</span> +234 (0) 816 7351 891
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Address:</span> 123 Culinary Ave, Foodie
            City, FL 45678
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
