import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [gifs, setgifs] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImgs = async () => {
        const newGifs = await (getGifs(category));
        setgifs(newGifs);
        setisLoading(false);
    }

    useEffect(() => {
        getImgs(category);
    }, [])

    return {
        gifs,
        isLoading
    }
}
