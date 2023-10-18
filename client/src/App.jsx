import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeForms } from "./components/Form/HomeForms";
// Importing components
import Tweets from "./components/Tweets";
import NewTweet from "./components/NewTweet";
import TweetDetails from "./components/TweetDetails";
import EditTweet from "./components/EditTweet";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="p-12 bg-white	 rounded-3xl	text-xl">
        <Router>
          <Routes>
            <Route path="/" element={<HomeForms />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="/tweets/new" element={<NewTweet />} />
            <Route path="/tweets/:id/edit" element={<EditTweet />} />
            <Route path="/tweets/:id" element={<TweetDetails />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
