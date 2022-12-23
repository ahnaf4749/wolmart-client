import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { creatUser, updateUser } = useContext(AuthContext)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const handleSignup = data => {
        console.log(data);
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    toast.success('Congratulations!!! Account created.')
                    setMessage('Congratulations!!! Account created.')

                    const userInfo = {
                        displayName: data.name
                    }

                    updateUser(userInfo)
                        .then(() => {
                            // userCreat(data.name, data.email)

                        })
                        .catch(err => {
                            console.error(err);
                        })

                    navigate('/')
                }
            })
            .catch(error => {
                console.error(error);
            })
        setMessage('')

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 bg-[#F5F5F5] p-6 rounded-lg'>
                <p className='text-xl font-semibold mt-16'>Creat account</p>
                <div className='epilogue font-bold mt-2 text-3xl'>
                    <h1 >Let's get to know</h1>
                    <h1>you better!</h1>
                </div>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs mt-8 ">
                        <label className="label">
                            <span className="label-text font-bold">Your name</span>
                        </label>
                        <input type="name" {...register("name")} placeholder="Type your name here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Type your email here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            // required: 'required',
                            // minLength: { value: 8, message: 'password minimum 8 carectart' },
                            // pattern: { value: /([!@#$%^&*])([a-z])/, message: 'passwors must be strong' }
                        })} placeholder="Type your password here" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    {message &&
                        <>
                            <div className='flex justify-center items-center bg-[#6FCF97] h-16 mt-4 rounded-lg w-full max-w-xs'>
                                <p>{message}</p>
                            </div>
                        </>
                    }
                    <input style={{ backgroundColor: '#336699' }} className='w-full  max-w-xs btn mt-5 font-bold text-white' value='Register' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;