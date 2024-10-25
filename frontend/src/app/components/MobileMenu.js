"use client"
import Link from 'next/link';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import { useUserContext } from '../contexts/UserContext';
import { signOut } from 'next-auth/react'; 
import Cookies from 'js-cookie';

const MobileMenu = ({ isOpen, toggleMenu, menuItems, openLoginModal }) => {
    const { user } = useUserContext(); 
   
    const logout = async () => {
        Cookies.removeItem('user');
        Cookies.remove('token');
        await signOut();
        toggleMenu();
    };

    return (
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10 bg-customGray"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full bg-customWhite px-5 py-6 sm:max-w-sm sm:ring-1 sm:ring-customBlack">
                <div className="flex items-center justify-between">
                    <div className="flex items-center"> 
                        {
                            user && (
                                <>
                                    <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8 text-customBlack" />
                                    <div className="ml-3">
                                        <span className="font-semibold">{user.name}</span>
                                        <div className="text-sm text-gray-500">{user?.role 
                                            ? user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase() 
                                            : "Sin rol asignado"}
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
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
                <div className="mt-6 flow-root">
                    <div className="-my-6">
                        <div className="space-y-2 py-6">
                            {
                                menuItems.map((item) => (
                                    <Link key={item.label} href={item.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base 
                                            font-semibold leading-7 text-customblack">
                                            {item.label}
                                    </Link>
                                ))
                            }
                            {
                                user ? (
                                    <>
                                        <Link href="/dashboard" className="-mx-3 block rounded-lg 
                                            px-3 py-2 text-base font-semibold leading-7 text-customblack">
                                            Dashboard
                                        </Link>
                                        <Button 
                                            onClick={logout} 
                                            className="-mx-3 block w-full text-left 
                                                rounded-lg px-3 py-2 text-base font-semibold leading-7 
                                                text-customblack">
                                                Logout
                                        </Button>
                                    </>
                                ) : (
                                    <div className='pt-5'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
