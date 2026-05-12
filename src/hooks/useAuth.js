import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return {
    logout: () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      router.push('/login');
    }
  };
}
