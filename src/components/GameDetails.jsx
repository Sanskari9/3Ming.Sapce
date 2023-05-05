import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Headline from "./Headline";
import Navbar from "./Navbar";

const GameDetails = () => {
    const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
        axios.defaults.withCredentials = true;
      const res = await axios.get("https://threeminglist-backend.onrender.com/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
    return (
        <div>
            <Headline />
            <Navbar />
            <div className="cont text-light fw-lighter">
            
            <Link className="text-light" to="/"><h4 className="text-light pb-3 pt-1">Back</h4></Link>
            <h1 className="text-center pb-3">{post.title}
            </h1>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <div className="mb-3">
                    <img
                            src={post.gallery2}
                            className="img-fluid w-100"
                            alt={post.gallery1}
                        />
                    </div>
                    <div className="fs-4 pt-1">
                        <p>{post.description}</p>
                        <p>
                            <h3 className="pt-3"> Minimum System Requirements </h3>
                            <ul>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        os:
                                    </span>
                                    {post.os}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        processor:
                                    </span>
                                    {post.processor}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        memory:
                                    </span>
                                    {post.memory}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        graphics:
                                    </span>
                                    {post.graphics}
                                </li>
                                <li>
                                    <span className="me-3 fw-600 fs-3">
                                        storage:
                                    </span>
                                    {post.storage}
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img
                        src={post.thumbnail}
                        className="img-fluid d-none d-lg-block mb-3 "
                        alt=""
                    />
                    <div className="fs-5">
                        <h4 className="headshot">Short Description:</h4>
                        <p>{post.short_description}</p>
                        <h4>Platform</h4>
                        <p>{post.platform}</p>
                        <p>Genre: {post.genre}</p>
                        <p>Publisher: {post.publisher}</p>
                        <p>Developer: {post.developer}</p>
                        <p>Release Date: {post.release_date}</p>
                    </div>
                    <div className="play_now">
                        <button>
                            <a href={post.game_url}><h2>Play Now</h2></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default GameDetails;
