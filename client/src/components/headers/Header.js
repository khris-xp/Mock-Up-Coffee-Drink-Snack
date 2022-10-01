import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.png'
import Close from './icon/close.png'
import Cart from './icon/carts.png'
import Logo from './icon/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart

    let [open, setOpen] = useState(false);

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = '/';
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }

    let Links = [
        { name: "HOME", link: "/" },
        { name: "LOGIN", link: "/login" },
        { name: "REGISTER", link: "/register" }
    ];

    let UserLinks = [
        { name: "HOME", link: "/", click: '' },
        { name: "HISTORY", link: "/history", click: '' },
        { name: "LOGOUT", link: "/", click: logoutUser }
    ];

    let AdminLinks = [
        { name: "PRODUCTS", link: "/", click: '' },
        { name: "CREATE PRODUCTS", link: "/create_product", click: '' },
        { name: "CATEGORIES", link: "/category", click: '' },
        { name: "HISTORY", link: "/history", click: '' },
        { name: "LOGOUT", link: "/", click: logoutUser }
    ];

    return (
        <div>
            <header>
                <div className='shadow-md w-full fixed top-0 left-0'>
                    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                            <a href="/" className="h-10 w-10 self-center mr-2">
                                <img src={Logo} alt="" className="h-10 w-10 self-center" />
                            </a>
                            <Link to="/" className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800">{isAdmin ? 'ADMIN' : 'MOCKUP COFFEE'}</Link>
                        </div>

                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                        </div>

                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                            {
                                isAdmin ? AdminLinks.map((AdminLinks) => (
                                    <li key={AdminLinks.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={AdminLinks.click}>
                                        <a href={AdminLinks.link} className='text-gray-800 hover:text-gray-400 duration-500'>{AdminLinks.name}</a>
                                    </li>
                                ))
                                    :
                                    isLogged ? UserLinks.map((UserLinks) => (
                                        <li key={UserLinks.name} className="md:ml-8 text-xl md:my-0 my-7" onClick={UserLinks.click}>
                                            <a href={UserLinks.link} className='text-gray-800 hover:text-gray-400 duration-500'>{UserLinks.name}</a>
                                        </li>
                                    ))
                                        :
                                        Links.map((link) => (
                                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                                            </li>
                                        ))
                            }
                        </ul>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Header
