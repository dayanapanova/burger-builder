import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'

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
        return(
            <Auxilliary>
                <Burger/>
                <div>Build Conrols</div>
            </Auxilliary>
        )
    }
}

export default BurgerBuilder;
