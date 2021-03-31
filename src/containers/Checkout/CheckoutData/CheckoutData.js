import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './CheckoutData.css'

class CheckoutData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return(
            <div className={classes.CheckoutData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Name'></input>
                    <input className={classes.Input} type='email' name='email' placeholder='Email'></input>
                    <input className={classes.Input} type='text' name='street' placeholder='Street'></input>
                    <input className={classes.Input} type='text' name='postalCode' placeholder='PostalCode'></input>
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
};

export default CheckoutData;