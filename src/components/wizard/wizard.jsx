import React, { Component } from 'react';
import SidebarLeft from './sidebar-left/sidebar-left';
import SidebarRight from './sidebar-right/sidebar-right';

class Wizard extends Component {
    render() {
        return (
            <div>
                Att Scan me
                <SidebarLeft> </SidebarLeft> 
                <SidebarRight ></SidebarRight>
            </div>
        );
    }
}

export default Wizard;
