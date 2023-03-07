import { Routes, Outlet, Route } from "react-router-dom"
import { RecipesList } from "./RecipesList"
import { RecipeForm } from "./RecipeForm"
import { NavBar } from "./NavBar"
export const Recipes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="recipes" element={<RecipesList />} />
        <Route path="form" element={<RecipeForm />} />
      </Route>
    </Routes>
  )
}
