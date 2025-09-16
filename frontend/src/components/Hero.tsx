const Hero = () => {
    return (
        <div className=' pb-16 pt-8 relative overflow-hidden'>
            <div className='absolute inset-0'></div>
            <div className='container mx-auto flex flex-col gap-4 relative z-10'>
                <h1 className='text-5xl font-bold leading-tight bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent'>
                    Find your dream hotel
                </h1>
                <h2 className='text-2xl text-gray-300 font-light'>
                    Search and book from thousands of hotels worldwide
                </h2>
            </div>
        </div>
    );
};
export default Hero;
