import React from 'react'

import { Modal } from '@components/Modal'
import '@styles/components/FormErrorModal.scss'

export const FormErrorModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="FormErrorModal">
        <figure className="FormErrorModal__iconWrapper">
          <img
            className="FormErrorModal__icon"
            src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1616549316/epayco/error_vytmp6.svg"
            width="75"
            role="presentation"
          />
        </figure>
        <p className="FormErrorModal__description">formulario contiene errores</p>
        <button
          onClick={onClose}
          className="FormErrorModal__button"
          type="button"
        >Regresar</button>
      </div>
    </Modal>
  )
}
