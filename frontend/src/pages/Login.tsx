const Login = () => {
    return (
        <div className='flex justify-center items-center p-4'>
            <div className='glass-form max-w-md w-full mx-4'>
                <h2 className='text-2xl font-bold text-center mb-8 text-gray-100'>
                    Login
                </h2>
                <form className='space-y-6'>
                    <div className='flex flex-col'>
                        <label className='glass-label'>Email Address</label>
                        <input
                            type='email'
                            required
                            className='glass-input'
                            placeholder='Enter your email'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='glass-label'>Password</label>
                        <input
                            type='password'
                            required
                            className='glass-input'
                            placeholder='Enter you password'
                        />
                    </div>

                    <button className='w-full glass-input bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold hover:from-indigo-700 hover:to-purple-800 border-0 mt-8 shadow-lg hover:shadow-xl transition-all duration-300'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;
