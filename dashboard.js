import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [username, setUsername] = useState('');
  const [garapan, setGarapan] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('username');
    setUsername(user);
    const data = JSON.parse(localStorage.getItem('garapan') || '[]');
    setGarapan(data);
  }, []);

  const toggleCeklis = (index) => {
    const updated = [...garapan];
    updated[index].done = !updated[index].done;
    setGarapan(updated);
    localStorage.setItem('garapan', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Selamat datang, {username}</h2>
      <Link href="/tambah"><button>Tambah Garapan</button></Link>
      <ul>
        {garapan.map((g, i) => (
          <li key={i}>
            <strong>{g.nama}</strong> ({g.chain})<br />
            <button onClick={() => toggleCeklis(i)}>
              {g.done ? 'Sudah Dikerjakan' : 'Belum Dikerjakan'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
