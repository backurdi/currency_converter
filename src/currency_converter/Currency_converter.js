import React from 'react'
import CurrencyList from './CurrencyList';

export default class Currency_converter extends React.Component {
    currency;

    state={
        currencyValue1: '',
        currency1: 'EUR',
        currency2: 'USD',
    }

    onChange = (e) => {
        const { currency1, currency2, currencyValue1 } = this.state
        this.setState({ [e.target.name]: e.target.value });
        this.props.convert(currency1, currency2, currencyValue1)
    };

    render(){
        if(this.props.currency[0]){
            this.currency = Object.keys(this.props.currency[0]);
            return (
                <div>
                    <div>
                        <input placeholder="Hello"></input>
                    </div>
                    <div>
                        <select onChange={this.onChange} name="currency1" value={this.state.currency1}>
                            {this.currency.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )}
                        </select>
                        <input placeholder="Currency 1" name="currencyValue1" onChange={this.onChange}></input>
                    </div>
                    <div>
                    <select onChange={this.onChange} name="currency2" value={this.state.currency2}>
                            {this.currency.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )}
                        </select>
                        <input placeholder="Currency 2"></input>
                    </div>
                </div>
            )
        }else{
            return''
        }
    }
}
