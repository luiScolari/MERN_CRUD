import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Tweet from "./Tweet";

import instance from "../axiosInstance";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get("/tweets");
        console.log(data);
        setTweets(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!!tweets &&
        tweets.map((tweet) => (
          <div className="tweet py-2 px-4 border rounded w-96 mb-4 flex flex-col">
            <Tweet tweet={tweet} />
          </div>
        ))}
      <Link to={"/tweets/new"}>Create new tweet</Link>
    </>
  );
};

export default Tweets;
