import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import axios from 'axios';

import Currency_converter from './components/Currency_converter';

import './App.css';

class App extends Component {
  state = {
    currency: [],
    result: '',
    currencyValue1: '',
    currency1: '',
    currency2: '',
    date: 'latest',
  }

  componentDidMount() {
    const {currency1} = this.state;
    axios.get(`https://data.fixer.io/api/latest?access_key=eff15d471c7ba065a8cb7ebc4672cb30&base=${currency1}`)
      .then(res => this.setState({ currency: [res.data.rates] }))
  }

  convert = (currency1, currency2, currencyValue1) => {
    const { currency } = this.state;
    axios.get(`https://data.fixer.io/api/${this.state.date}?access_key=eff15d471c7ba065a8cb7ebc4672cb30&base=${currency1}`)
      .then(res => this.setState({ currency: [res.data.rates] }), this.setState({ result: currency[0][currency2]*currencyValue1}))
  }

  getData = (currency1, currency2, currencyValue1) =>{
    this.setState({ currency1: currency1, currency2: currency2, currencyValue1: currencyValue1  });
    axios.get(`https://data.fixer.io/api/${this.state.date}?access_key=eff15d471c7ba065a8cb7ebc4672cb30&base=${currency1}`)
      .then(res => this.setState({ currency: [res.data.rates] }))
  }
  
  dateChanged = (e) =>{
    this.setState({ date: e.target.value });
  }

  oldDate = (e) => {
    const { currency1, currency2, currencyValue1 } = this.state;
    this.convert( currency1, currency2, currencyValue1 )
  }

  render() {
    return (
        <React.Fragment>
          <div className="dollar">$</div>
          <div className="euro">€</div>
          <div className="pound">£</div>
          <Header />
          <div className="App">
            <Currency_converter currency={this.state.currency} result={this.state.result} getData={this.getData} convert={this.convert}></Currency_converter>
          </div>
          <div className="date">
            <h3>Choose a date, to see older currency rates</h3>
            <input type="date" onChange={this.dateChanged} name="date" min="2000-01-01"></input>
            <button onClick={this.oldDate}>Double click</button>
          </div>
        </React.Fragment>
    );
  } 
}

export default App;
