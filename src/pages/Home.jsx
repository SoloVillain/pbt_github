import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-2">👥 Tim Kami</h1>
      <p className="text-blue-200 mb-10">Klik untuk melihat profil anggota tim</p>
      <div className="flex flex-col gap-4 w-64">
       <Link to="/akbar"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 text-center shadow-lg transition">
          Muhammad Addia Prasetyo Akbar (Ketua) 
        </Link> 
        <Link to="/ridhwan"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 text-center shadow-lg transition">
          Ridhwan Purwahdani (Anggota) 
        </Link>
        <Link to="/calvin"
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 text-center shadow-lg transition">
          Calvin Dicki Maulana Putra (Anggota) 
        </Link>
      </div>
    </div>
  )
}

export default Home