import React from 'react';
import Auxilliary from '../../hoc/Auxilliary'

const layout = (props) => (
    <Auxilliary>
        <div>Toolbar, SideBar, Backdrop</div>
        <main>{props.children}</main>
    </Auxilliary>
);

export default layout;