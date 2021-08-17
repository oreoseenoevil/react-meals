import { useContext } from 'react'
import { CartContext } from '../../../Context/Cart'
import { Modal } from '../../UI/Modal'
import CartItem from '../CartItem'
import classes from './index.module.css'

export const Cart = (props) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext)

  const cartItems = <ul className={classes['cart-items']}>
    {items.map(item => (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={removeItem.bind(null, item.id)}
        onAdd={addItem.bind(null, item)}
      />
    ))}
  </ul>

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={() => props.setModalCart(false)}
        >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}
