import React from 'react';

const Support = () => {

    const supports = [
        // {
        //     img1: 'https://i.ibb.co/FsWg9q2/original-79302dac2eb04d0f9aecac39e67b596b.webp',
        //     tittle: 'Free Shipping & Returns',
        //     sub_Tittle: "For all orders over $99"
        // },
        {
            img1: 'https://i.ibb.co/fDydm0K/71200.png',
            tittle: 'Secure Payment',
            sub_Tittle: "We ensure secure payment"
        },
        {
            img1: 'https://i.ibb.co/pnvvppx/b358d919b4b098816fa9defb3c1389ba.jpg',
            tittle: 'Money Back Guarantee',
            sub_Tittle: "Any back within 30 days"
        },
        {
            img1: 'https://i.ibb.co/HPK86qR/customer-service-icon-vector-user-260nw-1797094069.webp',
            tittle: 'Customer Support',
            sub_Tittle: "Call or email us 24/7"
        },
    ]


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16 border-2 rounded-sm'>
            {
                supports.map(support =>
                    <div className="card card-side px-3">
                        <figure><img className='h-12' src={support.img1} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="font-semibold text-2xl">{support.tittle}</h2>
                            <p>{support.sub_Tittle}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Support;