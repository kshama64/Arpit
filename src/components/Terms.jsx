import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-4 bg-gray-100 text-black">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-4">
          Effective Date: <span className="font-semibold">December 9, 2024</span>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to NAIMS INTERIOR!</h2>
          <p className="mb-2">
            These terms and conditions outline the rules and regulations for the use of NAIMS ENTERPRISES PRIVATE
            LIMITED's Website, located at <a href="http://www.naimsinterior.com" className="text-blue-600 underline">www.naimsinterior.com </a>.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use NAIMS INTERIOR if
            you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            We employ the use of cookies. By accessing NAIMS INTERIOR, you agreed to use cookies in agreement with the NAIMS
            ENTERPRISES PRIVATE LIMITED’s Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">License</h2>
          <p className="mb-2">
            Unless otherwise stated, NAIMS ENTERPRISES PRIVATE LIMITED and/or its licensors own the intellectual property rights
            for all material on NAIMS INTERIOR. All intellectual property rights are reserved. You may access this from NAIMS
            INTERIOR for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <ul className="list-disc pl-6">
            <li>Republish material from NAIMS INTERIOR</li>
            <li>Sell, rent or sub-license material from NAIMS INTERIOR</li>
            <li>Reproduce, duplicate or copy material from NAIMS INTERIOR</li>
            <li>Redistribute content from NAIMS INTERIOR</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hyperlinking to Our Content</h2>
          <p className="mb-2">
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors</li>
          </ul>
          <p>
            We may approve link requests from other organizations if we decide the link does not make us look unfavorably and is
            in the context of general resource information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating
            to our website and the use of this website. Nothing in this disclaimer will limit or exclude liabilities that are not
            permitted under applicable law.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
