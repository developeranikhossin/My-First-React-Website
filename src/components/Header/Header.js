import React from 'react';
// import BusinessInfo from '../BusinessInfo/BusinessInfo';

import HeaderMain from '../HeaderMain/HeaderMain';
import Home from '../Home/Home';
import './Header.css'


const Header = () => {
    return (
        <div className='Header-container'>
            <Home></Home>
            <HeaderMain></HeaderMain>
            {/* <BusinessInfo></BusinessInfo> */}
        </div>
    );
};

export default Header;