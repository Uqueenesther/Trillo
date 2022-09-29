
import './App.css';
import './App.scss';


function App() {
  return (
    <div className='container'>
      <header className='header'>
       <img src='img/logo.png' alt='trillo logo' className='logo'/> 

       <form action='#' className='search'>
         <input type="text" className='search__input' placeholder='search hotels'/>
         <button className='search__button'>
            <svg className='search__icon' viewBox="0 0 32 32"><title>search</title>
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path> 
            </svg>
         </button>
       </form>

       <nav className='user-nav'>
           <div className='user-nav__icon-box'>
              <svg className='user-nav__icon' viewBox="0 0 32 32"><title>book mark</title>
              <path d="M6 0v32l10-10 10 10v-32z"></path>
              </svg>
              <span className='user-nav__notification'>7</span>
           </div>

           <div className='user-nav__icon-box'>
              <svg className='user-nav__icon' viewBox="0 0 32 32"><title>chat</title>
               <path d="M15 0v0c8.284 0 15 5.435 15 12.139s-6.716 12.139-15 12.139c-0.796 0-1.576-0.051-2.339-0.147-3.222 3.209-6.943 3.785-10.661 3.869v-0.785c2.008-0.98 3.625-2.765 3.625-4.804 0-0.285-0.022-0.564-0.063-0.837-3.392-2.225-5.562-5.625-5.562-9.434 0-6.704 6.716-12.139 15-12.139zM31.125 27.209c0 1.748 1.135 3.278 2.875 4.118v0.673c-3.223-0.072-6.181-0.566-8.973-3.316-0.661 0.083-1.337 0.126-2.027 0.126-2.983 0-5.732-0.805-7.925-2.157 4.521-0.016 8.789-1.464 12.026-4.084 1.631-1.32 2.919-2.87 3.825-4.605 0.961-1.84 1.449-3.799 1.449-5.825 0-0.326-0.014-0.651-0.039-0.974 2.268 1.873 3.664 4.426 3.664 7.24 0 3.265-1.88 6.179-4.82 8.086-0.036 0.234-0.055 0.474-0.055 0.718z"></path>
              </svg>
              <span className='user-nav__notification'>13</span>
           </div>

           <div className='user-nav__user'>
            <img src='img/user.jpg' alt='user pic' className ='user-nav__user-photo'/>
            <span className='user-nav__user-name'>Jonas</span>
           </div>

       </nav>
      </header>  
      
      <div className='content'>
          <nav className='sidebar'>
              <ul className='side-nav'>
                 <li className='side-nav__item side-nav__item--active'>
                    <a href='#' className='side-nav__link'>
                      <svg className='side-nav__icon' viewBox="0 0 32 32"><title>Home</title>
                      <path d="M16 1l-16 16 3 3 3-3v13h8v-6h4v6h8v-13l3 3 3-3-16-16zM16 14c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
                      </svg>
                    <span>Hotel</span>
                    </a>
                 </li>
                 <li className='side-nav__item'>
                    <a href='#' className='side-nav__link'>
                      <svg className='side-nav__icon' viewBox="0 0 32 32"><title>Flight</title>
                      <path d="M24 19.999l-5.713-5.713 13.713-10.286-4-4-17.141 6.858-5.397-5.397c-1.556-1.556-3.728-1.928-4.828-0.828s-0.727 3.273 0.828 4.828l5.396 5.396-6.858 17.143 4 4 10.287-13.715 5.713 5.713v7.999h4l2-6 6-2v-4l-7.999 0z"></path>
                      </svg>
                    <span>Flight</span>
                    </a>
                 </li>
                 <li className='side-nav__item'>
                    <a href='#' className='side-nav__link'>
                      <svg className='side-nav__icon' viewBox="0 0 32 32"><title>Home</title>
                      <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                      </svg>
                    <span>Car Rental</span>
                    </a>
                 </li>
                 <li className='side-nav__item'>
                    <a href='#' className='side-nav__link'>
                      <svg className='side-nav__icon' viewBox="0 0 32 32"><title>tour</title>
                      <path d="M21 6l-10-4-11 4v24l11-4 10 4 11-4v-24l-11 4zM12 4.554l8 3.2v19.692l-8-3.2v-19.692zM2 7.401l8-2.909v19.744l-8 2.909v-19.744zM30 24.599l-8 2.909v-19.744l8-2.909v19.744z"></path>
                      </svg>
                     <span>Tour</span>
                    </a>
                 </li>
              </ul>

              <div className='legal'>
                &copy; 2022 by Trillo. All rights reserved.
              </div>
          </nav>
          <main className='hotel-view'>
            <div className='gallery'>
             <figure className='gallery__item'>
               <img src='img/hotel-1.jpg' alt='photo of hotel 1' className='gallery__photo'/>
             </figure>
             <figure className='gallery__item'>
               <img src='img/hotel-2.jpg' alt='photo of hotel 2' className='gallery__photo'/>
             </figure>
             <figure className='gallery__item'>
               <img src='img/hotel-3.jpg' alt='photo of hotel 3' className='gallery__photo'/>
             </figure>
            </div>

            <div className='overview'>
                <h1 className='overview__heading'>
                  Hotel las Palmas
                </h1>
                
                <div className='overview__stars'>
                    <svg  className='overview__icon-star' viewBox="0 0 32 32">
                      <title>star-empty</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                    </svg>

                    <svg  className='overview__icon-star' viewBox="0 0 32 32">
                      <title>star-empty</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                    </svg>

                    <svg  className='overview__icon-star' viewBox="0 0 32 32">
                      <title>star-empty</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                    </svg>

                    <svg  className='overview__icon-star' viewBox="0 0 32 32">
                      <title>star-empty</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                    </svg>
                    
                    <svg  className='overview__icon-star' viewBox="0 0 32 32">
                      <title>star-empty</title>
                      <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                    </svg>
                </div>

                <div className='overview__location'>
                  <svg  className='overview__icon-location' viewBox="0 0 32 32">
                    <title>star-empty</title>
                    <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
                  </svg>
                  <button className='btn-inline'>Albufera, Portugal</button>
                </div>

                <div className='overview__rating'>
                   <div className='overview__rating-average'>8.6</div>
                   <div className='overview__rating-count'>429 votes</div>
                </div>
            </div> 

            <div className='detail'>
               <div className='description'> 
                   <p className='paragraph'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                   
                   </p>
                   <p className='paragraph'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   </p>
                   <ul className='list'>
                      <li className='list__item'> Close to the beach</li>
                      <li className='list__item'> breakfast included</li>
                      <li className='list__item'> Free airport shuttle</li>
                      <li className='list__item'> free wifi in all rooms</li>
                      <li className='list__item'> Air conditioning and heating</li>
                      <li className='list__item'> Pets allowed</li>
                      <li className='list__item'>All languahes</li>
                      <li className='list__item'>perfect for family</li>
                   
                   </ul>

                   <div className='recommend'>
                      <p className='recommend__count'>Lucy and ten others recommend this Hotel</p>
                      <div className='recommend__friends'>
                      <img src='img/user-3.jpg' alt='Friend' className='recommend__photo'/>
                      <img src='img/user-4.jpg' alt='Friend' className='recommend__photo'/>
                      <img src='img/user-5.jpg' alt='Friend' className='recommend__photo'/>
                      <img src='img/user-6.jpg' alt='Friend' className='recommend__photo'/>
                      </div>
                   </div>
                   
               </div>
               <div className='user-reviews'>

                  <figure className='review'>
                    <blockquote className='review__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur                  
                    </blockquote> 
                    <figcaption className='review__user'>
                       <img src='img/user-1.jpg' alt='User 1' className='review__photo'/>
                       <div className='review__user-box'>
                         <p className='review__user-name'> Nickky</p>
                         <p className='review__user-date'> 17th Sept 2022</p>
                       </div>
                       <div className='review__rating'> 7.8</div>
                    </figcaption>
                  </figure>

                  <figure className='review'>
                    <blockquote className='review__text'>
                    Lorem ipsum dolor sit amet, consectetur 
                    </blockquote> 
                    <figcaption className='review__user'>
                       <img src='img/user-2.jpg' alt='User 2' className='review__photo'/>
                       <div className='review__user-box'>
                         <p className='review__user-name'>Anne</p>
                         <p className='review__user-date'> 17th Oct 2022</p>
                       </div>
                       <div className='review__rating'> 7.8</div>
                    </figcaption>
                  </figure>

                  <button className='btn-inline'>Show all <span> &rarr; </span></button>
               </div>
            </div>

            <div className='cta'>
                 <h2 className='cta__book-now'>
                   Goodnews we have 4 free rooms for selected dates
                 </h2>
                 <button className='btn'>
                  <span className='btn__visible'> Book now</span>
                  <span className='btn__invisible'>  Only 4 rooms left</span>
                 </button>
               </div>

         </main>
      </div>
    </div>
  );
}

export default App;
