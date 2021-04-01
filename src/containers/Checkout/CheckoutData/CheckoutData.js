import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './CheckoutData.css';
import Input from '../../../components/Input/Input';


class CheckoutData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'fastest', displayValue: 'Fastest'}, {value: 'chiepest', displayValue: 'Chiepest'}],
                },
                value: ''
            }

        }
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        return(
            <div className={classes.CheckoutData}>
                <h4>Enter your contact data</h4>
                <form>
                    {formElementArray.map(formElement => (
                        <Input  key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}/>
                    ))}
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
};

export default CheckoutData;