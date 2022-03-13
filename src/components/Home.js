import React, {useEffect} from 'react'
// import Carousel from 'nuka-carousel';
import AOS from '../../node_modules/aos';
import '../../node_modules/aos/dist/aos.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import cookies from 'js-cookie'
import BackgroundSlider from '../../node_modules/react-background-slider'
import CartItem from './CardItem';
import data from './data';
import img1 from '../images/bg1.jpg';
import img2 from '../images/bg2.jpg';
import img3 from '../images/bg3.jpg';
import img4 from '../images/banner-1.jpg';
import img5 from '../images/banner-4.jpg';
import logo1 from '../images/logo-1.png';
import logo2 from '../images/logo-2.jpg';
import logo3 from '../images/logo-3.png';
import logo4 from '../images/logo-4.jpg';
import logo5 from '../images/logo-6.jpg';

const languages = [
   {
     code: 'en',
     name: 'English',
     country_code: 'gb'
   },
 
   {
     code: 'tr',
     name: 'Türkçe',
     country_code: 'tr',
    
   },
 ]
 
 
 i18n
   .use(initReactI18next) // passes i18n down to react-i18next
   .use(LanguageDetector)
   .use(HttpApi)
   .init({
    supportedLngs: ['en', 'tr'],
     fallbackLng: 'en',
     detection: {
       order: [ 'cookie', 'localStorage',  'htmlTag', 'path', 'subdomain'],
       caches: ['cookie'],
     },
 
     backend: {
       loadPath: '/assets/locales/{{lng}}/translation.json',
     },
 
     react: {useSuspense : false},
     
   });

 
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  return (
    <div className="home" >

     <div className="part1">
      
      <div className="bg-image"  >
      <BackgroundSlider className="backgroundslider" images={[ img1, img2, img3 ]} duration={10} transition={4}/>
           {/* <Carousel>
           <img src= {img1} />
           <img src= {img2} />
           <img src={img3} />

   
            </Carousel> */}

            <div className="content animate__animated animate__slideInLeft">
           <h1 >{t('7')}</h1>
           <p>{t('8')}</p>
           <div className=" get "> 
           <a href="#" >{t('9')}
           </a> 
           </div>
          </div>

     </div>

     <div className="container">
     <div className="main" data-aos="fade-down" data-aos-duration='8000'>
       <div className="block-content">
          <div className='row'>
              <div className='col-md-3 col-sm-6'>
              <div className="icons">
              <a href="#">
              <i class="fas fa-truck-loading"></i>
              </a>
              <div className="col-md-12 icon-caption">
                 <h4>{t('10')}</h4>
                 <p>Lorem ipsum</p>

              </div>
              </div>
           </div>
           <div className='col-md-3 col-sm-6'>
           <div className="icons">
              <a href="#">
              <i class="fas fa-user-friends"></i>
              </a>
              <div className="col-md-12 icon-caption">
                 <h4>{t('11')}</h4>
                 <p>Lorem ipsum</p>
              </div>
           </div>
           </div>
            
           <div className='col-md-3 col-sm-6'>
           <div className="icons ">
              <a href="#">
              <i class="fas fa-coins"></i>
              </a>
              <div className="col-md-12 icon-caption">
                 <h4>{t('12')}</h4>
                 <p>Lorem ipsum</p>

              </div>
           </div>
           </div>
            
           <div className='col-md-3 col-sm-6'>
           <div className="icons">
              <a href="#">
              <i class="fas fa-hourglass"></i>
              </a>
              <div className=" col-md-12 icon-caption">
                 <h4>{t('13')}</h4>
                 <p>Lorem ipsum</p>
 
              </div>
           </div>
           </div>
          </div>
       </div>

     </div>
     </div>

  
      </div>
       
        
        <div className='products'>
        <div className="container" data-aos="fade-down" data-aos-duration='10000'>
        <div className='row'>
        <div className='col-md-12'>
       <div className="title">
                   <h1>{t('49')}</h1>
                 
                </div>
       </div>
        </div>
       
          <div className='row item'>
          {data.productData.map((item,index)=> {
            return(
                <CartItem
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
                />
            )
        })}
          </div>
        </div>
      </div>

      <div className="part2" >
        <div className="container">
        <div className="row" data-aos="fade-down" data-aos-duration='8000'>
             <div className="image-element col-md-6 col-sm-12" >
             <div className="img-hover-zoom--colorize">
             <img src={img4}  />

             <div className="caption">
               <h4>Lorem ipsum sit amet</h4>
               <div className=" shop "> 
                <a href="#" >{t('14')}
                </a> 
                </div>
             </div>

             </div>

             </div>
             <div className="image-element col-md-6 col-sm-12">
             <div className="img-hover-zoom--colorize">
             <img src={img5} />

             <div className="caption left-caption">
               <h4>Lorem ipsum sit amet</h4>
               <div className=" shop "> 
                <a href="#" >{t('14')}
                </a> 
                </div>
             </div>
             </div>

             </div>
          </div>
        </div>
        </div>

        <div className="part3">
        <div className="container" data-aos="fade-down" data-aos-duration='8000'>
            
               <div className='row'>
               <div className='col-md-12'>
               <div className="title">
                   <h1>{t('6')}</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
               </div>
               </div>
               <div className="row">
               <div className="slideshow">
               <img src={logo1}/>
                 <img src={logo2}/>
                 <img src={logo3}/>
                 <img src={logo4}/>
                 <img src={logo5}/>
                 <img src={logo1}/>
                 <img src={logo2}/>
                 <img src={logo3}/>
                 <img src={logo4}/>
                 <img src={logo5}/>
            
                </div>
               </div>
             
        </div>     
      </div>
      

     
      <div className="part4">
          <div className="container">
         
             <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                 
                    <div className="subscribe-title" data-aos="fade-right" data-aos-duration='8000'>
                       <h1> 
                     
                       {t('15')}
                         </h1>
                         <p>Lorem ipsum site amet</p>
                    </div>
                    <div className="subscribe-item" data-aos="fade-right" data-aos-duration='8000'>
                       <form>
                         <div className="form-group">
                            <input type="email" className="mail form-control" placeholder={t('16')}/>
                            <input type="submit" className="subscribe" value={t('17')}/>
                         </div>
                       </form>
                    </div>
                 
                </div>
             
           </div>
          </div>
        </div>

       
    </div>
  )
}

export default Home


