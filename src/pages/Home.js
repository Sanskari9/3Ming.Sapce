import React from "react";
import Games from "../components/Games";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import UpcomingGames from "../components/UpcomingGames";
import { useEffect, useState } from "react";
import axios from "axios";

import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
const Home = () => {
    const slides = [
      { url: "https://i.ibb.co/CwWmpzX/3-Ming-space.png", title: "city" },
        { url: "https://i.ibb.co/TRM20r4/2.png", title: "beach" },
        { url: "https://i.ibb.co/fpYc8r3/2-1.png", title: "boat" },
        { url: "https://i.ibb.co/zhK6JZB/4.png", title: "forest" },
        { url: "https://i.ibb.co/jH61QQX/3-1.png", title: "italy" },
      ];
      const [posts, setPosts] = useState([]);
      const { search } = useLocation();
    
      useEffect(() => {
        const fetchPosts = async () => {
          axios.defaults.withCredentials = true;
          const res = await axios.get("https://threeminglist-backend.onrender.com/posts/", search)
          setPosts(res.data);
          console.log(res);
        };
        fetchPosts();
      },[search]);
    return (
        <>
            <Navbar />
            <ImageSlider slides={slides} />
            <UpcomingGames posts={posts} />
            <Games posts={posts}/>
            <Footer />
        </>
    );
};

export default Home;
