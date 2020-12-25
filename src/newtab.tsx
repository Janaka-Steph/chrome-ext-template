import { hot } from 'react-hot-loader'
import { constVoid } from 'fp-ts/lib/function'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'

const BASE_URL = process.env.REACT_APP_BASE_URL || ''

const TResponse = t.type({
  rate: t.number,
})

const NewTab = () => {
  const [bitcoinUSDPrice, setBitcoinUSDPrice] = useState(0.0)

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`${BASE_URL}/.netlify/functions/bitcoin`)
        .then(
          (resp) =>
            E.either.map(TResponse.decode(resp.data), ({ rate }) =>
              setBitcoinUSDPrice(rate),
            ),
          constVoid,
        )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-xl">This is thee new tab page.</h1>
      <p className="text-lg">The background script is moving the tabs.</p>
      <img src="bitcoin.gif" alt="bitcoin" />
      <p>
        The price of Bitcoin is{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(bitcoinUSDPrice)}
      </p>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default hot(module)(NewTab)
