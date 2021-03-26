import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return{showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return(
            <Auxilliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                    <main className={classes.Content}>{this.props.children}</main>
            </Auxilliary>
        )
    }
} 

export default Layout;