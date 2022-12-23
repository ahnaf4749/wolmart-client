import React from 'react';
import Home from '../Home/Home';
import NewProducts from '../NewProduct/NewProducts';
import Products from '../Products/Products';
import Support from '../Support/Support';

const AllHomes = () => {
    return (
        <div>
            <Home></Home>
            <Support></Support>
            <NewProducts></NewProducts>
            <Products></Products>
        </div>
    );
};

export default AllHomes; 