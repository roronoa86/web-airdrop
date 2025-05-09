import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!username) return alert('Masukkan username');
    localStorage.setItem('username', username);
    localStorage.setItem('garapan', JSON.stringify([]));
    router.push('/dashboard');
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Masuk</button>
    </div>
  );
}
