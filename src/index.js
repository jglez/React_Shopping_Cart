import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import './sass/index.scss'
import App from './App'

const AppWithRouter = withRouter(App)

render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.querySelector('#root')
)
