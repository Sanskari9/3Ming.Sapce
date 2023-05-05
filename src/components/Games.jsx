import React, { useState, useEffect } from "react";
import GamesItem from "./GamesItem";

const Games = ({posts}) => {
    // const [games, setGames] = useState([]);
    // const [oriGames, setOriGames] = useState([]);
    // const [text, setText] = useState("");

    // useEffect(() => {

    //         .then((response) => response.json())
    //         .then((data) => {
    //             setGames(JSON.parse(data.contents));
    //             setOriGames(JSON.parse(data.contents));
    //         });

    //     // eslint-disable-next-line
    // }, []);
    //             // console.log(games)

      const gamesJsx = posts.map((p) => (
        <GamesItem post={p} />
        ))
    // ));

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setGames(oriGames);
    //     const newResults = oriGames.filter((games) =>
    //         games.title.toLowerCase().includes(text.toLowerCase())
    //     );
    //     setGames(newResults);

    //     setText("");
    // };
    // const handleChange = (e) => {
    //     setText(e.target.value);
    // };

    return (
        <div className="box-lo"> 
            <div className="cont mt-4 mb-4">
            <h3 className="trending text-center">Trending Games</h3>
            </div>
            {/* <div className="container mb-5">
                {/* <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="justify-content-center form-control search1 text-light"
                        placeholder="Search game here..."
                        onChange={handleChange}
                        value={text}
                    />
                </form>
            </div> */}
            <div className="cont d-flex flex-wrap">
              {gamesJsx}
            </div>
</div>
);
};

export default Games;
