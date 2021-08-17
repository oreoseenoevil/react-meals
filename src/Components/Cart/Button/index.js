import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../Context/Cart"
import { Icon } from "../Icon"
import classes from './index.module.css'

export const Button = (props) => {
  const [onBump, setOnBump] = useState(false)
  const { items } = useContext(CartContext)

  const btnClass = `${classes.button} ${onBump && classes.bump}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setOnBump(true)

    const timer = setTimeout(() => {
      setOnBump(false)
    }, 300)

    return () => clearTimeout(timer)

  }, [items])

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span>{props.name}</span>
      <span className={classes.badge}>{props.numberOfCartItems}</span>
    </button>
  )
}
