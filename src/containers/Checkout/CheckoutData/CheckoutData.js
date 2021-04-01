import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './CheckoutData.css';
import Input from '../../../components/Input/Input';


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
                    <Input inputtype='input' type='text' name='name' placeholder='Name'/>
                    <Input inputtype='input' type='email' name='email' placeholder='Email'/>
                    <Input inputtype='input' type='text' name='street' placeholder='Street'/>
                    <Input inputtype='input' type='text' name='postalCode' placeholder='PostalCode'/>
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
};

export default CheckoutData;