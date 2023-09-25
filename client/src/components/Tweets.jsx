// React imports
import React from "react";
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

// Importing dependencies
import axios from "axios";

// Importing components
import Tweet from "./Tweet";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/tweets/api");
      setTweets(data);
    };
    fetchData();
  });
  
  return (
    <>
      {!!tweets &&
        tweets.map((tweet) => (
          <div>
            <Tweet tweet={tweet} />
          </div>
        ))}
        <Link to={"/tweets/new"}>Create new tweet</Link>
    </>
  );
};

export default Tweets;
