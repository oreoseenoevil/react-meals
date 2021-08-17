import { Fragment, useContext } from "react"
import mealImg from '../../../assets/meals.jpg'
import { CartContext } from "../../../Context/Cart"
import { Button } from "../../Cart/Button"
import classes from './index.module.css'

export const Header = (props) => {

  const { items } = useContext(CartContext)

  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button
          name="Your Cart"
          onClick={() => props.setModalCart(true)}
          numberOfCartItems={numberOfCartItems}
        />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt="Meals" />
      </div>
    </Fragment>
  )
}
