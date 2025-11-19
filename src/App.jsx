import DataImage from "./data";
import ExperienceSection from "./component/Experience";
import ContactSection from "./component/ContactSection";
import { listTools, listProyek } from "./data";

function App() {

  return (
    <>
    {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-white/30 w-fit p-4 rounded-2xl">
            <img src="public/assets/Logo Portfolio.png" alt="Logo Portfolio" className="w-10 rounded-md" loading="lazy"/>
            <q>Tomorrow will be more beautiful than today</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Halo, Saya Tsania Ar Rosyida</h1>
          <p className="text-base/loose mb-6 opacity-50">saya memiliki minat yang tinggi pada bidang Programming dan Desain. Terutama dalam pembangunan Website dan Desain seperti Flyer, Paflet, Poster, Banner, Feed Instagram. Saya juga seorang freelancer konten kreator selama 1 tahun lebih. </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="/public/CV-Tsania-Ar-Rosyida.pdf" download="CV-Tsania-Ar-Rosyida.pdf" className="bg-[#5D2F96] p-4 rounded-2xl hover:bg-[#8748D5]">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
      </div>
      {/* Hero Section */}

      {/* Tentang Section */}
        <ExperienceSection />
      {/* Tentang Section */}

      {/* Tools Section*/}
      <div className="tools">
        <h1 className="text-3xl font-bold sm:text-4xl mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"><span className="text-[#5D2F96]"> Tools</span> yang Dipakai</h1>
        <p className="text-base/loose opacity-50 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah tools yang biasa saya gunakan untuk membangun website ataupun desain.</p>
        <div className="tools-box mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border boder-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
      {/* Tools Section */}

      {/* Proyek Section */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-4xl text-center font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang sudah Saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
              </div>
              {/* <div className="mt-8 text-center">
                <a href="#" className="bg-[#5D2F96] p-3 rounded-lg block border border-zinc-600 hover:bg-[#8748D5]">Lihat Detail</a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/* Proyek Section */}

      {/* Kontak Section */}
      <ContactSection/>
      {/* Kontak Section */}
    </>
  )
}

export default App
