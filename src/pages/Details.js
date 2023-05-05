// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import GameDetails from "../components/GameDetails";

// const Details = () => {
//     const [game, setGame] = useState([]);
//     const { gameId } = useParams();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         console.log("Fetching API")
//         fetch(`https://api.allorigins.win/get?url=https://www.freetogame.com/api/game?id=${gameId}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setGame(JSON.parse(data.contents));
//                 setLoading(false);
//             });

//     }, []);
//     return (
//         <>
//             <Header />
//             {loading ? "loading..." : <GameDetails key={gameId} game={game} />}
//             <Footer />
//         </>
//     );
// };

// export default Details;
