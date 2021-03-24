import React from 'react'

import { Modal } from '@components/Modal'
import '@styles/components/FormSuccessModal.scss'

export const FormSuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="FormSuccessModal">
        <figure className="FormSuccessModal__iconWrapper">
          <img
            className="FormSuccessModal__icon"
            src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1616549316/epayco/success_ykedr2.svg"
            width="75"
            role="presentation"
          />
        </figure>
        <p className="FormSuccessModal__description">formulario enviado con éxito</p>
        <button
          onClick={onClose}
          className="FormSuccessModal__button"
          type="button"
        >Finalizar</button>
      </div>
    </Modal>
  )
}
