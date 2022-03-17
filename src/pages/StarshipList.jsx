import { useState, useEffect } from 'react'
import { getAllShips } from '../services/sw-api'

const StarshipList = (props) => {
  const [results, setResults] = useState([])
  useEffect(()=> {
    getAllShips()
    .then(shipData => setResults(shipData.results))
  }, [])
  return (
    <>
      <div>
        <h3>Starship List</h3>
        <div className="icon-container">
          {
            /** */
          }
          {classes.map((classTitle)=> (
            <div id="classDiv" key={classTitle}>
              <img
                style={{width: "100px", height:"100px" }}
                src={`/images/${classTitle}.svg`}
                alt="class-logo"
              />
              {classTitle}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StarshipList