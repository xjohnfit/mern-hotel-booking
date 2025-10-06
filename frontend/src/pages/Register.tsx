import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom"; 

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register = () => {

    const { showToast } = useAppContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<RegisterFormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if(!formData.firstName) {
            return showToast({ message: 'First name is required', type: 'error' });
        } else if(!formData.lastName) {
            return showToast({ message: 'Last name is required', type: 'error' });
        } else if(!formData.email) {
            return showToast({ message: 'Email is required', type: 'error' });
        } else if(!formData.password) {
            return showToast({ message: 'Password is required', type: 'error' });
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }
            
            showToast({ message: 'Registration successful!', type: 'success' });
            setFormData({ firstName: "", lastName: "", email: "", password: "" });
            navigate('/');
        } catch (error: any) {
            showToast({ message: error.message, type: 'error' });
        }
    }

    return (
        <div className='flex justify-center items-center p-4'>
            <div className='glass-form max-w-md w-full mx-4'>
                <h2 className='text-2xl font-bold text-center mb-8 text-gray-100'>
                    Create Account
                </h2>
                <form onSubmit={submitForm} className='space-y-6'>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='flex flex-col flex-1 min-w-0'>
                            <label className='glass-label'>First Name</label>
                            <input
                                type='text'
                                className='glass-input'
                                placeholder='Enter your first name'
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col flex-1 min-w-0'>
                            <label className='glass-label'>Last Name</label>
                            <input
                                type='text'
                                className='glass-input'
                                placeholder='Enter your last name'
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label className='glass-label'>Email Address</label>
                        <input
                            type='email'
                            className='glass-input'
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='glass-label'>Password</label>
                        <input
                            type='password'
                            className='glass-input'
                            placeholder='Create a password'
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className='w-full glass-input bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold hover:from-indigo-700 hover:to-purple-800 border-0 mt-8 shadow-lg hover:shadow-xl transition-all duration-300'>
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
