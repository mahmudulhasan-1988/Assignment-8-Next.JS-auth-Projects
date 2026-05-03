'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';


const RegisterPage = () => {

    const { register,
        handleSubmit, watch, formState: { errors } } = useForm()

        const[isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data, "data");
        const { email, name, Photo, password } = data;
        console.log(email, name, Photo, password);
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: Photo,
            callbackURL: "/",
        });
        console.log(res, error);
        if (error) {
            alert(error.message)
        }

        if (res) {
            alert("SignUp Successful")
        }
    };


    return (
        <div className=' container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-8'>
            <div className=' p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Register your Account</h2>


                <form className=' space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" placeholder="Type here Name"
                            {...register("name", { required: "name field is required" })} />
                        {errors.name && <p className=' text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Type here Photo URL"
                            {...register("Photo", { required: "Photo URL field is required" })} />
                        {errors.Photo && <p className=' text-red-500'>{errors.Photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" className="input" placeholder="Type here email"
                            {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className=' text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                         <input type={isShowPassword ? "text" : "password"} className="input" placeholder="Type here password"
                            {...register("password", { required: "Password field is required" })} />

                        <span className=' absolute right-10 top-4 cursor-pointer text-lg' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <RiEyeCloseLine />}
                        </span>

                        {errors.password && <p className=' text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;