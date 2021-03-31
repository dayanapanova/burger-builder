import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import CheckoutData from './CheckoutData/CheckoutData';


class Checkout extends Component {
    state = {
        ingridients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingridients = {};
        for (let param of query.entries()) {
            ingridients[param[0]] = +param[1];
        }
        this.setState({ingridients: ingridients})
    };

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };

    checkoutCountinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return(
            <div>
                <CheckoutSummary 
                ingridients={this.state.ingridients}
                onCheckoutCanceled={this.checkoutCanceledHandler}
                onCheckoutCountinued={this.checkoutCountinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} component={CheckoutData}/>
            </div>
        );
    };
};

export default Checkout;