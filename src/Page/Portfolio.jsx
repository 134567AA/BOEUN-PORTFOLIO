import React,{useState} from 'react'
import * as Styled from '../Style/Style'
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay,Navigation,Pagination,Scrollbar,Keyboard} from 'swiper'
import 'swiper/css'
import $ from 'jquery';

const Portfolio = () => {
 

  return (
    <>    

    <Styled.portfolioBox className='test'>
  
    <Swiper
      modules={[Autoplay,Keyboard,Navigation, Pagination, Scrollbar]}
      slidesPerView={1}
      navigation={true} 
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay : 3000,
        disableOnInteraction: true,
      }}
      pagination={true}
      keyboard={{
        enabled: true,
      }} className="align-items-center"
    >
      
      <SwiperSlide> 
      <div className='clone'>
       <div className='imgbox'>
        <img src="img/portfolioImg/starbucksclone.png" alt="clonepage" />
       </div>
       <div className='descbox'>
       <ul>
                <li className='descTitle'>클론 랜딩페이지</li>
                <li>개발 인원 : 1인 프로젝트 </li>
                <li>개발 일자 : 22.03</li>
                <li>개발 언어 :   
                <img src="img/icon/htmlLogo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/css-logo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/javasccript.png" alt="javascripts" style={{width : "70px"}} /> </li>
                <li>스타벅스 공식페이지 클론 코딩하여 페이지 제작</li>

          </ul>
              <div className='icon'>
                {/* <a href=""><i class="fa-solid fa-house"></i></a> */}
                <a href="https://github.com/134567AA/https---github.com-134567AA-starbucks-clone" target="_blank"><i class="fa-brands fa-github"></i> </a>     
              </div>
       </div>
      </div>
      </SwiperSlide>

      <SwiperSlide> 
        <div className='blog'>
          <div className='imgbox'>
            <img src="img/portfolioImg/reactBlog1.png" alt="reactBlog_page" />  
          </div>  
      <div className='descbox'>
          <ul>
                <li className='descTitle'>ReactBlog </li>
                <li>개발 인원 : 개인 프로젝트 </li>
                <li>개발 일자 : 22.04</li>
                <li>개발 언어 :   <img src="img/icon/reactJS.png" alt="react" style={{width : "70px"}}/>
                <img src="img/icon/css-logo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/nodejs-1-logo.png" alt="nodejs" style={{width : "70px"}} />
          <img src="img/icon/mysql.png" alt="mysql" style={{width : "70px"}} />
                </li>
                <li> express 사용하여 MySQL을 연결하고 데이터 가져오는 블로그 제작 </li>
          </ul>
              <div className='icon'>
                <a href="https://github.com/134567AA/reactBlog" target="_blank"><i class="fa-brands fa-github"></i> </a>     
              </div>
          
            </div>
     </div>
    </SwiperSlide>
    
      <SwiperSlide>     
      <div className='movie'>
      <div className='imgbox'>
            <img src="img/portfolioImg/eventpage.png" alt="movie_page" />  
      </div>  
      <div className='descbox'>
          <ul>
                <li className='descTitle'>CinemaHK 영화페이지</li>
                <li>개발 인원 : 4인 팀 프로젝트 </li>
                <li>개발 일자 : 22.04 ~ 22.05</li>
                <li>개발 언어 :   <img src="img/icon/reactJS.png" alt="react" style={{width : "100px"}}/>
                <img src="img/icon/css-logo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/jquery logo.png" alt="jquery" style={{width : "70px"}} /> </li>
                <li>담당 : 이벤트 페이지,로그인 및 회원가입 페이지 구현</li>

          </ul>
              <div className='icon'>
  
                {/* <a href="#"><i class="fa-solid fa-house"></i></a> */}
                <a href="https://github.com/HHeeW/CHK_Movie" target="_blank"><i class="fa-brands fa-github"></i> </a>     
              </div>
          
            </div>
     </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='cafe'>
            <div className='imgbox'>
              <img src="img/portfolioImg/cafepage.png" alt="cafe" />
            </div>
            <div className='descbox'>
            <ul>
                <li className='descTitle'>CHK Cafe 페이지</li>
                <li>개발 인원 : 4인 팀 프로젝트 </li>
                <li>개발 일자 : 22.05 ~ 22.07</li>
                <li>개발 언어 :   <img src="img/icon/reactJS.png" alt="react" style={{width : "100px"}}/>
                <img src="img/icon/css-logo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/bootsrap.png" alt="bootstrap" style={{width : "70px"}} /> </li>
                <li>담당 : cafe 메뉴 페이지 제작 및 장바구니 기능 구현</li> 
                </ul>
                <div className='icon'>
                <a href="https://github.com/libby0322/Cafe_Lib_ver" target="_blank"><i class="fa-brands fa-github"></i> </a>     
              </div>
        
            </div>
        </div>
       </SwiperSlide>

      <SwiperSlide> 
        <div className='restaurant'>
            <div className='imgbox'>
                 <img src="img/portfolioImg/restaurant_page.png" alt="restaurant" />
            </div>
            <div className='descbox'> 
            <ul>
                <li className='descTitle'>경기도 맛집 리스트</li>
                <li>개발 인원 : 개인 프로젝트 </li>
                <li>개발 일자 : 22.06 </li>
                <li>개발 언어 :   
                <img src="img/icon/reactJS.png" alt="react" style={{width : "100px"}}/>
                <img src="img/icon/css-logo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/bootsrap.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/nodejs-1-logo.png" alt="nodejs" style={{width : "100px"}} />
                
                </li>
                <li>담당 업무 : 카카오 지도API와 경기도 공공데이터를 이용하여 제작</li>

          </ul>
              <div className='icon'>
                {/* <a href="#"><i class="fa-solid fa-house"></i></a> */}
                <a href="https://github.com/134567AA/restaurant_page" target="_blank"><i class="fa-brands fa-github"></i> </a>     
              </div>px;
            </div>
   
          </div> 
       </SwiperSlide>
      <SwiperSlide> 
      <div className='weather'>
       <div className='imgbox'>
        <img src="img/portfolioImg/weather.png" alt="weatherapp" />
       </div>
       <div className='descbox'>
       <ul>
                <li className='descTitle'>날씨 모바일앱</li>
                <li>개발 인원 : 개인 프로젝트 </li>
                <li>개발 일자 : 22.04 </li>
                <li>개발 언어 :   
                <img src="img/icon/htmlLogo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/css-logo.png" alt="css" style={{width : "70px"}} />
                <img src="img/icon/javasccript.png" alt="jquery" style={{width : "70px"}} />
                <img src="img/icon/cordovalogo.png" alt="cordova" style={{width : "65px"}}/>
                </li>
                <li>날씨 페이지 제작 후 cordova를 이용하여 날씨앱 제작</li>

          </ul>
              <div className='icon'>
                <a href="#"><i class="fa-solid fa-house"></i></a>
                <a href="https://github.com/134567AA/weather" target="_blank"><i class="fa-brands fa-github"></i> </a>     
              </div>
       </div>
      </div>
 
      </SwiperSlide>
    </Swiper>
    
    </Styled.portfolioBox>

</>
  )
}

export default Portfolio