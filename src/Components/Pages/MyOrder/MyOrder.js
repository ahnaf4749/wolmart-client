import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyOrder = () => {

    const { user } = useContext(AuthContext);

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`https://y-gamma-blond.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
    })

    const handleDelete = booking => {
        // console.log(user._id);
        fetch(`https://y-gamma-blond.vercel.app/bookings/${booking._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('delete succesfully')
                }
            })
    }

    return (
        <div className='mt-4'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={booking.image} alt='' />
                                        </div>
                                    </div></td>
                                    <td>{booking.BuyerName}</td>
                                    <td>{booking.product}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button style={{ backgroundColor: '#336699' }} className="btn btn-active  btn-sm">Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span>Paid</span>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDelete(booking)} style={{ backgroundColor: '#336699' }} className="btn btn-sm">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;