"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {

    const socialLinks = [
        { icon: FaFacebook, url: "https://www.facebook.com/"  },
        { icon: FaTwitter, url: "#" },
        { icon: FaGithub, url: "#" },
        { icon: FaLinkedin, url: "#" },
    ];


    return (
        <footer className="border-t border-gray-300 text-center py-4 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold">HASAN TILES GALLERY</h2>
                    <p className="mt-3 text-sm">
                        Our company has a variety of high-quality domestic and foreign Tiles.
                    </p>
                </div>

                {/* Links */}
                <div className="text-left">
                    <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-red-500">Home</Link></li>
                        <li><Link href="/about" className="hover:text-red-500">About</Link></li>
                        <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-left">
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p>Email: engr.mharif24@gmail.com</p>
                    <p>Phone: +880 01811562080</p>
                    <p>Location: Jamirdia, Valuka, Mymensingh, Bangladesh</p>

                    {/* Social Icons */}

                    <div className="flex gap-4 mt-4 text-xl">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a key={index} href={social.url} className="hover:text-green-600">
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                    {/* <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-green-600"><FaFacebook /></a>
            <a href="#" className="hover:text-green-600"><FaTwitter /></a>
            <a href="#" className="hover:text-green-600"><FaGithub /></a>
            <a href="#" className="hover:text-green-600"><FaLinkedin /></a>
          </div> */}
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-300 text-center py-4 text-sm">
                © {new Date().getFullYear()} MyWebsite. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;