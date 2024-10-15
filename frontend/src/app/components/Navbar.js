"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import Modal from './Modal';
import Auth from './Auth';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isLogin, setIsLogin] = useState(true);

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

    const menuItems = [
        { label: 'Inicio', to: '/' },
        { label: 'Proyectos', to: '/projects' },
        { label: 'Nosotros', to: '/about-us' },
    ];

    return (
        <header className="bg-customGray">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            src="/logo.png"
                            alt="BOOSTUP"
                            width={100}
                            height={100}
                            className="h-8 w-auto"
                        />
                    </Link>

                </div>
                <div className="flex lg:hidden">
                    <Button type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-customWhite"
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
                            <path strokeLinecap="round" className="stroke-customWhite" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Button>
                </div>
                <div className="hidden lg:flex lg:justify-end lg:gap-x-12">
                    {
                        menuItems.map((item) => (
                            <Link key={item.label} href={item.to} className="text-md font-semibold leading-6 text-customWhite p-1 hover:text-customGreen">
                                {item.label}
                            </Link>
                        ))
                    }
                    <Button
                        onClick={openLoginModal}
                        className="text-md font-semibold leading-6 text-customWhite bg-customGreen 
                            pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray 
                            hover:border-2 hover:border-customGreen hover:pt-0 hover:pb-0 hover:pl-3.5 
                            hover:pr-3.5">
                            Iniciar sesión
                    </Button>
                    <Button
                        onClick={openRegisterModal}
                        className="text-md font-semibold leading-6 text-customWhite bg-customGreen 
                            pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray 
                            hover:border-2 hover:border-customGreen hover:pt-0 hover:pb-0 hover:pl-3.5 
                            hover:pr-3.5 -ml-10">
                            Crear cuenta
                    </Button>
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
