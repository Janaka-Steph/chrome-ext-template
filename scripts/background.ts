import { browser } from 'webextension-polyfill-ts'
import React from 'react'

setInterval(function () {
  browser.tabs.query({}).then((tabs) => {
    const firstTab = tabs[0]

    return browser.tabs.move(firstTab.id!, { index: -1 })
  })
}, 5000)

export const AppContext = React.createContext({})
