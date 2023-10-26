import React, { useState } from "react";

const PostPost = () => {
  const [errorMassage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setErrorMessage('Comment created successfully.');
        setFormData({
          name: '',
          email: '',
          body: '',
        });
      } else {
        setErrorMessage('Error creating comment. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            handleFormChange("name", event.target.value);
          }}
          value={formData.name}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(event) => {
            handleFormChange("email", event.target.value);
          }}
          value={formData.email}
        />

        <label htmlFor="body">Password:</label>
        <input
          type="text"
          onChange={(event) => {
            handleFormChange("password", event.target.value);
          }}
          value={formData.body}
        />

        <button type="submit">Send comment</button>
      </form>
      {errorMassage}
    </div>
  );
};

export default PostPost;
