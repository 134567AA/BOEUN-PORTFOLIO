import React from 'react'
import * as Styled from '../Style/Style'
import $ from 'jquery';
import { OverlayTrigger,Tooltip } from 'react-bootstrap';



const About = () => {
  const more = ()=>{
      $('.cards').toggleClass('flipEffect');
  }


  return (
   <>

   <Styled.aboutBox>
    <div className='flip'>
      <div className='cards' id='flip'>
        <Styled.aboutfront className='aboutfront'>
            <Styled.titleImg  >
              <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/fish.jpg" alt="emoji"id="emoji" />
            </Styled.titleImg>
            <div className='d-flex flex-column'>
                <div className='aboutIn'>
                    <h1 className='text-center pt-3'>Welcome!</h1>
                  <ul>
                    <li className='text-center fs-4'></li>
                    <li></li>
                  </ul>
              </div>
              <div className='aboutIn2'>
              <h1 className='text-center pt-3'>Education</h1>
              <li className='px-3'>  2022.01 ~ 2022.07  풀스택 개발자 과정 수료</li>
              <li className='px-3'>  2017.03 ~ 2019.02  한양 여자 대학교 실무 중국어과 졸업</li>
              <li className='px-3'>  2014.03 ~ 2017.02  김포 제일 고등학교 졸업</li>
              </div>
            </div>
            
        </Styled.aboutfront>
 {/* ******************************* contact  ******************************** */}
      <Styled.aboutback className='aboutBack'>
    
          <div className='photoIn d-flex justify-content-center'>
            <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/notebook.png" alt="png" />
          </div>  
       
      <ul className='sns '>
        <li><i class="fa-solid fa-user"> : </i> CHOI BOEUN</li>
        <li><i class="fa-solid fa-cake-candles"> : </i> 1998. 07. 22</li>
        <li><i class="fa-brands fa-github"> :  </i> github.com/134567AA </li>
        <li><i class="fa-regular fa-address-book"> :  </i> 010 - 3384 - 3378 </li>
        <li><i class="fa-regular fa-envelope"> : </i> qhdms50@gmail.com </li>
    </ul>
        <div className='qrcord'>
          <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/QRcord.png" alt="qrcord" style={{width:"90px"}}/>
        </div>
 
      </Styled.aboutback>

    </div>
    </div>    
    <div className='more' >
    <OverlayTrigger placement='top' overlay={
            <Tooltip style={{fontSize : '20px',fontWeight : 300}}>
              Click Me!! </Tooltip>}>
    <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/flower2.png" alt="flower" className='flower' style={{width : "70px"}} onClick={more}/> 
    </OverlayTrigger>
    </div>
      
   </Styled.aboutBox>
   </>
  )
}

export default About