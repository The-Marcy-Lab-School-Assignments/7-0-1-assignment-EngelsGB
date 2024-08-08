import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import GifsDisplay from './components/GifsDisplay'
import fetchData from './utils/fetchHelper'
import API_KEY from './utils/config'

const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async() => {
        const [data, error] = await fetchData(trendingUrl);
        if (data) setGifs(data.data);
        if (error) setError(error);
    }
    fetch();
  }, []);

  return error ? <p>{error.message}</p> : (
    <>
      <SearchBar setGifs={setGifs} setError={setError} />
      <GifsDisplay gifs={gifs} setGifs={setGifs} setError={setError} />
    </>
  );
};

export default App;
