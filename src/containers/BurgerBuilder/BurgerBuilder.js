import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControl/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        }
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
