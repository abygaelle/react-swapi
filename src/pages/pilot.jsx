import { useState, useEffect } from "react";
import { getPilots } from "../services/sw-api";

const Pilot = (props) => {
  const [pilotObject, setPilotObject] = useState([]);
  useEffect(() => {
    getPilots(props.pilots).then((pilotObj) => setPilotObject(pilotObj));
  });
  return (
    <>
      <ul>
        {pilotObject.map((pilot) => (
          <li key={pilot.name}>{pilot.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pilot;
