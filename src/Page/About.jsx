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
              <img src="img/fish.jpg" alt="emoji"id="emoji" />
            </Styled.titleImg>
              <div className='aboutIn'>
                    <h1 className='text-center pt-3'>Welcome!</h1>
                  <ul>
                    <li className='text-center fs-4'>개발자 최보은의 포트폴리오의 오신 걸 환영합니다!</li>
                    <li>비전공자로 시작해서 프론트엔드가 되기까지!</li>
                  </ul>
              </div>
        </Styled.aboutfront>
 {/* ******************************* contact  ******************************** */}
      <Styled.aboutback className='aboutBack'>
    
          <div className='photoIn d-flex justify-content-center'>
            <img src="img/notebook.png" alt="png" />
          </div>  
       
      <ul className='sns '>
        <li><i class="fa-solid fa-user"> : </i> CHOI BOEUN</li>
        <li><i class="fa-solid fa-cake-candles"> : </i> 1998. 07. 22</li>
        <li><i class="fa-brands fa-github"> :  </i> github.com/134567AA </li>
        <li><i class="fa-regular fa-address-book"> :  </i> 010 - 3384 - 3378 </li>
        <li><i class="fa-regular fa-envelope"> : </i> qhdms50@gmail.com </li>
    </ul>
        <div className='qrcord'>
          <img src="img/QRcord.png" alt="qrcord" style={{width:"90px"}}/>
        </div>
 
      </Styled.aboutback>

    </div>
    </div>    
    <div className='more' >
    <OverlayTrigger placement='top' overlay={
            <Tooltip style={{fontSize : '20px',fontWeight : 300}}>
              Click Me!! </Tooltip>}>
    <img src="img/flower2.png" alt="flower" className='flower' style={{width : "70px"}} onClick={more}/> 
    </OverlayTrigger>
    </div>
      
   </Styled.aboutBox>
   </>
  )
}

export default About