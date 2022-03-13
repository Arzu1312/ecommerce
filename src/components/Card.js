import React from 'react';
import { useCart } from 'react-use-cart';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
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
 

const Card = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
      const { t } = useTranslation();

    const {isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyItem,
        emptyCart, } = useCart();

        if (isEmpty) return <h1 className="text-center"></h1>
            
        

    return (
        <div className="main-container">
           <div className='container'>
           <div className="row">
                 <div className="col-md-12">
                  <div className="carditem-title " >
                   <h1>{t('62')}</h1>                  
                </div>
                </div>  
               </div>
           <div className="row justify-content-center">
               <div className="col-md-6 col-sm-12">
                   <div className="d-flex  flex-column  ">
                      
                           {items.map((item,index)=>{
                               return(
                                   <div className='card-list' key={index}>
                                       <div className='col-6'>
                                       <img src={item.img} style={{width:"200px",height:"250px"}} alt="" />
                                       </div>
                                      <div className='col-6  d-flex flex-column card-info'>
                                      <a className='title'>{item.title}</a>
                                       <a className='desc'>{item.desc}</a>
                                       <a className='price'>{item.price}$</a>
                                      </div>
                                       <div className='d-flex'>
                                       
                                        <div className='quantity'>
                                        <a className="ms-2" onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</a>
                                       <a>{item.quantity}</a>
                                           <a onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</a>
                                        </div>
                                           <button className="btn-danger ms-2" onClick={()=>removeItem(item.id)}><i class="fas fa-trash-alt"></i></button>
                                       </div>
                                       
                                   </div>
                               )
                           })}
                      
                   </div>
               </div>
               <div className="col-md-6 col-sm-12  ">
        
                   <div className="ms-auto total  ">
                   <h5 className='d-flex align-items-center justify-content-start total-title' >{t('63')}:{totalUniqueItems}</h5>
                    <h2>{t('64')} {cartTotal}$</h2>
                    <div className='button'>
                    <a className="clear" onClick={()=>emptyCart()}>{t('65')}</a>
                   <a className="buy ms-2">{t('66')}</a>
                    </div>
                     </div>
               </div>
           </div>
          
           </div>
        </div>
    )
}

export default Card