import { useState, useEffect } from "react";
import { getAllShips } from "../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getAllShips().then((shipData) => setResults(shipData.results));
  }, []);
  return (
    <>
      <div class="row">
        <div clas="col s12">
        <div class="icon-container">
          {results.map((starship) => (
            <Link
              class="card card-panel yellow darken-1 black-text"
              key={starship.url}
              state={{ starship }}
              to="/starship"
            >
              <div class="card-body">{starship.name}</div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StarshipList;
