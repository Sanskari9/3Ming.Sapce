import { Link } from "react-router-dom";

const Games = ({post}) => {
    return (
        <div className="card m-1 flex flex-row">
            <img
                src={post.thumbnail}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body card-img-overlay text-light d-flex flex-column justify-content-between">
                <h5 className="card-title1">{post.title}</h5><h6>Genre: {post.genre}<br>
                </br>Platform : {post.platform}</h6>
                <Link
                    className="click-des text-decoration-none text-light"
                    to={`/details/${post._id}`}>
                    Click for more details
                </Link>
            </div>
        </div>
    );
};

export default Games;
