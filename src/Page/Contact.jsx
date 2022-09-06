import React,{useState} from 'react'
import * as Styled from '../Style/Style'
import { motion } from 'framer-motion';

const Contact = () => {
  const [qr,setQr] = useState(false);
  const [card,setCard] = useState(false);

  const modal = ()=>{
    setQr(!qr);
    setCard(!card);  
  }

  return (
    <>
   <Styled.contactBox className="test" >
    <div className='flex'>
   <div className='sns' onClick={modal} style={{display:card ? "none":"block"}} >
      <p><i class="fa-brands fa-github"> :  </i>github.com/134567AA </p>
      <p><i class="fa-regular fa-address-book"> : 010 - 3384 - 3378 </i></p>
      <p><i class="fa-regular fa-envelope"> : </i> qhdms50@gmail.com </p>
    </div>

   <Styled.titleImg variants={Styled.firstVeriants} initial={Styled.firstVeriants.start} animate={Styled.firstVeriants.end} >
      <img src="img/QRcord.png" alt="qrcord" style={{display : qr ? "block" :"none" }} onClick={modal} id="qrcord"/>
   </Styled.titleImg>  
   
   </div>
   </Styled.contactBox>
    
    </>
  )
}

export default Contact