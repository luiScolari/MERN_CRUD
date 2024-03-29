import React, { useEffect, useState } from "react";

import instance from "../axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

const EditTweet = () => {
  console.log("Eu passei aqui!");
  const { state } = useLocation();
  const [tweet, setTweet] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTweet(state.tweet.text);
  }, []);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTweet(e.target.value);
  };

  const handleInputSubmit = () => {
    const patchData = async () => {
      await instance({
        method: "PATCH",
        url: `/tweets/${state.tweet._id}`,
        data: {
          text: tweet,
        },
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate("/tweets");
    };
    try {
      patchData();
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <>
      <h3>{state.tweet.username}</h3>
      <input onChange={(e) => handleInputChange(e)} type="text" value={tweet} />
      <button onClick={handleInputSubmit}>SUBMIT</button>
    </>
  );
};

export default EditTweet;
