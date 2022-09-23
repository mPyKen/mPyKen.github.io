import React from 'react'

import { StandardLayout } from '../components/layouts/StandardLayout'
import logo from '../logo.svg'
import './Home.css'

export const Home: React.FC = _props => {
  return (
    <StandardLayout>
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.tsx</code> and save to reload.
          </p>
          <a className="Home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </div>
    </StandardLayout>
  )
}
