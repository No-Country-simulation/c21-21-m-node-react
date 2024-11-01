"use client"
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import RedesSociales from './RedesSociales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import { useUserContext } from '../contexts/UserContext';

const MobileMenu = ({ isOpen, toggleMenu, menuItems, openLoginModal }) => {
    const { user, logout } = useUserContext();

    const dashboardLink = user?.role === 'admin' ? '/dashboard-admin' : '/dashboard';
   
    const handleLogout = () => {
        logout();
        toggleMenu();
    };

    return (
        <>
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">                
                <div className="fixed inset-0 z-10 bg-customGray"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full bg-customWhite px-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-customBlack">
                    <div className="flex items-center justify-between pb-2">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image
                                src="/images/black-logo.webp"
                                alt="BOOSTUP"
                                width={100}
                                height={100}
                                className="h-6 w-auto"
                                priority 
                            />
                        </Link>
                        <Button type="button"
                            className="-m-2.5 rounded-md p-2.5 text-customGray"
                            onClick={toggleMenu}>
                            <span className="sr-only">X</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex-grow">
                            <div className="space-y-3 py-6">
                                {
                                    user && (
                                        <>
                                        <div className='flex items-center'> 
                                            <FontAwesomeIcon icon={faUserCircle} className="fa-2x text-customBlack" />
                                            <div className="ml-3">
                                                <span className="font-semibold">{user.name}</span>
                                                <div className="text-sm text-gray-500">{user?.role 
                                                    ? user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase() 
                                                    : "Sin rol asignado"}
                                                </div>
                                            </div>
                                        </div>
                                            <Link href={dashboardLink} className="-mx-3 block rounded-lg 
                                                px-3 pt-2 font-semibold leading-7 text-customblack">
                                                Dashboard
                                            </Link>
                                            <Button 
                                                onClick={handleLogout} 
                                                className="-mx-3 block w-full text-left 
                                                    rounded-lg px-3 font-semibold leading-7 
                                                    text-customblack">
                                                    Cerrar sesión
                                            </Button>
                                            <hr className="border-t border-customGreen my-4" />
                                        </>
                                    )
                                }
                                {
                                    menuItems.map((item) => (
                                        <Link key={item.label} href={item.to}
                                            className="-mx-3 block rounded-lg px-3
                                                font-semibold leading-7 text-customblack">
                                                {item.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            !user && (
                                <div className='text-center pb-10'>
                                    <Button
                                        onClick={openLoginModal}
                                        className="text-md font-semibold leading-6 text-customWhite bg-customGreen 
                                            pt-1 pb-1 pl-4 pr-4 rounded-full hover:text-customGreen hover:bg-customGray 
                                            hover:border-2 hover:border-customGreen hover:pt-0 hover:pb-0 hover:pl-3.5 
                                            hover:pr-3.5">
                                            Iniciar sesión
                                    </Button>
                                </div>
                            ) 
                        }
                        <div className="pb-5">
                            <RedesSociales />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
