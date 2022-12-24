import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signUp } = useContext(AuthContext)
    const [errorMessage, setErrorMesage] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";


    const handleLogin = data => {
        console.log(data);
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user
                if (user.uid) {
                    toast.success('login succesfully')
                    navigate(from, { replace: true })
                }
            })
            .catch(err => {
                console.error(err);
                if (err) {
                    setErrorMesage('Enter correct details.')
                }
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 bg-[#F5F5F5] p-6 rounded-lg'>
                <p className='text-xl font-semibold mt-16'>Login</p>
                <div className='epilogue font-bold mt-2 text-3xl'>
                    <h1 >Please enter your</h1>
                    <h1>details</h1>
                </div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="text" {...register("email")} placeholder="Type your Email here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Type your password here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {errorMessage &&
                        <>
                            <div className='flex justify-center items-center bg-[#EB5757] h-16 mt-4 rounded-lg w-full max-w-xs'>
                                <p>{errorMessage}</p>
                            </div>
                        </>
                    }
                    <input style={{ backgroundColor: '#336699' }} className='w-full btn mt-6 max-w-xs' value='Login' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;