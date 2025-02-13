import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

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

GifGrid.propTypes={
    category:PropTypes.string.isRequired,
}
