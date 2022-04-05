// React imports
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

// Importing dependencies
import axios from 'axios'




const TweetDetails = () => {
    const [tweet, setTweet] = useState([])
    const { id } = useParams()

    // handleDetailsClick = () => {
    //     const fetchData = async () => {
    //         const { data } = await axios.get(`/tweets/api/${id}`)
    //         // console.log(data)
    //         setTweet(data)
    //     }
    //     fetchData()
    // }
    // Sending the id backend to search in the database
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { data } = await axios.get(`/tweets/api/${id}`)
    //         // console.log(data)
    //         setTweet(data)
    //     }
    //     fetchData()
    // })
    return (
        <>
            {tweet.username}
            <a href="/tweet/edit">Edit tweet</a>
        </>
    );
}

export default TweetDetails;