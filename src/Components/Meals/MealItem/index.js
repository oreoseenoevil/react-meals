import { useContext } from 'react'
import { CartContext } from '../../../Context/Cart'
import { MealItemForm } from '../MealItemForm'
import classes from './index.module.css'

export const MealItem = (props) => {
  const { addItem } = useContext(CartContext)

  const onAddToCart = amount => {
    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm
         id={props.id}
         onAddToCart={onAddToCart}
        />
      </div>
    </li>
  )
}
