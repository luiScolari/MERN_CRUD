import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const NewTweet = () => {
  const [newTweet, setNewTweet] = useState({});

  const navigate = useNavigate();

  const handleTweetAndUsernameChange = (e) => {
    const { id, value } = e.target;
    setNewTweet({ ...newTweet, [id]: value });
    console.log(newTweet);
  };

  const handleNewTweet = () => {
    const postData = async () => {
      await axios({
        method: "POST",
        url: "/tweets/api/new",
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
        onChange={(e) => handleTweetAndUsernameChange(e)}
        type="text"
      />
      <p></p>
      <label htmlFor="text">What you want to write: </label>
      <textarea
        onChange={(e) => handleTweetAndUsernameChange(e)}
        id="text"
        cols="20"
        rows="5"
      ></textarea>
      <button onClick={handleNewTweet}>Submit</button>
    </div>
  );
};

export default NewTweet;
