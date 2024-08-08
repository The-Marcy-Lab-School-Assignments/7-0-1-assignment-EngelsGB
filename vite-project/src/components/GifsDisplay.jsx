import { useEffect } from "react";
import fetchData from "../utils/fetchHelper";
import API_KEY from "../utils/config";

const GifsDisplay = ({ gifs, setGifs, setError }) => {
    
    return (
        <ul>
            {
                gifs.map((gif) => {
                    return (
                        <li key={gif.id}>
                            <figure>
                                <img src={gif.images.preview_gif.url} />
                            </figure>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default GifsDisplay;