'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    user_type: 'patient', // Default role
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Transform formData to match our custom API's expected fields
    const apiData = {
      email: formData.email,
      password: formData.password,
      // Our API expects the 'role' field for user type
      role: formData.user_type,
    };

    try {
      // This is the API endpoint we built and deployed on Render
      const response = await fetch(
        'https://healthapi-quzq.onrender.com/auth/users/register/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // On success, redirect the user to the login page
        router.push('/login');
      } else {
        // Display an error message if the server returned an error
        setError(data.detail || 'Registration failed. Please try again.');
      }
    } catch (err) {
      // If we never hear back from the server (network/CORS issue, etc.)
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1740471284/pexels-oles-kanebckuu-34911-127873_h1scqs.jpg"
        alt="Background"
        fill
        className="object-cover w-full h-full"
        quality={100}
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 w-full h-full" />

      {/* Sign-up form container */}
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow relative z-10">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center text-sm">{error}</div>}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="user_type" className="block text-sm font-medium text-gray-700">
                I am a:
              </label>
              <select
                id="user_type"
                name="user_type"
                required
                className="mt-1 block w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                value={formData.user_type}
                onChange={handleChange}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 text-sm font-medium rounded-md text-white
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
