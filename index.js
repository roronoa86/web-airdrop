import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) router.push('/login');
    else router.push('/dashboard');
  }, []);
  return <p>Loading...</p>;
}
