import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('images/terms5.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
          <p className="text-gray-200 mt-2">
            Understand the rules and regulations for using SavorySpot.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to SavorySpot
        </h2>
        <p className="mb-4">
          These Terms of Service (“Terms”) govern your use of SavorySpot
          (“Website”) and its services. By accessing or using the Website, you
          agree to comply with these Terms. If you do not agree, you may not
          use our Website or services.
        </p>

        {/* Terms List */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              1. User Eligibility
            </h3>
            <p>
              You must be at least 13 years old to use our Website. If you are
              accessing SavorySpot on behalf of a company or other entity, you
              represent and warrant that you have the authority to bind that
              entity to these Terms.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              2. Intellectual Property
            </h3>
            <p>
              All content, including recipes, images, text, graphics, and
              logos, are the property of SavorySpot or our content providers.
              Unauthorized use or reproduction is strictly prohibited without
              written consent.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              3. User-Generated Content
            </h3>
            <p>
              You retain ownership of the content you post, but you grant
              SavorySpot a non-exclusive, royalty-free, and worldwide license to
              use, distribute, and display such content on the Website.
              However, content that violates our policies may be removed
              without notice.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              4. Prohibited Activities
            </h3>
            <p>
              While using SavorySpot, you agree not to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Post defamatory, offensive, or illegal content.</li>
              <li>Engage in fraudulent or deceptive activities.</li>
              <li>
                Attempt to access restricted areas of the Website or disrupt
                services.
              </li>
              <li>
                Use the Website for unauthorized advertising or solicitation.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              5. Disclaimer and Limitation of Liability
            </h3>
            <p>
              The content on SavorySpot is provided for informational purposes
              only. We do not guarantee the accuracy or completeness of any
              recipe or advice shared on the Website. SavorySpot shall not be
              liable for any direct or indirect damages resulting from your use
              of the Website.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              6. Termination
            </h3>
            <p>
              We reserve the right to terminate or suspend your access to
              SavorySpot at our sole discretion, without notice, for conduct
              that we believe violates these Terms or is harmful to other users
              or the Website.
            </p>
          </div>
        </div>

        {/* Last Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Changes to Terms
          </h3>
          <p>
            SavorySpot reserves the right to update or modify these Terms at any
            time without prior notice. We encourage users to regularly review
            this page to stay informed.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p>
            If you have any questions or concerns about these Terms, please{" "}
            <a
              href="/contact"
              className="text-primary font-semibold underline"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
