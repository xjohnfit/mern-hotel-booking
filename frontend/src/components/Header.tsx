import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { verifyToken } = useAppContext();

    useEffect(() => {
        verifyToken().then(isLoggedIn => setIsLoggedIn(isLoggedIn));
    }, [verifyToken]);

    return (
        <div className='bg-slate-800/80 backdrop-blur-lg border-b border-slate-700/50 py-6'>
            <div className='container mx-auto flex justify-between px-4'>
                <span className='flex items-center sm:text-xl md:text-3xl text-gray-100 font-bold tracking-tight'>
                    <Link
                        to='/'
                        className='hover:text-indigo-400 transition-colors duration-300'>
                        MERN Hotel Booking
                    </Link>
                </span>
                <span className='flex space-x-2'>
                    {isLoggedIn ? (
                        <>
                            <Link
                                to='/my-bookings'
                                className='flex items-center text-slate-800 px-4 py-2 font-semibold bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                My Bookings
                            </Link>
                            <Link
                                to='/my-hotels'
                                className='flex items-center text-slate-800 px-4 py-2 font-semibold bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                My Hotels
                            </Link>
                            <Link
                                to='/logout'
                                className='flex items-center text-slate-800 px-4 py-2 font-semibold bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                Log-Out
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to='/sign-in'
                                className='flex items-center text-slate-800 px-4 py-2 font-semibold bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                Sign In
                            </Link>
                            <Link
                                to='/sign-up'
                                className='flex items-center text-slate-800 px-4 py-2 font-semibold bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
                                Sign Up
                            </Link>
                        </>
                    )}
                </span>
            </div>
        </div>
    );
};
export default Header;
