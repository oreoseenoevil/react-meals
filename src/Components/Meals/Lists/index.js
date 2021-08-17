import { Fragment } from "react"
import { AvailableMeals } from "../AvailableMeals"
import { MealsSummary } from "../MealsSummary"

export const MealsList = (params) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>    
  )
}
