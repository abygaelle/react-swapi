import { useState, useEffect } from 'react';
import {Link, useLocation } from 'react-router-dom';
import { getDetails } from '../services/sw-api';


const StarshipPage = (props => {
  const [starship, setStarship] = useState({})
  let location = useLocation()
  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarship(starshipData))
  }, [])
return (
  <>
  <div class="row">
  <div clas="col s12">
  <div class="icon-container">
  <div class="card card-panel card-body yellow darken-1 black-text"id="starshipDetails">
    <div>NAME: {starship.name}</div>
    <div>MODEL: {starship.model}</div>
    <Link to="/">Return
    </Link>
    </div>
    </div>
    </div>
  </div>
  </>
  )})

export default StarshipPage;