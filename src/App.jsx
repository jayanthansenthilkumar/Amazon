import Laptop from './laptop.jsx'
import laptop1 from '../public/laptop1.jpg'
import laptop2 from '../public/laptop2.jpg'
import laptop3 from '../public/laptop3.jpg'
import laptop4 from '../public/laptop4.jpg'
import laptop5 from '../public/laptop5.jpg'
import laptop6 from '../public/laptop6.jpg'
import laptop7 from '../public/laptop7.jpg'
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar.jsx';
import LaptopHeader from './LaptopHeader.jsx'

function App() {
  return (
  <>
  <div className="header">
    <Header/> 
  </div>
  <Navbar/>
  <LaptopHeader/>
  <Sidebar />
  <Laptop img={laptop1} price={'59,000'} mrp={'1,19,000'} discount={'(20% off)'} color1={'grey'} color2={'black'} color3={'silver'} delivery={'FREE delivery Fri, 25 Jul'} reviews={456} title={'ASUS Zenbook 14, AMD Ryzen AI 5 340, AI PC (AMD Radeon Graphics/16GB RAM/512GB SSD/3K OLED/14/120Hz/Windows 11/M365 Basic (1Year)*/Office Home 2024/Jade Black/1.2 Kg) UM3406KA-PP240WS'} />
  <Laptop img={laptop2} price={'86,231'} mrp={'1,25,890'} discount={'(32% off)'} color1="red" color2="maroon" color3="pink" delivery={'FREE delivery Fri, 25 Jul'} reviews={15} title={'Lenovo IdeaPad Slim 5 AMD Ryzen AI 7 350, Copilot+ AI PC(24GB RAM/1TB SSD/14(35.5cm) WUXGA OLED/AI Now/50TOPS/Win 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.4Kg), 83HX001NIN AI Laptop'} />
  <Laptop img={laptop3} price={'59,110'} mrp={'78,963'} discount={'(25% off)'} color1="blue" color2="navy" color3="skyblue" delivery={'FREE delivery Fri, 25 Jul'} reviews={142} title={'ASUS Vivobook 16,Snapdragon X,Copilot+ AI PC(Qualcomm Adreno iGPU/45TOPS/16GB RAM/512GB SSD/FHD+/16"/Backlit Keyboard/Windows 11/M365 Basic(1Year)*/Office Home 2024/Cool Silver/1.88 kg)X1607QA-MB050WS'} />
  <Laptop img={laptop4} price={'29,990'} mrp={'47,990'} discount={'(38% off)'} color1="green" color2="darkgreen" color3="lime" delivery={'FREE delivery Fri, 25 Jul'} reviews={27} title={'Dell Inspiron 3530, Intel Core i5-1334U, 13th Gen, 16GB RAM, 1TB SSD, FHD, 15.6"/39.62cm, Windows 11, MS Office 24, Silver, 1.62KG, Backlit Keyboard, McAfee 15 Month, Thin & Light Laptop'} />
  <Laptop img={laptop5} price={'57,490'} mrp={'72,598'} discount={'(21% off)'} color1="orange" color2="orangered" color3="gold" delivery={'FREE delivery Fri, 25 Jul'} reviews={18} title={'Acer Aspire Lite, AMD Ryzen 3 7330U Processor, 8 GB RAM, 512 GB SSD, Full HD, 15.6"/39.62cm, Windows 11 Home, Steel Gray, 1.6KG, AL15-41, Metal Body, Premium Thin and Light Laptop'} />
  <Laptop img={laptop6} price={'64,990'} mrp={'83,990'} discount={'(23% off)'} color1="brown" color2="chocolate" color3="beige" delivery={'FREE delivery Fri, 25 Jul'} reviews={42} title={'ASUS TUF Gaming A15, AMD Ryzen 7 7435HS Gaming Laptop(NVIDIA RTX 3050-4GB/60W TGP/16GB RAM/512GB SSD/FHD/15.6"/144Hz/RGB KB/48WHr/Windows 11//Graphite Black/2.30 Kg) FA506NCR-HN054W'} />
  <Laptop img={laptop7} price={'22,490'} mrp={'33,590'} discount={'(33% off)'} color1="midnightblue" color2="darkslategray" color3="slategray" delivery={'FREE delivery Fri, 25 Jul'} reviews={'1,296'} title={'HP 255 G10 Laptop (AMD Athlon Silver 7120U/ 8GB RAM / 256GB SSD/Windows 11/15.6 INCH ASH Silver'} />
  </>
  )
}

export default App;
