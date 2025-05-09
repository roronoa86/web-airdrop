import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Tambah() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama: '', gambar: '', link: '', twitter: '', discord: '', chain: '', funding: '', catatan: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const data = JSON.parse(localStorage.getItem('garapan') || '[]');
    data.push({ ...form, done: false });
    localStorage.setItem('garapan', JSON.stringify(data));
    router.push('/dashboard');
  };

  return (
    <div className="container">
      <h1>Tambah Garapan</h1>
      <input name="nama" placeholder="Nama" onChange={handleChange} />
      <input name="gambar" placeholder="Link Gambar" onChange={handleChange} />
      <input name="link" placeholder="Link Garapan" onChange={handleChange} />
      <input name="twitter" placeholder="Link Twitter" onChange={handleChange} />
      <input name="discord" placeholder="Link Discord" onChange={handleChange} />
      <input name="chain" placeholder="Chain (Ethereum, BNB, dll)" onChange={handleChange} />
      <input name="funding" placeholder="Funding" onChange={handleChange} />
      <textarea name="catatan" placeholder="Catatan" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Simpan</button>
    </div>
  );
}
