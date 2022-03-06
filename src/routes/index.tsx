import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'

function Routes() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default Routes
