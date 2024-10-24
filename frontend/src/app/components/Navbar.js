"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import Modal from './Modal';
import Auth from './Auth';
import MobileMenu from './MobileMenu';
import { useUserContext } from '../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'next-auth/react';

const Navbar = () => {
    const { user } = useUserContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setModalTitle(isLogin ? 'Crear cuenta' : 'Iniciar sesión');
    };

    const openModal = (title, isLogin) => {
        setModalTitle(title);
        setIsLogin(isLogin);
        setIsModalOpen(true);
    };

    const openLoginModal = () => openModal('Iniciar sesión', true);
    const openRegisterModal = () => openModal('Crear cuenta', false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const logout = async () => {
        localStorage.removeItem('user');
        await signOut();
        setIsDropdownOpen(false);
    };

    const menuItems = [
        { label: 'Inicio', to: '/' },
        { label: 'Proyectos', to: '/projects' },
        { label: 'Nosotros', to: '/about-us' },
    ];

    // refactorizar
    return (
        <header className="bg-customGray">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global" style={{ height: '80px' }}>
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            src="/logo.png"
                            alt="BOOSTUP"
                            width={100}
                            height={100}
                            className="h-6 w-auto"
                        />
                    </Link>

                </div>
                <div className="flex lg:hidden">
                    {
                        user && (
                            <div className="flex items-center mr-2">
                                <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6 text-customWhite" />
                            </div>
                        )
                    }
                    <Button type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md
                            p-2.5 text-customWhite"
                        onClick={toggleMenu}>
                        <span className="sr-only">Abrir</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" className="stroke-customWhite"
                                strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Button>
                </div>
                <div className="hidden lg:flex lg:justify-end lg:gap-x-12">
                    {
                        menuItems.map((item) => (
                            <Link key={item.label} href={item.to} className="text-md font-semibold
                                leading-6 text-customWhite p-1 hover:text-customGreen">
                                {item.label}
                            </Link>
                        ))
                    }
                    {
                        user ? (
                            <div className="relative inline-block text-left">
                                <div className="flex items-center cursor-pointer"
                                    onClick={handleDropdownToggle}>
                                    <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8 
                                        text-customWhite" />
                                    <div className="ml-2 text-md font-semibold leading-6 text-customWhite">
                                        <span>{user.email}</span>
                                        <div className="text-sm text-gray-300">{user.role}</div>
                                    </div>
                                </div>
                                {
                                    isDropdownOpen && (
                                        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md 
                                            bg-white shadow-lg">
                                            <div className="py-1">
                                                <Link href="/dashboard" className="block px-4 py-2 
                                                    text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setIsDropdownOpen(false)}>
                                                    Dashboard
                                                </Link>
                                                <Button
                                                    onClick={logout}
                                                    className="block w-full text-left px-4 py-2 
                                                        text-sm text-gray-700 hover:bg-gray-100">
                                                    Logout
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ) : (
                            <>
                                <Button onClick={openLoginModal}
                                    className="text-md font-semibold leading-6 text-customWhite bg-customGreen 
                                        pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray 
                                        hover:border-2 hover:border-customGreen hover:pt-0 hover:pb-0 hover:pl-3.5 
                                        hover:pr-3.5">
                                    Iniciar sesión
                                </Button>
                                <Button onClick={openRegisterModal}
                                    className="text-md font-semibold leading-6 text-customWhite bg-customGreen 
                                        pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray 
                                        hover:border-2 hover:border-customGreen hover:pt-0 hover:pb-0 hover:pl-3.5 
                                        hover:pr-3.5 -ml-10">
                                    Crear cuenta
                                </Button>
                            </>
                        )
                    }
                </div>
            </nav>
            <MobileMenu
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                menuItems={menuItems}
                openLoginModal={openLoginModal}
                openRegisterModal={openRegisterModal}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
                size='max-w-md max-h-80'>
                <Auth isLogin={isLogin} toggleForm={toggleForm} />
            </Modal>
        </header>
    );
};

export default Navbar;
