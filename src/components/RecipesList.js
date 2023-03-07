// TODO: This component should show a list of all recipes and
// include a select element to filter recipes by category

import { useState, useEffect } from 'react'
import './Recipes.css'

export const RecipesList = () => {
  // TODO: Create State for recipes, categories, filteredRecipes, categoryChoice
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [categoryChoice, setCategoryChoice] = useState(0)
  // TODO: Create a useEffect that fetches recipes and categories
  useEffect(
    () => {
      console.log('Page Loaded')
      fetch('http://localhost:8088/recipes')
        .then(response => response.json())
        .then((data) => {
          setRecipes(data)
          setFilteredRecipes(data)
        })

      fetch('http://localhost:8088/categories')
        .then(response => response.json())
        .then(data => {
          setCategories(data)
        })
    }, []
  )

  // TODO: Create a useEffect that updates the filteredRecipes state if categoryChoice changes
  useEffect(() => {
    console.log('Choice was updated')
    const recipesThatAreFiltered = recipes.filter((recipe) => {
      return recipe.id === parseInt(categoryChoice)
    })

    setFilteredRecipes(recipesThatAreFiltered)
  }, [categoryChoice])

  return (
    <>
      <h1>Recipes!</h1>
      <div id="filter-bar">
        {/* TODO: Create a select element that shows the categories as options. Select should have an onChange function that sets the categoryChoice */}
        <select onChange={(event) => {
          setCategoryChoice(event.target.value)
        }}>
          <option value="0">Select a Category</option>
          {
            categories.map((category) => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })
          }

        </select>
      </div>

      <div className="recipe-container">
        {/* TODO: Display the filteredRecipes */}
        <article class="filteredrecipes">
          {
            filteredRecipes.map((recipe) => {
              return <section className="recipe">
                <header>{recipe.name}</header>
                <p>{recipe.recipeText}</p>
              </section>
            })
          }
        </article>
      </div>
    </>
  )
}
