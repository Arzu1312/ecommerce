import React from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import cookies from 'js-cookie';
import post1 from '../images/post-1.jpg'
import post2 from '../images/post-2.jpg'
import post3 from '../images/post-3.jpg'
import post4 from '../images/post-4.jpg'
import post5 from '../images/post-5.jpg'
import post6 from '../images/post6.jpeg'


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



const Blogs = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation();
    
    return (
        <div className="blog">
            <div className="container">
            <div className="col-md-12">
               <div className="blog-title " >
                   <h1>{t('48')}</h1>             
                </div>
              </div>  
              <div className='row'>
                <aside className='col-xxl-2 col-lg-3 col-md-12'>
                    <div className='side-block'>
                      <div className='module-wrapper'>
                        <h5 className='title recent'>{t('55')}</h5>
                        <div className='blog-content'>
                            <ul>
                                <li>
                                    <div className='blog-post'>
                                        <figure>
                                            <a href='#'>
                                                <img src={post1} />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className='blog-header'> 
                                        <h4>Donec semper tristique enim</h4>

                                        <div className='blog-date'>{t('57')}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className='blog-post'>
                                        <figure>
                                            <a href='#'>
                                                <img src={post2} />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className='blog-header'> 
                                        <h4>Donec semper tristique enim</h4>

                                        <div className='blog-date'>{t('57')}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className='blog-post'>
                                        <figure>
                                            <a href='#'>
                                                <img src={post3} />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className='blog-header'> 
                                        <h4>Donec semper tristique enim</h4>

                                        <div className='blog-date'>{t('57')}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className='blog-post'>
                                        <figure>
                                            <a href='#'>
                                                <img src={post4} />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className='blog-header'> 
                                        <h4>Donec semper tristique enim</h4>

                                        <div className='blog-date'>{t('57')}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className='blog-post'>
                                        <figure>
                                            <a href='#'>
                                                <img src={post5} />
                                            </a>
                                        </figure>
                                    </div>
                                    <div className='blog-header'> 
                                        <h4>Donec semper tristique enim</h4>

                                        <div className='blog-date'>{t('57')}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </div>
                      <div className='module-wrapper popular'>
                        <h5 className='title'>{t('56')}</h5>
                        <div className='block-content'>
                        
                          <div className='banner-figures'>
                            <div className='banner'>
                                <img src={post6}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </aside>
                <div className='col-xxl-10 col-lg-9 col-md-12 page-content'>
                    <div className='blog-category'>
                        <div className='blog-post'>
                            <div className='blog-post-figure'>
                                <figure>
                                    <div className='post-img'>
                                        <img src={post1} />
                                    </div>
                                </figure>
                            </div>
                            <div className='blog-post-body'>
                                <h2>Donec semper tristique enim</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                 <div className='read'>
                                   <a href="#">{t('54')}</a>
                                 </div>
                            </div>
                        </div>
                        <div className='blog-post'>
                            <div className='blog-post-figure'>
                                <figure>
                                    <div className='post-img'>
                                        <img src={post2} />
                                    </div>
                                </figure>
                            </div>
                            <div className='blog-post-body'>
                                <h2>Donec semper tristique enim</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                 <div className='read'>
                                   <a href="#">{t('54')}</a>
                                 </div>
                            </div>
                        </div>
                        <div className='blog-post'>
                            <div className='blog-post-figure'>
                                <figure>
                                    <div className='post-img'>
                                        <img src={post3} />
                                    </div>
                                </figure>
                            </div>
                            <div className='blog-post-body'>
                                <h2>Donec semper tristique enim</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                 <div className='read'>
                                   <a href="#">{t('54')}</a>
                                 </div>
                            </div>
                        </div>
                        <div className='blog-post'>
                            <div className='blog-post-figure'>
                                <figure>
                                    <div className='post-img'>
                                        <img src={post4} />
                                    </div>
                                </figure>
                            </div>
                            <div className='blog-post-body'>
                                <h2>Donec semper tristique enim</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                 <div className='read'>
                                   <a href="#">{t('54')}</a>
                                 </div>
                            </div>
                        </div>
                        <div className='blog-post'>
                            <div className='blog-post-figure'>
                                <figure>
                                    <div className='post-img'>
                                        <img src={post5} />
                                    </div>
                                </figure>
                            </div>
                            <div className='blog-post-body'>
                                <h2>Donec semper tristique enim</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                 <div className='read'>
                                   <a href="#">{t('54')}</a>
                                 </div>
                            </div>
                        </div>
                    </div>   
                </div>
              </div>
            </div>
        </div>
    )
}

export default Blogs
