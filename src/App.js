import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next'
import cookies from 'js-cookie'
import { CartProvider} from 'react-use-cart';
import { useCart} from 'react-use-cart';
import classNames from '../node_modules/classnames';
import 'flag-icon-css/css/flag-icons.min.css'
import ScrollToTop from "../node_modules/react-scroll-to-top";
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import SignUp from './components/SignUp';
import Card from './components/Card';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  opacity:0;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

    @media (max-width: 1100px) {
     opacity:1
    }

  a {
    font-size: 2rem!important;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 2rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {

  const {totalItems} = useCart();
  
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  return (
    <StyledMenu open={open}>
       <div className="sidebar">
    
    <div className="basket">
       <Link className="basket-link" to="/cart">
       <i className="fas fa-shopping-basket"></i>
       <span className="mini-cart-items"><Cart/></span>
       </Link>
     </div>

     <div className="user">
     <Link className="user-link" to='/signup'>
     <i className="far fa-user-circle"></i>
     </Link>
     </div>

    
     <div className=" dropdown">
     <button class="btn btn-link " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       <GlobeIcon/>
      </button>
   <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
     {languages.map(({code, name, country_code}) =>(
      <li key={country_code}>
        <button className={classNames('dropdown-item', {
               disabled: currentLanguageCode === code,
             })}
        onClick={() => {i18next.changeLanguage(code)  }}>
          <span className={`flag-icon flag-icon-${country_code} mx-2 `}
           style={{
             opacity: currentLanguageCode === code ? 0.5 : 1,
           }}></span>
            {name}
        </button></li>
     ))
     }
     
     
   </ul>
 </div>
 
 {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
<GlobalStyles />
<StyledApp>

<div className="switch-checkbox">
   <label className="switch">
     <input type="checkbox" onClick={() => themeToggler()} />
     <span className="round"> </span>
   </label>
 </div>

</StyledApp>
</ThemeProvider> */}
    
    </div>
     
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{t('1')} </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/about">{t('2')}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link"  to="/services">
                {t('3')}</Link>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/blogs" >{t('4')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contacts">{t('5')}</Link>
              </li>

             
           
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 35%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity:0;
  padding: 0;
  z-index: 10;

  @media (max-width: 1200px) {
    opacity:1
   }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin-left:15px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const Cart = () => {

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
    <span>{totalItems}</span>
  )
}



const GlobeIcon = ({ width = 26, height =26 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

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


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;



const Header = () => {

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const {totalItems} = useCart();
  
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();


  // useEffect(() => {
  //   console.log('Setting page stuff')
  //   document.body.dir = currentLanguage.dir || 'ltr'
  //   document.title = t('app_title')
  // }, [currentLanguage, t])

    return (
        <div className="header" >
            <div classname="container">
            <nav className="navbar navbar-expand-lg   ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Shop</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{t('1')} </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/about">{t('2')}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link"  to="/services">
                {t('3')}</Link>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/blogs" >{t('4')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contacts">{t('5')}</Link>
              </li>
            </ul>


           <div className="right-side">
    
           <div className="basket">
              <Link className="basket-link" to="/cart">
              <i className="fas fa-shopping-basket"></i>
              <span className="mini-cart-items"><Cart/></span>
              </Link>
            </div>

            <div className="user">
            <Link className="user-link" to='/signup'>
            <i className="far fa-user-circle"></i>
            </Link>
            </div>

           
            <div className=" dropdown">
            <button class="btn btn-link " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <GlobeIcon/>
             </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            {languages.map(({code, name, country_code}) =>(
             <li key={country_code}>
               <button className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
               onClick={() => {i18next.changeLanguage(code)  }}>
                 <span className={`flag-icon flag-icon-${country_code} mx-2 `}
                  style={{
                    opacity: currentLanguageCode === code ? 0.5 : 1,
                  }}></span>
                   {name}
               </button></li>
            ))
            }
            
            
          </ul>
        </div>
        
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      
      <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onClick={() => themeToggler()} />
            <span className="round"> </span>
          </label>
        </div>
     
      </StyledApp>
    </ThemeProvider>
           
           </div>
            
          </div>
          <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>  
        </div> 
      </nav>
            </div>
        </div>
    )
          
}



const Footer = () => {
  const { t } = useTranslation();
    return (
       <footer>
          <div className="container">
                  <div className="row" >
                     <div className="col-md-3 col-sm-6" >
                        <div className="footer-widget">
                           <h3>{t('18')}</h3>
                           <div className="contact-info">
                           <i className="fas fa-map-marker-alt"></i>
                              <h6>{t('19')}</h6>
                              <p>Azerbaijan, Baku, Nizami str.</p>
                           </div>

                           <div className="contact-info">
                           <i className="fas fa-phone"></i>
                              <h6>{t('20')}</h6>
                              <p>+994 513301312</p>
                           </div>

                           <div className="contact-info">
                           <i class="far fa-envelope-open"></i>
                              <h6>{t('28')}</h6>
                              <p>arzu.shahbazli@bk.ru</p>
                           </div>

                           
                        </div>
                     </div>

                     <div className="col-md-3 col-sm-6">
                         <div className="footer-widget">
                            <h3>{t('21')}</h3>
                            <ul>
                              <li><a href="#">Adidas</a></li>
                              <li><a href="#">Nike</a></li>
                              <li><a href="#">Champion</a></li>
                              <li><a href="#">Converse</a></li>
                              <li><a href="#">Reebok</a></li>

                            </ul>
                         </div>
                     </div>

                     <div className="col-md-3 col-sm-6">
                     <div className="footer-widget">
                            <h3>{t('22')}</h3>
                            <ul>
                              <li><a href="#">{t('23')}</a></li>
                              <li><a href="#">{t('24')}</a></li>
                              <li><a href="#">{t('25')}</a></li>
                              <li><a href="#">{t('26')}</a></li>
                              <li><a href="#">{t('27')}</a></li>

                            </ul>
                         </div>
                     </div>
                     <div className="col-md-3 col-sm-6">
                     <div className="footer-icons">
                            <h3 className="footer-logo">E-Shop</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='row'>
                            <ul className='col' >
                             <li className="facebook"><a href="#"><i className="fab fa-facebook-f fa-2x" aria-hidden="true"></i></a></li>
                             <li className="twitter"><a href="#"><i className="fab fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                             <li className="instagram"><a href="#"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                             <li className="github"><a href="#"><i className="fab fa-github fa-2x" aria-hidden="true"></i></a></li>
                            
                           </ul>
                            </div>
                         </div>
                     </div>

                  </div>
            </div>
       </footer>
    )
}



const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};




const App = () => {

  

  return (
   
    <div >
       <ScrollToTop smooth color="#6f00ff" />
       <CartProvider>
    <BrowserRouter>
    <Header/>

<Route  path="/" exact component={Home}></Route>
<Route  path="/about" component={About}></Route>
<Route  path="/services" component={Services}></Route>
<Route  path="/contacts" component={Contact}></Route>
<Route  path="/blogs" component={Blogs}></Route>
<Route  path="/signup" component={SignUp}></Route>
<Route  path="/cart" component={Card}></Route>

 
<Footer/>
    </BrowserRouter>
    </CartProvider>
  </div>
  )
}

export default App

