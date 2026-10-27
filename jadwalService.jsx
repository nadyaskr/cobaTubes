import React, { useState } from 'react';

export default function JadwalService() {
  const [daftarJadwal, setDaftarJadwal] = useState([
    { id: 1, kendaraan: 'Honda Beat', tanggal: '2026-10-28', jenis: 'Service Rutin & Ganti Oli' },
    { id: 2, kendaraan: 'Yamaha NMAX', tanggal: '2026-10-30', jenis: 'Cek Rem & Tune Up' }
  ]);

  const [form, setForm] = useState({ kendaraan: '', tanggal: '', jenis: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.kendaraan || !form.tanggal) return;
    setDaftarJadwal([...daftarJadwal, { id: Date.now(), ...form }]);
    setForm({ kendaraan: '', tanggal: '', jenis: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Jadwal Service Kendaraan</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input 
          placeholder="Nama Kendaraan / Plat" 
          value={form.kendaraan} 
          onChange={(e) => setForm({ ...form, kendaraan: e.target.value })} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input 
          type="date" 
          value={form.tanggal} 
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input 
          placeholder="Jenis Service" 
          value={form.jenis} 
          onChange={(e) => setForm({ ...form, jenis: e.target.value })} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 15px' }}>Tambah Jadwal</button>
      </form>

      <ul>
        {daftarJadwal.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <strong>{item.kendaraan}</strong> - {item.tanggal} ({item.jenis})
          </li>
        ))}
      </ul>
    </div>
  );
}