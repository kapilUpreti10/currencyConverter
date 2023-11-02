/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function Input({
    // these all are props 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    // yedi userle kei select garena vane by default select garauna so that our app donot crash
    amountDisable,
    currencyDisable = false,
    ONFOCUS,
    className = "",
}) {



    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onFocus={ONFOCUS}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange((Number(e.target.value)))}
                // onAmountChange && narakheni hunxa 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency) => {
                            return (
                                <option key={currency} value={currency}>
                                    {currency}
                                    {/* here key is given for optimization as key diyena van react dom le mulitple dom create garirako hunxa as a result of which performance slowdown */}
                                </option>
                            )

                        })
                    }

                </select>
            </div>
        </div>
    );
}

export default Input;

//  React, when you map over an array to render a list of components, it's a good practice to provide a unique key prop to each child component. This key serves as a hint to React about the identity of each component in the list, helping React efficiently update the virtual DOM and reconcile changes.