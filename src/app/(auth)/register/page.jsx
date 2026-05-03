'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaGithub, FaGoogle } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';


const RegisterPage = () => {

const handleGoogleSignin = async()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data, "google");
    }
    const handleGithubSignin = async()=>{
        const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data, "github");
    }




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
            toast.error(error.message)
        }

        if (res) {
            toast.success("SignUp Successful")
        }
    };


    return (
        <div className=' container mx-auto min-h-[80vh] flex justify-center items-center  mt-10'>
            <div className=' p-10 shadow-2xl rounded-xl '>
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
                {/* google & Github */}
                   <div>
                            <div className='flex flex-col gap-2 mt-5'>
                                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}><FaGoogle />
                                    Login with Google</button>
                                <button className='btn border-zinc-500 ' onClick={handleGithubSignin}><FaGithub />
                                    Login with github</button>
                            </div>
                        </div>

            </div>
        </div>
    );
};

export default RegisterPage;