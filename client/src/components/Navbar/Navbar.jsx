import React from 'react';
import {Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import Avatar from '../Avatar'
import { useState } from 'react';
import './Navbar.css'
import { Heading } from '@chakra-ui/react';

const Navbar=()=>{
    const [color,setColor] = useState('#fadee8')
    var User = null
    return (
        <nav className='main-nav' >
            <div className="navbar" >
                <div className="logo-section">
                    <Link to='/' className='nav-item nav-logo'>
                    <Heading size='lg'>செவித்திறன்</Heading>
                    </Link>
                </div>
                <div className="buttons">
                    <form>
                        <label htmlFor="searchText"><FcSearch className='search-icon' /></label>
                        <input type="text" class="search-click" id='searchText' name="searchText" placeholder="search here..." />
                    </form>
                    { User === null ?
                        <Link to='/' className='nav-item nav-links'>Log In</Link>:
                        <>
                            <Link to='/profile' className='' style={{color:'white', textDecoration:'none' }}><Avatar backgroundColor='#009dff' px='10px' py='15px' borderRadius='50%' color='white'>N</Avatar></Link>
                            <button className='nav-item nav-links'>Log out</button>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
}
export default Navbar;