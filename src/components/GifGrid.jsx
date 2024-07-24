import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {gifs,isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 >is loading</h2>)
            }
            
            <div className="card-grid">
                {gifs.map((gif) => (
                    <GifGridItem key={gif.id} {...gif} />
                ))
                }
            </div>
        </>
    )
}
