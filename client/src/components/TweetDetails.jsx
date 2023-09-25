// React imports
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Importing dependencies
import axios from "axios";

const TweetDetails = () => {
  const { state } = useLocation();

  return (
    <>
      {state.tweet._id}
      <button>
        <Link
          to={`/tweets/${state.tweet._id}/edit`}
          state={{ tweet: state.tweet }}
        >
          Edit tweet
        </Link>
      </button>
    </>
  );
};

export default TweetDetails;
