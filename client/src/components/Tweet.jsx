import React from "react";
import { Popover } from "@headlessui/react";

import { Link, useNavigate } from "react-router-dom";

import instance from "../axiosInstance";

const Tweet = ({ tweet }) => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    const deleteTweet = async () => {
      await instance.delete(`/tweets/${tweet._id}`);
      window.location.reload();
    };
    try {
      deleteTweet();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="mb-5 flex flex-row justify-between">
        {tweet.username}

        <Popover className="relative">
          <Popover.Button>
            <img
              className="w-4"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3ZQQ6CMBSE4X8jnMF6Q6zeUoREDVcxuNc0KUuF7qZmvuTt2EwetJkAZlVpgRMwAK88VyACDZU4ABPw/jIPIFDBJqYfIZa5q2/mvCHEMkeEjQVB0jcjay4Ikp79iyBPhA0FQXqExYIgHcKafE+shbgBO8SFlTApxJ5KNPme6PMBkOaSXyf5TZjZdu4jKtxH1IzuI2Jm9xEx0X1EUHAfMbPqtP4/IsJ9RM3oPiJmdh8RE91HBAX3ETPkfADfe0+kCAYLvQAAAABJRU5ErkJggg=="
            />
          </Popover.Button>

          <Popover.Panel className="absolute z-10">
            <Link to={`/tweets/${tweet._id}`} state={{ tweet: tweet }}>
              <button>Edit tweet</button>
            </Link>
            <button onClick={handleDeleteClick}>Delete tweet</button>
          </Popover.Panel>
        </Popover>
      </div>

      <div>{tweet.text}</div>
    </>
  );
};

export default Tweet;
