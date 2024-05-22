import React, { useState, useEffect } from 'react';
import { Navbar, IconButton, Button } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg';

const Navigasi = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar className={`bg-white p-4 rounded-none top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-opacity-60 shadow-md' : 'bg-opacity-100'}`}>
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={Logo} alt="My Application" className="h-8" />
                </Link>
                <IconButton
                    variant="text"
                    className="lg:hidden"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <XMarkIcon className="h-6 w-6 text-black" />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-black" />
                    )}
                </IconButton>
                <div className={`lg:flex hidden space-x-4 items-center`}>
                    <Link to="/" className="text-black font-semibold hover:underline  hover:text-[#F84E45] active:text-[#F84E45]">Beranda</Link>
                    <Link to="/news" className="text-black  font-semibold hover:underline hover:text-[#F84E45] active:text-[#F84E45]">Berita</Link>
                    <Link to="/scanning_images" className="text-black font-semibold hover:underline hover:text-[#F84E45] active:text-[#F84E45]">Scanning</Link>
                    <Link to="/history" className="text-black font-semibold hover:underline hover:text-[#F84E45] active:text-[#F84E45]">Riwayat</Link>
                    <Link to="/authentication" className="active:text-[#F84E45]">
                        <Button className=" font-semibold hover:underline bg-[#F84E45]">
                                Masuk
                        </Button>
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden mt-4 space-y-2">
                    <Link to="/" className="block text-black hover:text-[#F84E45] active:text-[#F84E45]">Beranda</Link>
                    <Link to="/news" className="block text-black hover:text-[#F84E45] active:text-[#F84E45]">Berita</Link>
                    <Link to="/scanning_images" className="block text-black hover:text-[#F84E45] active:text-[#F84E45]">Scanning</Link>
                    <Link to="/history" className="block text-black hover:text-[#F84E45] active:text-[#F84E45]">Riwayat</Link>
                    <Button className="w-full bg-[#F84E45]">
                        <Link to="/login" className="block w-full  active:text-[#F84E45]">
                            Masuk
                        </Link>
                    </Button>
                </div>
            )}
        </Navbar>
    );
};

export default Navigasi;
