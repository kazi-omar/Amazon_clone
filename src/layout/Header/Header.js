import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase/firebase';


function Header() {

    const [{ basket, user, profile }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/" className='header_link'>
                <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                {/* //!only redirect to login page if nouser */}

                <Link to={!user && '/login'} className='header_link'>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">Hello! {!user ? 'Guest' : profile ? profile?.userName : user?.email}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/orders' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& orders</span>
                    </div>
                </Link>

                <Link to="/profile" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Profile</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Try</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className='header_link'>
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div >
    )
}

export default Header
