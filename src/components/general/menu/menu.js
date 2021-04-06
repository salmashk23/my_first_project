import React from 'react';
import MenuItems from './menu_items.js';
import SearchBar from '../../general/search/search.js';
import './menu.css';

class Menu extends React.Component{
    render(){
        return(
            <nav className="NavbarItems" >
                <ul id="myNav" className= "nav-menu">
                    {
                        MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                                )
                            }
                        )
                    }
                <SearchBar/>
                </ul>
            </nav>
        );
    }
}
export default Menu;
