import fetchData from "../utils/fetchHelper";
import { useState, useEffect } from "react";
import API_KEY from "../utils/config";


const SearchBar = ({ setGifs, setError }) => {
    const [input, setInput] = useState('');
    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=3&rating=g`;

    const handleSubmit = async (e) => {
        // const [data, error] = await fetchData()
        e.preventDefault();
        setInput('');
        const [data, error] = await fetchData(searchUrl);
        if (data) setGifs(data.data);
        if (error) setError(error);
    }

    useEffect(() => {
        const fetch = async() => {
            const [data, error] = await fetchData(searchUrl);
            if (data) setGifs(data.data);
            if (error) setError(error);
        }
        fetch();
    }, [input]);


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Search: </label>
            <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit' >Submit</button>
        </form>
    );
};

export default SearchBar;