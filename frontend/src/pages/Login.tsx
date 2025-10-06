import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
    email: string;
    password: string;
}

const Login = () => {
    const { showToast } = useAppContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.email) {
            return showToast({ message: 'Email is required', type: 'error' });
        }
        if (!formData.password) {
            return showToast({ message: 'Password is required', type: 'error' });
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            showToast({ message: data.message, type: 'success' });
            setFormData({ email: "", password: "" });
            navigate('/');
        } catch (error) {
            showToast({ message: 'Login failed', type: 'error' });
            setFormData({ email: "", password: "" });
        }

    }

    return (
        <div className='flex
                        justify-center
                        items-center
                        p-4'
        >
            <div className='glass-form max-w-md w-full mx-4'>
                <h2 className='text-2xl font-bold text-center mb-8 text-gray-100'>
                    Login
                </h2>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label className='glass-label'>Email Address</label>
                        <input
                            type='email'
                            className='glass-input'
                            placeholder='Enter your email'
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='glass-label'>Password</label>
                        <input
                            type='password'
                            className='glass-input'
                            placeholder='Enter your password'
                            autoComplete="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button 
                        type="submit"
                            className='
                                w-full 
                                glass-input 
                                bg-gradient-to-r 
                                from-indigo-600 
                                to-purple-700 
                                text-white 
                                hover:from-indigo-700 
                                hover:to-purple-800 
                                font-semibold 
                                border-0 
                                mt-8 
                                shadow-lg 
                                hover:shadow-xl 
                                transition-all 
                                duration-300'
                            >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;
