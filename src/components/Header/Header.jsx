import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
       <>
       <header>
<nav>
    <ul>
        <li>
<NavLink to='/' className={({isActive}) => 
    isActive ? 'menu_item active_link' : 'menu_item'
}  >
Home
</NavLink>
            
        </li>
        <li>
<NavLink to='/blog' className={({isActive}) => 
    isActive ? 'menu_item active_link' : 'menu_item'
} >
    Blog
</NavLink>

        </li>
        <li>
            <NavLink to='/prediction' className={({isActive}) =>    isActive ? 'menu_item active_link' : 'menu_item'
} >Predict</NavLink>


        </li>
  
    </ul>
</nav>

       </header>
       
       </>
    );
};

export default Header;