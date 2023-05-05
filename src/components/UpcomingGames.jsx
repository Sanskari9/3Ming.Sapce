import React, { useState, useEffect } from "react";
import UpcomingItems from "./UpcomingItems";
import GamesItem from "./GamesItem";
const UpcomingGames = ({posts}) => {
    // const [games, setGames] = useState([]);
    // const [oriGames, setOriGames] = useState([]);
    // const [text, setText] = useState("");

    // useEffect(() => {
    //     fetch("https://api.allorigins.win/get?url=https://www.freetogame.com/api/games")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setGames(JSON.parse(data.contents));
    //             setOriGames(JSON.parse(data.contents));
    //         });

    //     // eslint-disable-next-line
    // }, []);
    //             // console.log(games)

    // const gamesJsx = games.slice(0, 3).map((game) => (
    //     <UpcomingItems key={game.id} game={game} />
    // ));
    const gamesJsx = posts.slice(0, 3).map((p) => (
        <UpcomingItems post={p} />
        ));
    // setData(result.data.filter((str) => str.employee_name.includes("A")))

    return (
        <div className="box-lo">
            <div className="cont mt-4 mb-4">
                <h4 className="upcomming">Upcoming Game</h4>   
            </div>
            <div className="cont d-flex flex-wrap">
                {gamesJsx}
            </div>
        </div>
    );
};

export default UpcomingGames;
