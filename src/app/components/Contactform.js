'use client'
import { useState } from "react";

function Contactform() {
    // form state
    const [user, setUser] = useState({
      username: '',
      email: '',
      phone: '',
      message: '' 
    });
    const [status, setStatus] = useState(null);


    // handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      // do something with the form data, such as sending an email or saving to a database
      
      console.log(user);
        try {
          const response = await fetch('/api/contact', {
              method:'POST',
              headers:{"Content_Type":"application/json"},
              body: JSON.stringify({
                  username:user.username,
                  email:user.email,
                  phone:user.phone,
                  message:user.message
              })
          })
          // Set the status based on the response from the API route
          if (response.status === 200) {
              setUser({
                  username: "",
                  email: "",
                  phone: "",
                  message: ""
              })
              setStatus('success');
          } else {
              setStatus('error');
          }
      }catch (e) {
          console.log(e)
      }
    };
  
    // handle form input change
    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      });
    };

    return (
      <form className="bg-gray-100 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Name
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="text"
            name="username"
            id="username"
            value={user.username}
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
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="text"
            name="phone"
            id="phone"
            value={user.phone}
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
            value={user.message}
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