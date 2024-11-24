import React from 'react';
import "./Recipe_Gallery.sass"

function Recipe_Gallery() {
    const recipes = [
        { id: 1, title: "Udon", ingredients: ["Udon noodle", "Soup broth (kakejiru)", "Green onion (negi)"], image: "https://www.justonecookbook.com/wp-content/uploads/2024/03/Kake-Udon-7549-I-1.jpg" },
        { id: 2, title: "Takoyaki", ingredients: ["Diced octopus (tako)", "tempura scraps (tenkasu)", "pickled ginger (beni shoga)", "green onion (negi)"], image: "https://static01.nyt.com/images/2024/01/10/multimedia/ND-Takoyaki-wfhg/ND-Takoyaki-wfhg-superJumbo.jpg" },
        { id: 3, title: "Oyakodon", ingredients: ["Chicken", "Onion", "Dashi stock", "Soy sauce", "Mirin", "Brown sugar (Zarame)", "Eggs", "Rice"], image: "https://www.justonecookbook.com/wp-content/uploads/2022/10/Oyakodon-0613-I-500x500.jpg" },
    ]
    return (
        <div className='Page'>
            <h1>Japanese Recipe Gallery</h1>
            <div className='recipeGallery'>
                {recipes.map(recipe =>
                    <div key={recipe} className='recipe'>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} className='recipeImage' />
                        <ul>
                            {recipe.ingredients.map(ingredient =>
                                <li key={ingredient}>{ingredient}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Recipe_Gallery