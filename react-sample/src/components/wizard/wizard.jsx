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

                <br />
                <div>
                    <a href="https://www.youtube.com/">Upload your unboxing experience to social networks</a>
                </div>
                <br />
                <div>
                    <a href="https://youtu.be/_SoBVyft75c" target="_blank">Check out the full setup toturial</a>
                </div>
                <br />
                <div>
                    <button>Get Support</button>
                </div>
            </div>
        );
    }
}

export default Wizard;
