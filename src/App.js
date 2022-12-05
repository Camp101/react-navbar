import React, {useState} from 'react';
import './App.css'
import { Button } from './Button';

const App = () => {

    const menuItems = [
        {
            title: 'Home',
            url: '#',
            iName: 'nav-links'
        },
        {
            title: 'Services',
            url: '',
            iName: 'nav-links'
        },
        {
            title: 'Products',
            url: '#',
            iName: 'nav-links'
        },
        {
            title: 'Contact Us',
            url: '#',
            iName: 'nav-links'
        },
        {
            title: 'Sign Up',
            url: '#',
            iName: 'nav-links-signup'
        },
    ]

    const [clicked, setClicked] = useState(false)


    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <>
       <nav className="navbaritems">
            <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1>
            <div className='menu-icon' onClick={handleClick}>
                <i className={ clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
            </div>
            <ul className={ clicked ? 'nav-menu active' : 'nav-menu' }>
               {menuItems.map((item, index)=>{
                return (
                    <li key={index}>
                        <a className={item.iName} href={item.url}>
                           {item.title}
                        </a>
                    </li>
                )
               })} 
            </ul>
            <Button>Sign Up</Button>
        </nav>
        </>
    )
}

export default App;