import React, { useState } from 'react'

import { Header } from '@components/Header'
import { Form } from '@components/Form'
import { Footer } from '@components/Footer'
import '@styles/pages/Home.scss'

export const Home = () => {
  const [ data, setData ] = useState({
    form: {
      firstName: '',
      lastName: '',
      country: '',
      id: '',
    }
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = e => {
    setData({
      form: {
        ...data.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      
      setLoading(false)
    } catch {
      setError(error)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="Home">
        <Header />
        <main className="Main">
          <div className="wrapper">
            <div className="Main-content">
              <Form
                formValues={data.form}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}