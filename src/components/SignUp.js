import React from 'react';
import emailjs from "../../node_modules/emailjs-com";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next'
import cookies from 'js-cookie'


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
 

const SignUp = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_si7zcch', 'template_lr5v6kf', e.target, 'user_wJN84nBnzvAcCGUCmhj25')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        }

    return (
        <div className='sign'>
           <div className='container'>
            <div className="col-md-12">
               <div className="sign-title " >
                   <h1>{t('47')}</h1>             
                </div>
              </div>  
               <form onSubmit={sendEmail}>
                 <div className='row pt-5 mx-auto'>
                  <div className='col-8 form-group mx-auto'>
                  <input type="text" className='form-control' placeholder={t('58')} name='name'/>
                  </div>
                  <div className='col-8 form-group pt-2 mx-auto'>
                  <input type="email" className='form-control' placeholder={t('41')} name='email'/>
                  </div>
                  <div className='col-8 form-group pt-2 mx-auto'>
                  <input type="text" className='form-control' placeholder={t('59')} name='password'/>
                  </div>
                  <div className='col-8 form-group pt-2 mx-auto'>
                  <textarea className='form-control' cols="30" rows="8" placeholder={t('60')} name='name'/>
                  </div>
                  <div className='col-8 pt-3 mx-auto d-flex align-items-center justify-content-center'>
                  <input type="submit" className='button' value={t('61')}/>
                  </div>
                 </div>
               </form>
            </div> 
        </div>
    )
}

export default SignUp
