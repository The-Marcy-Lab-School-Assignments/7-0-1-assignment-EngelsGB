import fetchData from "../utils/fetchHelper";
import { useState, useEffect } from "react";
import API_KEY from "../utils/config";


const SearchBar = ({ setGifs, setError }) => {
    const [input, setInput] = useState('');
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`;

    useEffect(() => {
        const fetch = async() => {
            const [data, error] = await fetchData(searchUrl);
            if (data) setGifs(data.data);
            if (error) setError(error);
        }
        fetch();
      }, [input]);

    return (
        <form>
            <label htmlFor="input">Search: </label>
            <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
    );
};

export default SearchBar;