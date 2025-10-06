const Footer = () => {
    return (
        <div className='bg-slate-800/80 backdrop-blur-lg border-t border-slate-700/50 py-10'>
            <div className='container px-4 py-8 mx-auto flex sm:flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-300 text-center'>
                    © 2025 MERN Hotel Booking. All rights reserved.
                </p>
                <span className='text-gray-300 flex flex-row gap-5'>
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
