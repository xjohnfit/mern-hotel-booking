const Footer = () => {
    return (
        <div className='bg-slate-800/80 backdrop-blur-lg border-t border-slate-700/50 py-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <p className='text-gray-300'>
                    © 2025 MERN Hotel Booking. All rights reserved.
                </p>
                <span className='text-gray-300 flex flex-col space-y-1'>
                    <p className='hover:text-indigo-400 cursor-pointer transition-colors duration-300'>
                        Privacy Policy
                    </p>
                    <p className='hover:text-indigo-400 cursor-pointer transition-colors duration-300'>
                        Terms of Service
                    </p>
                </span>
            </div>
        </div>
    );
};
export default Footer;
