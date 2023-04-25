import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const logOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => console.error(error))
    }

    console.log(user)
    return (
        <div>
            <div className="navbar bg-blue-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/orders'>Orders</Link></li>
                            <p>{user?.displayName}</p>
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white items-center">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <p>{user?.email}</p>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <button className="btn btn-sm" onClick={logOut}>Sign Out</button>
                        : <button className="btn btn-sm"><Link to='/login'>Login</Link></button>}
                </div>
            </div>
        </div>
    );
};

export default Header;