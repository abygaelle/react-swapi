import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../services/sw-api";
import Pilots from "./Pilot";

const StarshipPage = (props) => {
  const [starship, setStarship] = useState({});
  let location = useLocation();
  useEffect(() => {
    getDetails(location.state.starship.url).then((starshipData) =>
      setStarship(starshipData)
    );
  }, []);
  return (
    <>
      <div class="row">
        <div clas="col s12">
          <div class="icon-container">
            <div
              class="card card-panel card-body yellow darken-1 black-text"
              id="starshipDetails"
            >
              <div>NAME: {starship.name}</div>
              <div>MODEL: {starship.model}</div>
              {starship.pilots?.length ? (
                <>
                  PILOTS:
                  <Pilots pilots={starship.pilots} />
                </>
              ) : (
                <p>No Pilots</p>
              )}
              <Link class="waves-effect amber accent-4 btn" to="/">
                Return
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarshipPage;
