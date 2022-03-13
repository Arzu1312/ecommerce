import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import cookies from 'js-cookie';
import data from './data.json'
import Count from './Count';


const options = {
  margin: 40,
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
 

const Services = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

    return (
        <div className="service">
            <div className="part1">
           <div className="container">
           <div className="row">
                 <div className="col-md-12">
               <div className="service-title " >
                   <h1>{t('31')}</h1>
                   <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </div>
                </div>  
               </div>
               
           <OwlCarousel className="owl-theme " {...options}>
           <div className="col item">
                <div className="single-service">
                <i class="fas fa-tools"></i>
                  <h1>{t('32')}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="col item">
                <div className="single-service">
                <i class="fas fa-business-time"></i>
                  <h1>{t('35')}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="col item">
                <div className="single-service">
                <i class="fas fa-store"></i>
                  <h1>{t('34')}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              
              <div className="col item">
                <div className="single-service">
                  <i class="fas fa-chess-knight"></i>
                  <h1>{t('36')}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              
              <div className="col item ">
                <div className="single-service">
                <i class="fas fa-clipboard-list"></i>
                  <h1>{t('33')}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </OwlCarousel>
                </div>
                  
            </div>

            <div className='part2'>
              <div className="container">
              <div className="row">                
                {data.counts.map(count => <Count key={count.id} data={count}/>)}
                         
               </div>
              </div>
            </div>
        </div>
    )
}

export default Services
