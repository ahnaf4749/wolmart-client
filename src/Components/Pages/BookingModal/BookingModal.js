import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookingModal = ({ product, refetch, setProduct }) => {

    const { user } = useContext(AuthContext)

    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const userName = form.name.value;
        const phone = form.phone.value;




        const booking = {
            BuyerName: userName,
            product: product?.name,
            email: user?.email,
            phone,
            price: product?.price,
            image: product?.image
        }


        fetch('https://y-gamma-blond.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log('sagor');
                    setProduct(null)
                    toast.success('booking succesfully')
                    form.reset()
                    refetch()
                }
            })
            .catch(err => console.error(err))
    }
    // const handleClose = () => {
    //     setProduct(null)
    // }

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <div>
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='name' type="text" readOnly placeholder="Your Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your email</span>
                            </label>
                            <input name='email' type="email" readOnly placeholder="Your Email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product price</span>
                            </label>
                            <input name='email' type="price" readOnly placeholder="Your Price" defaultValue={product?.price} disabled className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Your phone number</span>
                            </label>
                            <input name='phone' type="text" placeholder="Your Phon Number" className="input input-bordered w-full" required />
                        </div>
                        <input style={{ backgroundColor: '#336699' }} className='btn w-full mt-3' type='submit' value='Submit'></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;