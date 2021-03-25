import React from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingridientsSummary = Object.keys(props.ingridients)
    .map(igKey => {
        return (
        <li key={igKey}>
                <span style={{textTransform: 'capitalise'}}>{igKey}</span>: {props.ingridients[igKey]}
        </li>
    )})
    return (
        <Auxilliary>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingridients</p>
        <ul>
            {ingridientsSummary}
        </ul>
        <p>Countinue to checkout ?</p>
        <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
        <Button btnType='Success' clicked={props.purchaseCountinued}>Countinue</Button>
    </Auxilliary>
    )
}

export default orderSummary;