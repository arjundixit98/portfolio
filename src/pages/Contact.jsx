// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4 text-gray-700">
        Feel free to reach out via email at <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">youremail@example.com</a> or connect on <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-600 hover:underline">LinkedIn</a>.
      </p>
    </section>
  );
};

export default Contact;