import classes from './index.module.css'

export const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  )
}
