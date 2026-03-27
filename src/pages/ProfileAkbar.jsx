function ProfileAkbar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-600 h-48 relative">
        <div className="absolute -bottom-16 left-8">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=NamaKamu"
            alt="Foto Profil"
            className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-xl"
          />
        </div>
      </div>

      {/* Konten */}
      <div className="pt-20 px-8 pb-10 max-w-2xl mx-auto">

        {/* Card Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Muhammad Addia Prasetyo Akbar</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              🎓 Kelas D
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              💻 Teknik Informatika
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
              📍 Malang, Jawa Timur
            </span>
          </div>
        </div>

        {/* Card Tentang Diri */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span>📝</span> Tentang Diri
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Halo! Nama saya Muhammad Addia Prasetyo Akbar, mahasiswa Teknologi Informasi di Universitas Brawijaya.
            Saya memiliki ketertarikan di bidang pengembangan web dan teknologi informasi.
            Saat ini aktif mempelajari ReactJS, Tailwind CSS, dan pengelolaan proyek
            menggunakan Git dan GitHub. Saya percaya kolaborasi tim yang baik adalah
            kunci menghasilkan produk berkualitas. Di waktu luang, saya senang
            mengeksplorasi proyek open-source dan mengikuti komunitas developer lokal.
            Saya juga tertarik pada UI/UX design untuk menciptakan antarmuka yang
            menarik dan intuitif. Target ke depan adalah menjadi full-stack developer
            yang mampu membangun aplikasi dari nol hingga deployment secara mandiri.
            Semangat belajar dan pantang menyerah adalah prinsip yang selalu saya pegang.
          </p>
        </div>

      </div>
    </div>
  )
}

export default ProfileAkbar