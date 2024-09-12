import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils/handleFetch';
import { useState, useEffect } from 'react';
import API_KEY from './utils/config';

const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async() => {
        const [data, error] = await handleFetch(trendingUrl);
        if (data) setGifs(data.data);
        if (error) setError(error);
    }
    fetch();
  }, []);

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setGifs={setGifs} setError={setError} />
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
