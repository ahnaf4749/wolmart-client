import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Product/Product';

const Products = () => {

    const [product, setProduct] = useState(null)

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: [' appoDetails'],
        queryFn: () => fetch(`https://y-gamma-blond.vercel.app/allProducts`)
            .then(res => res.json())
    })

    return (
        <div className='mt-16 flex justify-center items-center'>
            <div className='lg:mr-5'>
                <img className='hidden lg:block md:hidden' src='https://i.ibb.co/n3nj43b/3.jpg' alt='' />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></Product>)
                }
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    refetch={refetch}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;