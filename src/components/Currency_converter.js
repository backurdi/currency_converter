import React from 'react'

export default class Currency_converter extends React.Component {
    currency;

    constructor(props) {
        super(props)
        this.state={
            currencyValue1: '',
            currency1: 'EUR',
            currency2: 'USD',
        }
    }
    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, ()=>{
            const { currency1, currency2, currencyValue1 } = this.state
            this.props.getData(currency1, currency2, currencyValue1);
            this.props.convert(currency1, currency2, currencyValue1);
        });
    };

    render(){
        if(this.props.currency[0]){
            this.currency = Object.keys(this.props.currency[0]);
            return (
                <React.Fragment>
                    <div className="currency-box">
                        <select onChange={this.onChange} name="currency1" value={this.state.currency1} className="currency-selector">
                            {this.currency.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )}
                        </select>
                        <input placeholder="Insert amount" name="currencyValue1" onChange={this.onChange}></input>
                    </div>
                    <div className="equal-sign">
                        =
                    </div>
                    <div className="currency-box">
                        <select onChange={this.onChange} name="currency2" value={this.state.currency2} className="currency-selector">
                            {this.currency.map((item, i) =>
                                <option key={i} value={item}>{item}</option>
                            )}
                        </select>
                        <input placeholder="Result" value={this.props.result}></input>
                    </div>
                </React.Fragment>
            )
        }else{
            return''
        }
    }
}
