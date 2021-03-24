import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomeContainer } from '@pages/HomeContainer'
import { Layout } from '@components/Layout'
import '@styles/App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/clientes" component={HomeContainer} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}