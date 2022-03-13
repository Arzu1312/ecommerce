import React, {useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import cookies from 'js-cookie';
import '../sass/style.css'
import AOS from '../../node_modules/aos';
import '../../node_modules/aos/dist/aos.css';
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';
import team4 from '../images/team4.jpg';
import team5 from '../images/team-5.jpg';
import team6 from '../images/team-6.jpg';
import person1 from '../images/person-1.jpg'
import person2 from '../images/person-2.jpg'
import person3 from '../images/person-3.jpg'
import person4 from '../images/person-4.jpg'




const options = {
  margin: 20,
  responsiveClass: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 3,

      }
  },
};



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
 


const About = () => {
     
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
      const { t } = useTranslation();

    
    return (
        <div className="about" >
            <div className="part1" >
             <div className="container" data-aos="fade-down" data-aos-duration='8000' >
               
               <div className="row">
                 <div className="col-md-12">
               <div className="about-title " >
                   <h1>{t('29')}</h1>
                   <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </div>
                </div>  
               </div>
                
                <OwlCarousel className="owl-theme"  {...options}>
                  <div className="col hvrbox">
                    <img src={team1} className="hvrbox-layer_bottom" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideleft">
	                	<div className="hvrbox-text">
                      <h5>Jessica Swift</h5>
                       <p>Founder</p>
                       <a href="#" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                       <a href="#" className="icon-button facebook"><i className="fab fa-facebook-f"></i><span></span></a>
                       <a href="#" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                        </div>                      
	                </div>
                  </div>
                  <div className="col hvrbox">
                    <img src={team2} className="hvrbox-layer_bottom" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideleft">
	                	<div className="hvrbox-text">
                    <h5>Jessica Swift</h5>
                      <p>Founder</p>
                      <a href="#" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                       <a href="#" className="icon-button facebook"><i className="fab fa-facebook-f"></i><span></span></a>
                       <a href="#" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                    </div>
	                </div>
                  </div>
                  <div className=" col hvrbox">
                    <img src={team3} className="hvrbox-layer_bottom" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideleft">
	                	<div className="hvrbox-text">
                    <h5>Jessica Swift</h5>
                      <p>Founder</p>
                      <a href="#" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                       <a href="#" className="icon-button facebook"><i className="fab fa-facebook-f"></i><span></span></a>
                       <a href="#" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                    </div>
	                </div>
                  </div>
                  <div className="col hvrbox">
                    <img src={team4} className="hvrbox-layer_bottom" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideleft">
	                	<div className="hvrbox-text">
                    <h5>John Doe</h5>
                      <p>CEO</p>
                      <a href="#" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                       <a href="#" className="icon-button facebook"><i className="fab fa-facebook-f"></i><span></span></a>
                       <a href="#" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                    </div>
	                </div>
                  </div>
                  <div className="col hvrbox">
                    <img src={team5} className="hvrbox-layer_bottom" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideleft">
	                	<div className="hvrbox-text">
                    <h5>John Doe</h5>
                      <p>CEO</p>
                      <a href="#" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                       <a href="#" className="icon-button facebook"><i className="fab fa-facebook-f"></i><span></span></a>
                       <a href="#" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                    </div>
	                </div>
                  </div>
                  <div className="col hvrbox">
                    <img src={team6} className="hvrbox-layer_bottom" />
                    <div className="hvrbox-layer_top hvrbox-layer_slideleft">
	                	<div className="hvrbox-text">
                    <h5>John Doe</h5>
                      <p>CEO</p>
                      <a href="#" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                       <a href="#" className="icon-button facebook"><i className="fab fa-facebook-f"></i><span></span></a>
                       <a href="#" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                    </div>
	                </div>
                  </div>
                </OwlCarousel>

             </div>
            </div>

            <div className="part2">
               <div className="container" data-aos="fade-down" data-aos-duration='8000' >
                 <div className="about-title col-md-12" >
                 <h1>{t('30')}</h1>  
                 </div>
                 
                  <div className="row" >
                   <div className="col">
                     <div className="item ">
                    <img src={person1} className="person"/>
                    <p>"Lorem ipsum dolor sit amet."</p>
                   </div>
                     </div>

                     <div className="col ">
                     <div className="item ">
                    <img src={person2} className="person"/>
                    <p>"Lorem ipsum dolor sit amet."</p>
                   </div>
                     </div>

                     <div className="col">
                     <div className="item ">
                    <img src={person3} className="person"/>
                    <p>"Lorem ipsum dolor sit amet."</p>
                   </div>
                     </div>

                     <div className="col">
                     <div className="item ">
                    <img src={person4} className="person"/>
                    <p>"Lorem ipsum dolor sit amet."</p>
                   </div>
                     </div>
                  </div>
                
                </div>
            </div>

        </div>
       
    )
  
}

export default About
