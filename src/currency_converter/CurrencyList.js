import React from 'react'

export default function CurrencyList(currency) {
    let currencyList = [];

    if(currency.currency[0]){
        for(var key in currency.currency[0]){
            currencyList.push(key);
        }
        return currencyList.map((currency) => (
            <option key={ currency }>{ currency }</option>
        ));
    }
    else{
        return ""
    }
}
