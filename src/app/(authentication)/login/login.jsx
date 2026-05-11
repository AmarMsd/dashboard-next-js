'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField/InputField';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        router.push('/dashboard'); 
      } else {
        setError(data.message || 'Username atau password salah');
      }
    } catch (err) {
      setError('Terjadi kesalahan koneksi');
    }
  };

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg px-8 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-8">Portal Admin</h2>
      
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6 ">
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan Username..."
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan Password..."
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
          MASUK
        </button>
      </form>
    </div>
  );
}