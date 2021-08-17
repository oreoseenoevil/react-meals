export const CartReducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE': {
      const existingId = state.items.findIndex(item => item.id === action.payload)
      const existingItem = state.items[existingId]
      const updatedTotalAmount = state.totalAmount - existingItem.price

      let updatedItems
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.payload)
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1
        }
        updatedItems = [...state.items]
        updatedItems[existingId] = updatedItem
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    case 'ADD': {
      const id = state.items.findIndex(item => item.id === action.payload.id)
      const item = state.items[id]

      let updateItems

      if (item) {
        const updateItem = {
          ...item,
          amount: item.amount + action.payload.amount
        }
        updateItems = [...state.items]
        updateItems[id] = updateItem
      } else {
        updateItems = [...state.items, action.payload]
      }
      
      return {
        ...state,
        items: updateItems,
        totalAmount: state.totalAmount + action.payload.price * action.payload.amount
      }
    }
    default:
      return state
  }
}