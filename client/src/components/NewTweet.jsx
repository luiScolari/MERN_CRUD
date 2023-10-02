import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import instance from "../axiosInstance";

const NewTweet = () => {
  console.log("re rendered");
  const [newTweet, setNewTweet] = useState({});

  const navigate = useNavigate();

  const handleTweetAndUsernameChange = (e) => {
    const { id, value } = e.target;
    setNewTweet({ ...newTweet, [id]: value });
    console.log(newTweet);
  };

  const handleNewTweet = () => {
    // Error on frontend console and not rendering the /tweets updated
    const postData = async () => {
      await instance({
        method: "POST",
        url: "/tweets/new",
        data: newTweet,
        headers: {
          "Content-type": "application/json",
        },
      });
    };
    postData();
    navigate("/tweets");
  };

  return (
    <div>
      <label htmlFor="username">Insert your username: </label>
      <input
        id="username"
        value={newTweet.username}
        onChange={(e) => handleTweetAndUsernameChange(e)}
        type="text"
      />
      <p></p>
      <label htmlFor="text">What you want to write: </label>
      <textarea
        onChange={(e) => handleTweetAndUsernameChange(e)}
        id="text"
        value={newTweet.text}
        cols="20"
        rows="5"
      ></textarea>
      <button onClick={handleNewTweet}>Submit</button>
    </div>
  );
};

export default NewTweet;
