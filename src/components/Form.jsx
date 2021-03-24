import React, { useState } from 'react'

import { FormSuccessModal } from '@components/FormSuccessModal'
import { FormErrorModal } from '@components/FormErrorModal'
import '@styles/components/Form.scss'

export const Form = ({ formValues, onChange, onSubmit, error, modalIsOpen, handleCloseModal, countries }) => {
  return (
    <form className="Form" onSubmit={onSubmit}>
      <div>
        <h1 className="Form__title">Información del formulario</h1>
        <hr />
        <div>
          <p className="Form__description">Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago</p>
          <div className="Form__inputsWrapper">
            <label htmlFor="name">
              <span>Nombre <sup>*</sup></span>
              <input
                onChange={onChange}
                type="text"
                id="name"
                name="firstName"
                autoComplete="given-name"
                required
                value={formValues.firstName}
              />
            </label>
            <label htmlFor="last-name">
              <span>Apellido <sup>*</sup></span>
              <input
                onChange={onChange}
                type="text"
                id="last-name"
                name="lastName"
                autoComplete="family-name"
                required
                value={formValues.lastName}
              />
            </label>
            <label>
              <span>Seleccione un pais <sup>*</sup></span>
              <input
                onChange={onChange}
                list="countries"
                id="country"
                name="country"
                value={formValues.country}
              />
              <datalist id="countries">
                {
                  countries.map((country, index) => <option value={country.name} key={index}></option>)
                }
              </datalist>
            </label>
            <label htmlFor="id">
              <span>Número de documento <sup>*</sup></span>
              <input
                onChange={onChange}
                type="number"
                id="id"
                name="id"
                autoComplete="on"
                required
                value={formValues.id}
              />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          className="Form__button Form__button--primary"
        >Enviar</button>
        {
          !error ? <FormSuccessModal
            isOpen={modalIsOpen}
            onClose={handleCloseModal}
          /> : <FormErrorModal
            isOpen={modalIsOpen}
            onClose={handleCloseModal}
          />
        }
        <button className="Form__button Form__button--ghost" type="button">Cancelar</button>
      </div>
    </form>
  )
}
