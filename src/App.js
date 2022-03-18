import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarshipList from './pages/StarshipList';
import StarshipPage from './pages/StarshipPage';


function App() {
  return (
    <>
    <h1 className="App">
      STARSHIPS
    </h1>
    <Routes>
      <Route path="/" element={<StarshipList/>}/>
      <Route path="/starship" element={<StarshipPage/>}/>
    </Routes>
  </>
  );
}

export default App;
