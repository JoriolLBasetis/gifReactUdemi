import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (Categories.includes(newCategory)) return;
        setCategories([newCategory, ...Categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                Categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}