"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Image from 'next/image';
// import { signIn } from 'next-auth/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const menuItems = [
        { label: 'Inicio', to: '/' },
        { label: 'Proyectos', to: '/projects' },
        { label: 'Nosotros', to: '/aboutUs' },
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
                    <Button onClick={openModal} className="text-md font-semibold leading-6 text-customWhite bg-customGreen pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray hover:border-2 hover:border-customGreen hover:pt-0 hover:pb-0 hover:pl-3.5 hover:pr-3.5">Acceder</Button>
                </div>
            </nav>

            {/* Menú en mobile */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10 bg-customGray"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-customWhite px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-customBlack">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <h1 className='font-bold text-xl text-customBlack'>BOOSTUP</h1>
                        </Link>
                        <Button type="button"
                            className="-m-2.5 rounded-md p-2.5 text-customGray"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">X</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-customBlack">
                            <div className="space-y-2 py-6">
                                <Button onClick={openModal} className="text-md font-semibold leading-6">Acceder</Button>
                                {
                                    menuItems.map((item) => (
                                        <Link key={item.label} href={item.to}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-customblack">
                                            {item.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {
                showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-customBlack bg-opacity-50 px-1">
                        <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
                            <Button onClick={closeModal}
                                className="absolute top-2 right-2 text-customGray hover:text-customBlack text-2xl font-bold">
                                &times;
                            </Button>
                            <h2 className="text-lg font-bold mb-4">Inicio de sesión</h2>
                            <hr className="border-customWhite mb-4" />
                            <p className="mb-4 text-customGray text-sm">
                                Selecciona el rol con el que quieres ingresar. Si es primera vez, el registro se hará automático.
                            </p>
                            <div className="flex flex-col space-y-4">
                                <Button
                                    onClick={() => signIn('google')}
                                    className="w-full px-4 py-2 bg-customGreen text-customWhite rounded hover:bg-customGreen transition">
                                    Emprendedor con Google
                                </Button>
                                <Button
                                    onClick={() => signIn('google')}
                                    className="w-full px-4 py-2 bg-customGreen text-customWhite rounded hover:bg-customGreen transition">
                                    Inversor con Google
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
};

export default Navbar;
