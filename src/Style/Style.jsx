import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


export const Box = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 100vh;
text-align: center;
border-bottom: 1px solid lightgray;
font-weight: bolder;
font-size: 30px;
/* display:flex;
justify-content : center;
align-items:center; */

`
export const aboutBox = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 100vh;
text-align: center;
border-bottom: 1px solid lightgray;
font-weight: bolder;
font-size: 30px;
position : relative;
display:flex;
justify-content : center;
align-items:center;

.aboutIn{
  width : 600px;
  font-size : 20px;
  display : none;
}

p{
  font-size : 35px;
}

`
export const titleImg = styled(motion.div)`
  img{
    height : 300px;
    width :300px;
    cursor : pointer;
  }
 p{
  border : 1px solid #fff;
  border-radius : 15px;
  display : none;
 }

`
export const contactBox = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 100vh;
text-align: center;
border-bottom: 1px solid lightgray;
font-weight: bolder;
font-size: 30px;
display: none;

div.flex{
  width : 100%;
  height : 100%;
  display:flex;
  justify-content : center;
  align-items:center;
}

.sns{
  width : 300px;
  height : 300px;
  border : 1px solid #ffff;
  font-family : 'Pretendard-Thin';
  font-size : 30px;

}
.sns>p{
  margin-top : 50px;
  font-size : 25px;

}
.qrcord{
  display : none; 
}

`

export const topside = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-end;
  justify-content : space-around;
`

export const topbar = styled.div`
  width :300px;
  display : inline-block;
  position:fixed;
  left:20px;
  display : none;
  ul,li{
    list-style-type: none;
    padding : 0;
    margin : 0;
    display:flex;
    font-family:'Pretendard-Thin';
    font-weight: 300;
    font-size : 25px;
    height: 70px;
    transition : font-size 0.5s, font-family 0.3s;   
  }
 
  li:hover{
    font-size : 30px;
    font-family :'Pretendard-SemiBold';

  }
  p{
    font-family :'Pretendard-SemiBold';
    font-size:35px;
    width : 30px;
    border-radius : 50%;
        }
    
    cursor: pointer;

  
`

export const featureBox = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 100vh;
text-align: center;
border-bottom: 1px solid lightgray;
font-weight: bolder;
font-size: 30px;

display: none;
div.iconBox{
  width : 300px;
  height   : 300px;
  
}
div.te{
  margin-top : 160px;
}
div.iconBox>img{
  width: 100px;
  display : inline-block;
  position : absolute;
}
.html{
  top : 10px;
  left : 50px;
}
.css{
  top: 10px;
  left :170px;
}
.styled{
  top : 150px;
  left : 40px;

}
.bootstrap{
  top : 160px;
  left : 170px;
}
.script{
  top : 80px;
  left : 50px;
}
.jquery{
  top : 120px;
  left : 160px;
}
.react{
  top : 100px;
  left : 35px;
}
.nodejs{
  top : 10px;
  left : 65px;
}
.sql{
  top : 130px;
  left : 65px;
}
`


export const portfolioBox = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 100vh;
text-align: center;
border-bottom: 1px solid lightgray;
font-weight: bolder;
font-size: 30px;
display : none;
`

// 이모지 animation
export const firstVeriants = {
  start: { scale: 0 ,initial :0,x:-120},
  end: {
    scale: 1,
    rotateZ: 360,

    transition: {
      duration: 1,
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.5,
      staggerDirection: -1

    },
    
  },
  hover : {
    scale: 1.5,
    transition: { duration: 0.3} ,

  }
};
