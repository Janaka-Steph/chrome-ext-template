import React from 'react'
import ReactDOM from 'react-dom'
import { AppContext } from '../scripts/background'
import NewTab from './newtab'

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <AppContext.Provider value={{}}>
        <NewTab />
      </AppContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  )
}

renderApp()

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
module.hot.accept()
