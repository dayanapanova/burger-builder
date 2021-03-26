import React, { Component } from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[Order Summary] WillUpdate');
    }
    render() {
        const ingridientsSummary = Object.keys(this.props.ingridients)
        .map(igKey => {
        return (
            <li key={igKey}>
                    <span style={{textTransform: 'capitalise'}}>{igKey}</span>: {this.props.ingridients[igKey]}
            </li> )
        })
        return(
            <Auxilliary>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingridients</p>
                <ul>
                    {ingridientsSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Countinue to checkout ?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseCountinued}>Countinue</Button>
        </Auxilliary>
        )
    }
}
export default OrderSummary;