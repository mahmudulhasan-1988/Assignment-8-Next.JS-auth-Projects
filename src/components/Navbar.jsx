"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b px-2 mb-10">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/hasan.png"}
                        alt="logo"
                        loading="eager"
                        width={100}
                        height={60}
                        className="object-cover h-auto w-auto"
                    />
                   
                </div>

                <ul className="flex items-center gap-5 text-sm font-semibold">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-tiles-card"}>All Tiles</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-8">
                    <ul className="flex items-center gap-8 text-sm">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;