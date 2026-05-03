'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';
import { toast } from 'react-toastify';


const LoginPage = () => {

const {register, handleSubmit, watch, formState: {errors}} = useForm()

    const[isShowPassword, setIsShowPassword] = useState(false);


const handleLoginFunc = async (data)=>{
    // e.preventDefault()
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
// e.preventDefault();
// const email = e.target.email.value;
// const password = e.target.password.value;
console.log(res, error);

   if (error) {
            toast.error(error.message)
        }

        if (res) {
            toast.success("Signin Successful")
        }
}

console.log(watch ("email"));
console.log(watch ("password"));
    return (
        <div className=' container mx-auto min-h-[80vh] flex justify-center items-center  mt-8'>
            <div className=' p-10 rounded-xl shadow-2xl'>
                <h2 className='font-bold text-3xl text-center mb-4'>Login your Account</h2>


                <form className=' space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" 
                        className="input"
                        placeholder="Type here email" 
                        {...register("email", 
                        {required: "Email field is required"})}/>
                        {errors.email && <p className=' text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                        type={isShowPassword ? "text" : "password"} className="input" placeholder="Type here password"
                        {...register("password", {required: "Password field is required"})} />

                        <span className=' absolute right-2 top-4 cursor-pointer text-lg' onClick={()=> setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <RiEyeCloseLine />}
                        </span>

                        {errors.password && <p className=' text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                <p className=' text-center mt-4'>Don't have an account? <Link href={"/register"} className=' text-red-500 font-semibold'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;