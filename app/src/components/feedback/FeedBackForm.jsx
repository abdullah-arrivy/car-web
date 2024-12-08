import React, { useState } from "react";

const FeedBackForm = React.memo(({ handleSubmit }) => {

  const [formData, setFormData] = useState({
    userName: "",
    emailAddress: "",
    messageText: "",
  });

  const fields = [
    { name: "userName", type: "text", placeholder: "Your Name" },
    { name: "emailAddress", type: "email", placeholder: "Your Email" },
    { name: "messageText", type: "textarea", placeholder: "Your Message" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.userName && formData.emailAddress && formData.messageText) {
      handleSubmit(formData);
      setFormData({
        userName: "",
        emailAddress: "",
        messageText: "",
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-lg shadow-lg space-y-4"
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700"
          >
            {field.placeholder}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="mt-1 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
});

export default FeedBackForm;
