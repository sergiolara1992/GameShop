import { Link } from "react-router-dom"



const Home = () => {
  return (
    <>
      <div className="bg-img">
        <div className="bg-text">
          <h1>Best Videogames Here</h1>
          <Link className="bg-link" to="/Store">
            STORE
          </Link>
        </div>
      </div>

      <div className="bg-img-notice">
        <div className="bg-text-notice">
          <h1>Reviews And News</h1>
          <Link className="bg-link2" to="/blog">
            REVIEWS
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home
