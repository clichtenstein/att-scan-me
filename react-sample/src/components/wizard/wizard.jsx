import React, { Component } from 'react';
import SidebarLeft from './sidebar-left/sidebar-left';
import SidebarRight from './sidebar-right/sidebar-right';

class Wizard extends Component {
    render() {
        return (
            <div>
                Setup Direct TV Ospery device
                <SidebarLeft> </SidebarLeft> 
                <SidebarRight ></SidebarRight>

                <div>
                    <a href="https://www.youtube.com/">Upload your unboxing experience to social networks</a>
                </div>
                <div>
                    <a href="https://youtu.be/_SoBVyft75c" target="_blank">Check out the full setup toturial</a>
                </div>
                <div>
                    <input type="text" placeholder="Insert your phone number"></input>
                    <button>Call me</button>
                </div>
            </div>
        );
    }
}

export default Wizard;
