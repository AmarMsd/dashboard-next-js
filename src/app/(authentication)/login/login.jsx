'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField/InputField';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Hardcode credentials
  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = 'password123';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        const token = 'authenticated-' + Date.now();
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', username);
        
        document.cookie = `authToken=${token}; path=/; max-age=${24 * 60 * 60}`;
        
        router.push('/');
      } else {
        setError('Username atau password salah');
      }
    } catch (err) {
      setError('Terjadi kesalahan koneksi');
    }
  };

  return (
    <div className="max-w-md w-full bg-[#1e1f1f] rounded-xl shadow-lg px-8 py-12">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-white">HR Management</h2>
      
      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6 text-white">
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

