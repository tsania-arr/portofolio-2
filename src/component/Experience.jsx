import React from 'react';

// Anda bisa membuat ikon ini sebagai komponen terpisah jika mau
const EducationIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5D2F96" className="w-6 h-6">
//     <path d="M12 1.25a.75.75 0 01.75.75v1.258a11.23 11.23 0 017.478 3.535l.915-.915a.75.75 0 111.06 1.06l-.915.915a11.23 11.23 0 013.535 7.478h1.258a.75.75 0 010 1.5h-1.258a11.23 11.23 0 01-3.535 7.478l.915.915a.75.75 0 11-1.06 1.06l-.915-.915a11.23 11.23 0 01-7.478 3.535v1.258a.75.75 0 01-1.5 0v-1.258a11.23 11.23 0 01-7.478-3.535l-.915.915a.75.75 0 11-1.06-1.06l.915-.915A11.23 11.23 0 011.25 12.75H0a.75.75 0 010-1.5h1.25A11.23 11.23 0 014.785 3.772l-.915-.915a.75.75 0 011.06-1.06l.915.915A11.23 11.23 0 0111.25 3.258V2a.75.75 0 01.75-.75zM3.962 12a8.237 8.237 0 002.34 5.812l.18.212.18-.212A8.237 8.237 0 008.998 12a8.237 8.237 0 00-2.338-5.812l-.18-.212-.18.212A8.237 8.237 0 003.962 12zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
//     <path d="M21.65 14.31a8.237 8.237 0 01-5.812-2.34l-.212-.18.212-.18a8.237 8.237 0 015.812-2.338v4.999zM12 3.962a8.237 8.237 0 015.812 2.34l.212.18-.212.18A8.237 8.237 0 0112 8.998a8.237 8.237 0 01-5.812-2.338l-.212-.18.212-.18A8.237 8.237 0 0112 3.962zM3.772 15.015a8.237 8.237 0 012.34-5.812l.18-.212.18.212a8.237 8.237 0 012.338 5.812h-4.999z" />
//   </svg>
<i className="ri-graduation-cap-fill text-center text-3xl text-[#5D2F96] w-8 h-8"></i>
);

const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5D2F96" className="w-8 h-8">
    <path fillRule="evenodd" d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15A2.25 2.25 0 0121.75 4.5v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zm4.5-.75a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zm3.75.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
    <path d="M6.75 9.75a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
  </svg>
);


const ExperienceSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-20 px-4 sm:px-6 lg:px-8" id="tentang">
      <div className="container mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        {/* === Judul Section === */}
        <div className="text-center">
          {/* <p className="text-sm font-semibold uppercase text-[#5D2F96]">- Pendidikan Dan Profesional -</p> */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Pendidikan dan <span className="text-[#5D2F96]"> Pengalaman Profesional</span>
          </h2>
        </div>

        {/* === Kontainer Grid untuk Kartu === */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">

          {/* === Kartu Pendidikan === */}
          <div className="bg-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="bg-white text-zinc-900 rounded-full p-3 flex items-center justify-center">
                <EducationIcon />
              </div>
              <h3 className="text-2xl font-bold">Pendidikan</h3>
            </div>
            
            <div className="mt-8 space-y-8">
              {/* Entri 1 */}
              <div className="flex gap-6">
                <p className="text-zinc-400 text-sm w-28 flex-shrink-0">2021 - 2025</p>
                <div>
                  <h4 className="font-semibold text-lg">Universitas Brawijaya</h4>
                  <p className="text-zinc-400 text-sm mt-1">D3 Sistem Informasi 3.79/4.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* === Kartu Pengalaman Kerja === */}
          <div className="bg-zinc-800 rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="bg-white text-zinc-900 rounded-full p-3 flex items-center justify-center">
                <WorkIcon />
              </div>
              <h3 className="text-2xl font-bold">Pengalaman Profesional</h3>
            </div>
            
            <div className="mt-8 space-y-8">
              {/* Entri 1 */}
              <div className="flex gap-6">
                <p className="text-zinc-400 text-sm w-28 flex-shrink-0">2024 - Sekarang</p>
                <div>
                  <h4 className="font-semibold text-lg">Freelance</h4>
                  <p className="text-zinc-400 text-sm mt-1">Konten Kreator, Copywriter, SEO </p>
                </div>
              </div>
              {/* Entri 2 */}
              <div className="flex gap-6">
                <p className="text-zinc-400 text-sm w-28 flex-shrink-0">Agust 2023 - Des 2023</p>
                <div>
                  <h4 className="font-semibold text-lg">Magang DIGIMEDIA</h4>
                  <h6 className="text-md">Ngasem,Kab. Kediri</h6>
                  <p className="text-zinc-400 text-sm mt-1">Desain Grafis, Talent, Live Streamer</p>
                </div>
              </div>
              {/* Entri 3 */}
              <div className="flex gap-6">
                <p className="text-zinc-400 text-sm w-28 flex-shrink-0">Feb 2023 - Sep 2023</p>
                <div>
                  <h4 className="font-semibold text-lg">Magang Fakultas Vokasi</h4>
                  <h6 className="text-md">Universitas Brawijaya</h6>
                  <p className="text-zinc-400 text-sm mt-1">WEB Desainer dan Developer</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;