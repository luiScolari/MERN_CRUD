import React from "react";

import { Link } from "react-router-dom";

const Tweet = ({ tweet }) => {
  return (
    <>
      <Link to={`/tweets/${tweet._id}`} state={{ tweet: tweet }}>
        {tweet.username}
      </Link>
      <div>{tweet.text}</div>
    </>
  );
};

export default Tweet;
