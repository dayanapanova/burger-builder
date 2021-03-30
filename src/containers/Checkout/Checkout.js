import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingridients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
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
            </div>
        );
    };
};

export default Checkout;