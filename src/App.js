import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Promote from "./pages/Promote";
import GameDetails from "./components/GameDetails";
import "./assets/styles.css";
import Stream from "./pages/StreamPage";
import About from "./pages/About";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/details/:postId" element={<GameDetails />} />
        </Routes>
    );
};

export default App;
