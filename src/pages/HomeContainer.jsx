import React, { useEffect, useState } from 'react'

import { Home } from '@pages/Home'

const API = 'https://restcountries.eu/rest/v2/all'

export const HomeContainer = () => {
  const [ data, setData ] = useState({
    form: {
      firstName: '',
      lastName: '',
      country: '',
      id: '',
    }
  })
  const [countries, setCountries] = useState([])
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCountries = async () => {
      try {
        const response = await fetch(API)
        let data = await response.json()
        data = data.slice(0, 20)
        setCountries(data)
        setLoading(false)
      } catch {
        setError(true)
        setLoading(false)
      }
    }
    fetchCountries()
  }, [])

  const handleChange = e => {
    setData({
      form: {
        ...data.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    if(!data.form.firstName.trim()) {
      setError(true)
      setLoading(false)
      setModalIsOpen(true)
      return
    }
    if (!data.form.lastName.trim()) {
      setError(true)
      setLoading(false)
      setModalIsOpen(true)
      return
    }
    if (!data.form.country.trim()) {
      setError(true)
      setLoading(false)
      setModalIsOpen(true)
      return
    }
    if (!data.form.id.trim()) {
      setError(true)
      setLoading(false)
      setModalIsOpen(true)
      return
    }

    setTimeout(() => {
      console.log('Formulario enviado con los siguientes datos:')
      console.table(data)
    }, 1000)
    setLoading(false)
    setError(false)
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <Home
      formValues={data.form}
      isLoading={loading}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      modalIsOpen={modalIsOpen}
      handleCloseModal={handleCloseModal}
      countries={countries}
    />
  )
}