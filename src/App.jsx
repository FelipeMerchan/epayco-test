import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Layout } from '@components/Layout'
import '@styles/App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clientes" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}