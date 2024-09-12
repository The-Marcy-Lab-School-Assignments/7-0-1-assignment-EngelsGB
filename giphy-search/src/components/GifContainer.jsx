function GifContainer({gifs}) {
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
    )
}

export default GifContainer
