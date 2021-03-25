import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControl/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        purchasable:false
    }

    updatePurchaseState () {
        const ingridients = {
            ...this.state.ingridients
        };

        const sum = Object.keys(ingridients)
        .map(igKey => {
            return ingridients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        },0)
        this.setState({purchasable: sum > 0})
    }

     addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount +1;
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients})
        this.updatePurchaseState();
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount  -1;
        const updatedIngridients = {
            ...this.state.ingridients
        }
        updatedIngridients[type] = updatedCount;
        const priceDeduction = INGRIDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDeduction;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
        this.updatePurchaseState();
    }

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxilliary>
                <Modal>
                    <OrderSummary ingridients={this.state.ingridients}/>
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                ingridientAdded={this.addIngridientHandler}
                ingridientRemoved={this.removeIngridientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                />
            </Auxilliary>
        )
    }
}

export default BurgerBuilder;
