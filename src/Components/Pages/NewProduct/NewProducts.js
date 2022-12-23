import React from 'react';

const NewProducts = () => {

    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-16'>
            <div className='h-52 p-5' style={{ backgroundImage: "url(https://i.ibb.co/NN081Qj/1-1.jpg)", backgroundRepeat: "no-repeat" }}>
                <h3 className='font-bold text-lg'>Get Up to 20%</h3>
                <h1 className='text-2xl font-semibold'>OFF SPORTS OUTFITS <br />COLLECTION</h1>
                <p className='font-semibold'>Starting at <span className='text-orange-600'>$177.00</span></p>
            </div>
            <div className='h-52 p-5' style={{ backgroundImage: "url(https://i.ibb.co/2WzdfsV/1-2.jpg)", backgroundRepeat: "no-repeat" }}>
                <h3 className='font-bold text-lg text-white'>Get Up to 20%</h3>
                <h1 className='text-2xl font-semibold text-white'>OFF SPORTS OUTFITS <br />COLLECTION</h1>
                <p className='font-semibold text-white'>Starting at <span className='text-orange-600'>$177.00</span></p>
            </div>
        </div>
    );
};

export default NewProducts;