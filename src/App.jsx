/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Input from './components/Input'
import useCurrency from './hooks/useCurrency'

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  // in currencyinfo data returned by custom hook  is contained which is obj of from as custom hook must return something and options is array of keys of currencyInfo
  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  function convert() {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(3));
    //  here object should be accessed by bracket than .operator as for computed variable we must use bracket notation

  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/05/34/10/18/360_F_534101844_xIyxkPs1EBHj7kFULi1burnV7qlgx5Y4.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amountValue) => {
                  setAmount(amountValue)
                }}
                ONFOCUS={() => setAmount("")}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable="false"


              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert} >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
