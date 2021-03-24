import React from 'react'

import { Header } from '@components/Header'
import { Form } from '@components/Form'
import { Footer } from '@components/Footer'
import { PageLoading } from '@components/PageLoading'
import '@styles/pages/Home.scss'

export const Home = ({ formValues, isLoading, error, handleChange, handleSubmit, modalIsOpen, handleCloseModal, countries }) => {
  return (
    <>
      <div className="Home">
        <Header />
        <main className="Main">
          <div className="wrapper">
            <div className="Main-content">
              {isLoading ? (
              <PageLoading />
              ) : <Form
                  formValues={formValues}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  error={error}
                  modalIsOpen={modalIsOpen}
                  handleCloseModal={handleCloseModal}
                  countries={countries}
                />
              }
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}