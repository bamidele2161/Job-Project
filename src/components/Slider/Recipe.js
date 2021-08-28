import React from 'react'

const Recipe = ({recipe}) => {
    const {label, image, url, ingredients} = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
        </div>
    )
}

export default Recipe