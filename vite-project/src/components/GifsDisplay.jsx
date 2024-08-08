import { useEffect } from "react";
import fetchData from "../utils/fetchHelper";
import API_KEY from "../utils/config";

const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

const GifsDisplay = ({ gifs, setGifs, setError }) => {
    
    useEffect(() => {
        const fetch = async() => {
            const [data, error] = await fetchData(trendingUrl);
            if (data) setGifs(data.data);
            if (error) setError(error);
        }
        fetch();
    }, []);
    
    return (
        <ul>
            {
                gifs.map((gif) => {
                    return (
                        <li key={gif.id}>
                            <figure>
                                <img src={gif.embed_url} />
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default GifsDisplay;