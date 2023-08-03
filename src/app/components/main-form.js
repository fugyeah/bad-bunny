"use client"

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "", 
    extra: ""
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [isGenerating, setIsGenerating] = useState(false); // Check to see if response is generating

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));

    if (fieldName === 'extra') {
      setCharacterCount(fieldValue.length);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
  
    // Get user input data from form
    const userInputData = new FormData(e.currentTarget);
  
    // Create new data object with user input data and hardcoded data
    const data = {
      ...Object.fromEntries(userInputData),
      recipientName: "Governor Ron DeSantis",
      email: "aaronnevins@hotmail.com"
    };
  
    try {
      const response = await fetch('openai/api/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });  

      if (!response.ok) {
        const errorResponse = await response.json();
        if (errorResponse && errorResponse.error) {
          throw new Error(errorResponse.error);
        } else {
          throw new Error("An error has occurred");
        }
      }
      alert('A Message has been sent to the Governor~ HelloFLA');

    } catch (err) {
      console.error(err);
      if (err.message == "say nicer things~") {
        alert("Say nice things ~ Spread positivity");
      } else {
        alert("an error has occured");
      }
    }
    setIsGenerating(false);
  }

 return(
    <div className="max-w-7x1 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto sm:px-6 lg:px-8 py-12" style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0,0,0,0.5)', borderBottom: '2px solid #00FF00' }}>
      <div className="grid gap-y-12 md:grid-cols-1 md:gap-x-12 ">
        <form onSubmit={handleSubmit} className="grid gap-y-5 text-amber-700 mx-2">
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="senderName">Your Name:</label>
            <input 
              type="text" 
              id="senderName" 
              name="senderName"
              maxLength={50}
              value={formData.senderName}
              placeholder="Your Name (Required)"
              onChange={handleInput}
              className="px-2 sm:px-3 md:px-4 lg:px-5 block w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-md bg-white border border-gray-40 shadow-s focus:outline-none focus:outline-amber-300"
              style={{ color: '#00FF00', backgroundColor: '#000000', borderColor: '#00FF00' }}
            />
          </div>
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="senderEmail">
              Your Email:
            </label>
            <input
              type="email"
              id="senderEmail"
              name="senderEmail"
              maxLength={50}
              value={formData.senderEmail}
              placeholder="Your Email (Required)"
              onChange={handleInput}
              className="px-2 block w-full rounded-md bg-white border border-gray-40 shadow-s focus:outline-none focus:outline-amber-300"
              style={{ color: '#00FF00', backgroundColor: '#000000', borderColor: '#00FF00' }}
            />
          </div>
          <div className="flex flex-col" style={{ color: '#00FF00' }}>
            Recipient's Name: Governor Ron DeSantis
          </div>
          <div className="flex flex-col" style={{ color: '#00FF00' }}>
            Their Email: GovernorRon.DeSantis@eog.myflorida.com
          </div>
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="extra">Anything you want to ADD? (Optional)</label>
            <textarea
              rows={7}
              maxLength={200}
              id="extra"
              name="extra"
              value={formData.extra}
              placeholder="Anything you want to ADD? (Optional)"
              onChange={handleInput}
              className="px-2 py-0.5 block w-full rounded-md bg-white border border-gray-40 shadow-s focus:outline-none focus:outline-amber-300"
              style={{ color: '#00FF00', backgroundColor: '#000000', borderColor: '#00FF00' }}
            />
            <div className="text-slate-400 text-right py-2" style={{ color: '#00FF00' }}>{characterCount} / 200</div>
          </div>
          <button 
            type="submit"
            className={`bg-transparent hover:bg-amber-600 text-amber-500 font-semibold hover:text-white py-2 px-2 sm:px-3 md:px-4 lg:px-5 border border-amber-500 hover:border-transparent rounded
              ${
                isGenerating || formData.senderEmail === "" || formData.senderName == ""
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            disabled={isGenerating || formData.senderEmail === "" || formData.senderName == ""}
            style={{ color: '#00FF00', borderColor: '#00FF00' }}
          >
            {isGenerating ? "Sending..." : "Send Postcard"}
          </button>
        </form>
      </div>
    </div>
  )
}

