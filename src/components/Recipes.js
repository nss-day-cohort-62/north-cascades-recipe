// TODO: This component should show a list of all recipes and
// include a select element to filter recipes by category

import './Recipes.css'

export const Recipes = () => {
  // TODO: Create State for recipes, categories, filteredRecipes, categoryChoice

  // TODO: Create a useEffect that fetches recipes and categories


  // TODO: Create a useEffect that updates the filteredRecipes state if categoryChoice changes


  return (
    <>
      <h1>Recipes!</h1>
      <div id="filter-bar">
        {/* TODO: Create a select element that shows the categories as options. Select should have an onChange function that sets the categoryChoice */}

      </div>

      <div className="recipe-container">
        {/* TODO: Display the filteredRecipes */}

      </div>
    </>
  )
}
