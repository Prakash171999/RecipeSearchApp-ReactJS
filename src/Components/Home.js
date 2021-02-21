import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const SearchRecipe = useHistory();
  const handleStartSearch = () => SearchRecipe.push("/search");

  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/cooking5.mp4" type="video/mp4" />
      </video>
      <div class="content">
        <div className="home-content">
          <h1>Foody Search</h1>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
            latine molestiae, ad mutat oblique delicatissimi pro.
          </p>
          <div className="start-btn">
            <button id="myBtn" onClick={handleStartSearch}>
              Start Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
