import { Link } from "react-router-dom";

const UpcomingItems = ({post}) => {
    return (
        <div className="card2 m-1 md:card2 m-3 overflow-hidden shadow-lg">
  <img class="card-img-top" src={post.thumbnail} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class=" text-xl mb-2"><h4 className="font-bold card-title">{post.title}</h4></div>

    <h6 className="pl-5">{post.short_description}<br /><br /><h6>Genre: {post.genre}<br />
Platform : {post.platform}</h6></h6>
    <Link
                    className="click-des text-decoration-none text-black mt-8"
                    to={`/details/${post._id}`}>
                    Click for more details
                </Link>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Upcoming</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web3</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gaming</span>
  </div>
</div>
    );
};

export default UpcomingItems;