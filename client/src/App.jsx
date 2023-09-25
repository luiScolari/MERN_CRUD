import "./App.css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Tweets from "./components/Tweets";
import NewTweet from './components/NewTweet'
import TweetDetails from "./components/TweetDetails";
import EditTweet from './components/EditTweet'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/tweets/new" element={<NewTweet />} />
        <Route path="/tweets/:id/edit" element={<EditTweet />} />
        <Route path="/tweets/:id" element={<TweetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
