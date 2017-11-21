import React from 'react';
import HeaderBar from '../containers/header-bar';
import SideBar from '../containers/side-bar';
import SideContacts from '../containers/side-contact-filter';
import ProductsDisplay from '../containers/products';
require('../../scss/style.scss');

const App = () => (
    <div>

        <HeaderBar/>
        <div className="flex-container">
            <div name="side">
                <SideBar/>
                <SideContacts/>
            </div>
            <div>
                <ProductsDisplay/>
            </div>
        </div>


    </div>
);

export default App;
