// React imports
import React from 'react'
import { useEffect, useState } from 'react';
// Router
import { BrowserRouter, Router, Route } from 'react-router-dom'

// Importing dependencies
import axios from 'axios'

// Importing components
import Tweet from './Tweet'

const Index = () => {
    const [tweets, setTweets] = useState([])

    const handleDetailsClick = () => {
        const fetchData = async () => {
            const { data } = await axios.get(`/tweets/api`)
            console.log(data)
        }
        fetchData()
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/tweets/api')
            // console.log(data)
            setTweets(data)
            // console.log(tweets)
        }
        fetchData()
    })
    return (
        <Tweet handleDetailsClick={handleDetailsClick} tweets={tweets}/>
    );
}

export default Index;