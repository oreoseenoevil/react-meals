import { useRef, useState } from 'react'
import { Input } from '../../UI/Input'
import classes from './index.module.css'

export const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
      }} />
      <button type="submit">+ Add</button>
      {!isValid && <p>Please input the valid amount. (1-5)</p>}
    </form>
  )
}
