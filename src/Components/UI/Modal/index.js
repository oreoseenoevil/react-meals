import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import classes from './index.module.css'

const Backdrop = () => {
  return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
}

const element = document.getElementById('overlay')

export const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, element)}
      {createPortal(<ModalOverlay>
        {props.children}
      </ModalOverlay>, element)}
    </Fragment>
  )
}
