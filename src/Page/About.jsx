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

   <Styled.aboutBox >
    <div className='flip'>
      <div className='cards' id='flip'>
        <Styled.aboutfront className='aboutfront'>
            <Styled.titleImg  >
              <img src="img/thinking.png" alt="emoji"id="emoji" />
            </Styled.titleImg>
            <div className=''>
              <div className='aboutIn'>
                  <p> </p>
                  <p>  </p>
                  <p> </p>
              </div>
              <div className='aboutIn2'>
          
                <h1 className='text-center pt-2'>Profile</h1>
                  <ul>
                    <li>최보은</li>
                    <li>1998. 07. 22</li>
                    <li></li>
                  </ul>
              </div>
          </div>
        </Styled.aboutfront>
 {/* ******************************* contact  ******************************** */}
      <Styled.aboutback className='aboutBack'>
    
          <div className='photoIn d-flex justify-content-center'>
            <img src="img/notebook.png" alt="png" />
          </div>  
       
      <ul className='sns '>
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