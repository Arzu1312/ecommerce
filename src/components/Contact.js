import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import cookies from 'js-cookie';


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

const Contact = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation();

    return (
        <div className="contact">
             <div className="container">
                <div className="row">
                 <div className="col-md-12">
                   <div className="contact-title " >
                   <h1>{t('37')}</h1>
                   </div>
                 </div>  
                 <div className="col-md-5 col-sm-12">
                     {/* <h1>{t('38')}</h1> */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipiscing velit.</p>
                      <p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                   </div>
                   <div className="col-md-7 col-sm-12">
                    <form className="form" method="GET">
                       <div className="form-row">
                         <div className="form-field">
                            <label className="form-label">
                            {t('39')}
                            </label>
                            <input className="form-input" type="text"/>
                         </div>
                         <div className="form-field">
                            <label className="form-label">
                            {t('40')}
                            </label>
                            <input className="form-input" type="text"/>
                         </div>
                         <div className="form-field">
                            <label className="form-label">
                            {t('41')}
                            </label>
                            <input className="form-input" type="text" required/>
                         </div>
                         <div className="form-field">
                            <label className="form-label">
                            {t('42')}
                            </label>
                            <input className="form-input" type="text" required/>
                         </div>
                         <div className="form-field">
                            <label className="form-label">
                            {t('43')}
                            </label>
                            <input className="form-input" type="text" required/>
                         </div>
                         <div className="form-field">
                            <label className="form-label">
                            {t('44')}
                            </label>
                            <input className="form-input" type="text" required/>
                         </div>
                       </div>
                       <div className="form-field">
                            <label className="form-label">
                            {t('45')}
                            </label>
                            <textarea className="form-input" rows="5" cols="50" required type="text"/>
                        </div>
                        <div className="form-actions">
                         <input className="button" type="submit" value={t('46')}/>
                        </div>
                    </form>
                   </div>
                </div>
               
            </div>
            <div className='google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.476369856948!2d49.82713381525643!3d40.376133579369885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ec5fe0f83%3A0x805256f8d1c1ec75!2sMatrix%20Training%20Center!5e0!3m2!1saz!2s!4v1639562935946!5m2!1saz!2s"  style={{border:"0", width:"100%", height:"450px"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact
