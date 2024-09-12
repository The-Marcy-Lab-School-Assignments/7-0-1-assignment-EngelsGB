import { handleFetch } from '../utils/handleFetch';
import { useState, useEffect } from 'react';
import API_KEY from '../utils/config';

function GifSearch({setGifs, setError}) {
    const [input, setInput] = useState('');
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`;

    useEffect(() => {
        const fetch = async() => {
            const [data, error] = await handleFetch(searchUrl);
            if (data) setGifs(data.data);
            if (error) setError(error);
        }
        fetch();
      }, [input]);

    const submitForm = (e) => {
        e.preventDefault();
        setInput(e.target[0].value);
        console.log('Submitted');
    }

    return (
        <form onSubmit={submitForm} >
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
