import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo  from '../../assets/logo1.png'
import { FiSearch } from "react-icons/fi";
import Avatar from '../Avatar/Avatar';
import Button from '../Buttons/Button';

const Navbar = () => {

    var User = null 
    
    return (
        <nav>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-btn'>
                    <img src={logo} alt="logo" width="150px" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type='text' placeholder='Search...' />
                    <FiSearch />
                </form>
                { User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Link to='/' ><Avatar />G<Avatar /></Link>
                        <Button>Log out</Button>
                    </>
                }
            
            </div>
        </nav>
    )
}

export default Navbar