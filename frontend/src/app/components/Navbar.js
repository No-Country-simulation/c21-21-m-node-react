"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
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
        { label: 'Home', to: '/' },
        { label: 'Proyectos', to: '/projects' },
    ];

    return (
        <header className="bg-customBlue">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <h1 className='font-bold text-xl text-customLightgray'>BOOSTUP</h1>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
                            <path strokeLinecap="round" className="stroke-customLightgray" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Button>
                </div>
                <div className="hidden lg:flex lg:justify-end lg:gap-x-12">
                    {
                        menuItems.map((item) => (
                            <Link key={item.label} href={item.to} className="text-md font-semibold leading-6 text-customLightgray">
                                {item.label}
                            </Link>
                        ))
                    }
                    <Button onClick={openModal} className="text-md font-semibold leading-6 text-customLightgray">Acceder</Button>
                </div>
            </nav>

            {/* Menú en mobile */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10 bg-black/30"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <h1 className='font-bold text-xl text-gray-900'>BOOSTUP</h1>
                        </Link>
                        <Button type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Button onClick={openModal} className="text-md font-semibold leading-6">Acceder</Button>
                                {
                                    menuItems.map((item) => (
                                        <Link key={item.label} href={item.to}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900">
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-1">
                        <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
                            <Button onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold">
                                &times;
                            </Button>
                            <h2 className="text-lg font-bold mb-4">Inicio de sesión</h2>
                            <hr className="border-gray-300 mb-4" />
                            <p className="mb-4 text-gray-600 text-sm">
                                Selecciona el rol con el que quieres ingresar. Si es primera vez, el registro se hará automático.
                            </p>
                            <div className="flex flex-col space-y-4">
                                <Button
                                    onClick={() => signIn('google')}
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                    Emprendedor con Google
                                </Button>
                                <Button
                                    onClick={() => signIn('google')}
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
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
