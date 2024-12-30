"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ topic }) => {
  const router = useRouter();

  // State to hold the input values in a single object
  const [formData, setFormData] = useState({
    title: topic.title,
    description: topic.description,
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch(
        `${process.env.url}/api/topics/${topic._id}`,
        {
          method: "PUT", // Use POST method to create a new topic
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
          body: JSON.stringify(formData), // Convert form data to JSON
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create topic"); // Handle error if response is not okay
      }

      // Navigate to the home page after successful submission
      router.push("/"); // Redirect to the home page
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in the state
    }));
  };

  return (
    <div className="flex justify-center items-center flex-1">
      <form
        onSubmit={handleSubmit} // Attach the submit handler
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md space-y-6 border border-slate-300"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Update the Topic
        </h2>

        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="title"
          >
            Topic Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter topic title"
            value={formData.title} // Bind the input value to state
            onChange={handleChange} // Update state on change
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full"
            required
            maxLength={70}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-1"
            htmlFor="description"
          >
            Topic Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter topic description"
            value={formData.description} // Bind the input value to state
            onChange={handleChange} // Update state on change
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-full"
            required
            maxLength={160}
          />
        </div>

        <button
          className="bg-blue-600 font-bold text-white rounded-lg px-6 py-3 transition duration-300 hover:bg-blue-700 w-full shadow-md hover:shadow-lg"
          type="submit"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
