import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
         <div className={classes.CheckoutSummary}>
             <h1>We hope it taste delicious!</h1>
             <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingridients={props.ingridients}/>
             </div>
             <Button btnType='Danger'clicked={props.onCheckoutCanceled}>Cancel</Button>
             <Button btnType='Success' clicked={props.onCheckoutCountinued}>Countinue</Button>
         </div>
    );
};

export default checkoutSummary;