<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
import AboutUs from './components/AboutUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ServicesSection from './components/Services';
import JivoChat from './JivoChat';



function Home() {
  return (
    <>
      <div className='h-[3000px]'>
        <Navbar />
        <JivoChat/>
      </div>

    </>
  )
}
export default Home;