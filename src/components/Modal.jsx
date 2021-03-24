import React from 'react'
import ReactDOM from 'react-dom'

import { CloseIcon } from '@components/CloseIcon'
import '@styles/components/Modal.scss'

export const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button
          onClick={onClose}
          className="Modal__close-button"
        ></button>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}
