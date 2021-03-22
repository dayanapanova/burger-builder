import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControl/BuildControls'

const INGRIDIENTS_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
    }

     addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount +1;
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
    }

    removeIngridientHandler = (type) => {

    }

    render() {
        return (
            <Auxilliary>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls/>
            </Auxilliary>
        )
    }
}

export default BurgerBuilder;
