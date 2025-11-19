import React from 'react';
// Mengimpor ikon dari library react-icons
import { RiPhoneFill, RiMailFill, RiMapPin2Fill, RiInstagramLine } from "react-icons/ri";

const ContactSection = () => {
    return (
        <section className="bg-zinc-900 text-white py-20 mt-32 px-4 sm:px-6 lg:px-8" id="kontak">
            <div className="container mx-auto">
                {/* Kontainer Grid Utama */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* === Kolom Kiri: Informasi === */}
                    <div className="flex flex-col justify-center">
                        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            Diskusikan Proyek Anda, <span className="text-[#5D2F96]">Kirimkan Pesan!</span>
                        </h2>
                        <p className="mt-6 text-lg text-zinc-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                            Mari terhubung dengan Saya melalui beberapa kontak dan sosial media dibawah ini 
                        </p>

                        {/* Informasi Kontak */}
                        <div className="mt-12 space-y-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                            {/* Telepon */}
                            <a
                                href="https://wa.me/6285733395359"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <div className="bg-[#5D2F96] text-white rounded-full p-3 flex-shrink-0 transition-transform">
                                    <RiPhoneFill className="w-6 h-6" />
                                </div>
                                <p className="text-lg text-white group-hover:text-[#5D2F96] transition-colors">
                                    +62 857-3339-5359
                                </p>
                            </a>
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="bg-[#5D2F96] text-white rounded-full p-3 flex-shrink-0">
                                    <RiMailFill className="w-6 h-6" />
                                </div>
                                <p className="text-lg">tsaniaarosyida@gmail.com</p>
                            </div>
                            {/* Instagram*/}
                            <div className="flex items-center gap-4">
                                <div className="bg-[#5D2F96] text-white rounded-full p-3 flex-shrink-0">
                                    <RiInstagramLine className="w-6 h-6" />
                                </div>
                                <a
                                    href="https://www.instagram.com/tsania_ar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg hover:text-[#5D2F96]  transition-colors"
                                >
                                    @tsania_ar
                                </a>
                            </div>
                            {/* Alamat */}
                            <div className="flex items-center gap-4">
                                <div className="bg-[#5D2F96] text-white rounded-full p-3 flex-shrink-0">
                                    <RiMapPin2Fill className="w-6 h-6" />
                                </div>
                                <p className="text-lg">Kertosono, Kab.Nganjuk</p>
                            </div>
                        </div>
                    </div>

                    {/* === Kolom Kanan: Form === */}
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                        <form action="https://formsubmit.co/tsaniaarosyida@gmail.com" method="POST" className="grid grid-cols-1 gap-6">
                            {/* Nama */}
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-zinc-300">Nama *</label>
                                <input type="text" id="name" name="name" className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="cont. Tsania" required />
                            </div>
                            {/* Email */}
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-300">Email *</label>
                                <input type="email" id="email" name="email" className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="example@gmail.com" required />
                            </div>
                            {/* Pesan */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-zinc-300">Pesan *</label>
                                <textarea id="message" name="message" rows="4" className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="Ketik Pesan..."></textarea>
                            </div>
                            {/* Tombol Kirim */}
                            <div className="sm:col-span-2">
                                <button type="submit" className="w-full text-white bg-[#5D2F96] hover:bg-[#8748D5] focus:ring-4 focus:outline-none focus:ring-[#5D2F96] font-semibold rounded-lg text-sm px-5 py-3 text-center">
                                    Kirim Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;