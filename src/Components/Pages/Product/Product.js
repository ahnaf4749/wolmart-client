import React from 'react';

const Product = ({ product, setProduct }) => {

    const { image, name, price } = product;
    return (
        <div>
            <div className="card card-compact w-80 h-80 bg-base-100">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <p className='text-xl font-bold '>Price: <span className='text-orange-600'>${price}</span></p>
                        <label htmlFor="my-modal-3"
                            onClick={() => setProduct(product)}
                            className="btn btn-ghost">Add to cart</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;