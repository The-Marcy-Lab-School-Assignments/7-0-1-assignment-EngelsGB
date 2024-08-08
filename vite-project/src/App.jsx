import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import GifsDisplay from './components/GifsDisplay'

function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState('');

  return error ? <p>{error.message}</p> : (
    <>
      <SearchBar setGifs={setGifs} setError={setError} />
      <GifsDisplay gifs={gifs} setGifs={setGifs} setError={setError} />
    </>
  );
};

export default App;
