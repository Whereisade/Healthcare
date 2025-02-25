'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('accessToken'); // Get stored token
      if (!token) {
        router.push('./login'); // Redirect if no token
        return;
      }

      try {
        const response = await fetch('https://healthapi-quzq.onrender.com/auth/users/me/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Welcome, {user?.email}
        </h1>
        <p className="text-center mt-2 text-gray-600">
          {user?.role === 'doctor' ? 'Doctor Dashboard' : 'Patient Dashboard'}
        </p>

        {/* Doctor or Patient-Specific Content */}
        {user?.role === 'doctor' ? (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Doctor Features</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>View Appointments</li>
              <li>Manage Patients</li>
              <li>Write Blog Posts</li>
            </ul>
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Patient Features</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Book an Appointment</li>
              <li>View Medical Records</li>
              <li>Read Health Blog</li>
            </ul>
          </div>
        )}

        {/* Logout Button */}
        <button
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            router.push('./login');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
