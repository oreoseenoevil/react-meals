import React, { createContext, useReducer } from 'react'
import { CartReducer } from '../CartReducer'

const initialState = {
  items: [],
  totalAmount: 0
}

export const CartContext = createContext({
  addItem: item => {},
  removeItem: id => {}
})

export const CartContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addItemToCart = item => {
    dispatch({
      type: 'ADD',
      payload: item
    })
  }

  const removeItemToCart = id => {
    dispatch({
      type: 'REMOVE',
      payload: id
    })
  }

  const { items, totalAmount } = state

  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
