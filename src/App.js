import React, { Component } from 'react';
import axios from 'axios';

import Currency_converter from './currency_converter/Currency_converter';

class App extends Component {
  state = {
    currency: [],
    result: '',
    currency1: ''
  }

  componentDidMount() {
    axios.get('https://data.fixer.io/api/latest?access_key=eff15d471c7ba065a8cb7ebc4672cb30')
      .then(res => this.setState({ currency: [res.data.rates] }))
  }

  convert = (currency1, currency2, currencyValue1 ) => {
    axios.get(`https://data.fixer.io/api/convert?access_key=eff15d471c7ba065a8cb7ebc4672cb30&from=${currency1}&to=${currency2}&amount=${currencyValue1}`)
      .then(res => console.log(res.data))
  }
  
  render() {
    return (
      <div className="App">
        <Currency_converter currency={this.state.currency} convert={this.convert}></Currency_converter>
        <button onClick={ this.convert }>Convert</button>
      </div>
    );
  } 
}

export default App;
