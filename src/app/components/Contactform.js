'use client'
import { useState } from "react";

function Contactform() {
    // form state
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  
    // handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // do something with the form data, such as sending an email or saving to a database
      
      console.log(formData);
    };
  
    // handle form input change
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
    

    return (
      <form className="bg-gray-100 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-gray-400 p-2 w-full rounded-md"
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
  
export default Contactform;