"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";


const Navbar = () => {
       const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    console.log(session, user, isPending);
    
    return (

        <div className='container flex justify-between mx-auto gap-4 mt-10'>
            <div className="flex gap-2 items-center">
                <Image
                        src={"/hasan.png"}
                        alt="logo"
                        loading="eager"
                        width={100}
                        height={80}
                        className="object-cover h-auto w-auto"
                    />
            </div>
            <ul className="flex items-center gap-5 text-sm font-semibold">
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/all-tiles-card"}>All Tiles</NavLink>
                </li>
                <li>
                    <NavLink href={"/profile"}>Profile</NavLink>
                </li>
            </ul>


            {isPending ? (<span className="loading loading-spinner text-error"></span>
            ) : user ? (
                <div className='flex items-center gap-2'>
                    <h2>Hello {user.name}</h2>
                    <Image src={user?.image || userAvatar} alt="User avatar" width={40} height={40}></Image>
                    <button className='btn btn-secondary' onClick={async () => await authClient.signOut()}>Logout</button>
                </div>) : (

                <button className='btn btn-secondary text-white'>
                    <Link href={"/login"}>Login</Link>
                </button>
            )}
        </div>
        // <div className="border-b px-2 mb-10">
        //     <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        //         <div className="flex gap-2 items-center">
        //             <Image
        //                 src={"/hasan.png"}
        //                 alt="logo"
        //                 loading="eager"
        //                 width={100}
        //                 height={60}
        //                 className="object-cover h-auto w-auto"
        //             />

        //         </div>

        //         <ul className="flex items-center gap-5 text-sm font-semibold">
        //             <li>
        //                 <Link href={"/"}>Home</Link>
        //             </li>
        //             <li>
        //                 <Link href={"/all-tiles-card"}>All Tiles</Link>
        //             </li>
        //             <li>
        //                 <Link href={"/profile"}>Profile</Link>
        //             </li>
        //         </ul>

        //         <div className="flex gap-8">
        //             <ul className="flex items-center gap-8 text-sm">
        //                 <li>
        //                     <Link href={"/signup"}>SignUp</Link>
        //                 </li>
        //                 <li>
        //                     <Link href={"/signin"}>SignIn</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
    );
};

export default Navbar;