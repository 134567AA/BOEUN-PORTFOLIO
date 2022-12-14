import React from 'react'
import styled from 'styled-components'
import {animate, motion} from 'framer-motion'

export const topside = styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-end;
  justify-content : space-around;
  
  
`
export const top = styled.p`
  width : 70px;
  height : 70px;
  background-color : #bbae35cd;
  border-radius : 50px;
  position : fixed;
  bottom : 10px;
  right : 10px;
  opacity : 0.8;
  display :none;
  text-align:center;
  display : flex;
  align-items:center;
  justify-content:center;

  
`
export const topbar = styled.div`

  width :300px;
  display : inline-block;
  position : fixed;
  left:20px;
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
  @media screen and (max-width : 1024px) {
    width : 100%;
    height : 100px;
    display : flex;
    justify-content : space-around;
    align-items : center;
    padding :0;
    margin : 0 10px;
    position : sticky ;
    font-size:15px;
  
  }
  @media screen and (max-width : 768px) {
    width : 100%;
    font-size : 13px;
  }
  @media screen and (max-width : 390px) {
    width : 100%;
    font-size : 11px;
    font-weight : 200;
    p{
      font-size: 20px;
    }
  }

  
`

export const titleImg = styled(motion.div)`
  img#emoji{
   max-width : 400px;
   border-radius : 15px;
   @media screen and (max-width : 1024px) {
    max-width : 250px;
  }
  }

`
export const aboutBox = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 100vh;
display:flex;
justify-content : space-evenly;
align-items:center;
@media screen and (max-width : 1024px){
  width : 1024px;
}
@media screen and (max-width : 768px){
  width : 768px;
}
@media screen and (max-width : 390px) {
  width : 390px;

}


div.flip{
  width : 85%;
  height : 700px;
  perspective : 1000px;
}
.aboutIn{
  width : 600px;
  height : 400px;
  font-size : 20px;
  border-radius : 20px;
  background-color : #bbae35cd;
  margin-bottom : 20px;
  h1{
    font-weight : bold;
  }
  ul{
    width : 95%;
  }
  @media screen and (max-width : 1024px) {
    width : 500px;
    h1{
      font-weight : 400;
    }
    ul{
      width : 95%;
    }
  }
  @media screen and (max-width : 768px){
  width : 290px;
  height : 350px;
  font-size : 13px;
  font-weight : 300;
  ul{
    padding-top: 0;
    width : 95%;
  }
}
@media screen and (max-width : 390px) {
  width : 50%;
}

} 
.aboutIn2{
  width : 600px;
  height : 200px;
  border-radius : 20px;
  background-color : #bbae35cd;
    font-size : 18px;
  @media screen and (max-width : 1024px) {
    width : 500px;
  }
  @media screen and (max-width : 768px){
  width : 290px;
  height : 150px;
  font-size : 13px;
  font-weight : 300;
  ul,li{
    margin : 0;
    padding : 0;
    width : 95%;
  }
}
@media screen and (max-width : 390px) {
  width : 50%;
}

}
.flower{
  animation : flower 3s infinite;

}
.flower:hover{
  animation : none;
}
.flipEffect{
  transform : rotateX(180deg);
}
@keyframes flower {
 0%{
  transform : rotate(0deg);
 }
 100%{
  transform : rotate(360deg);
 }

}


.more{
  display : block;
  position : absolute;
  right : 125px;
  bottom : 70px;
  cursor : pointer;
@media screen and (max-width : 1024px){
  right : 80px;
  bottom : -30px;
}
@media screen and (max-width : 768px) {
right : 100px;
bottom : 60px;
}

}
.cards{
  width : 100%;
  height : 100%;
  position : relative;
  transition : 0.5s;
  transform-style : preserve-3d;

}
.aboutfront,.aboutBack{
  position : absolute;
  width : 100%;
  height : 100%;
  backface-visibility : hidden;
  color : white;


.sns{
  width : 50%;
  list-style-type : none;
  padding: 0;
  margin:0;
  line-height : 80px;
  font-size : 35px;
  @media screen and (max-width : 1024px){
    font-size : 20px;   
}
@media screen and (max-width : 768px) {
  font-size : 15px;
}

}
.photoIn{
  width : 50%;
}
.photoIn>img{
  width : 300px;
  @media screen and (max-width : 1024px){
  width : 250px;
}
@media screen and (max-width : 768px){
  width : 200px;
}
}

}

`
export const aboutfront = styled.div`
  border-radius : 20px;
  background-image : url('http://134567AA.github.io/BOEUN-PORTFOLIO/img/dd.jpg');
  display : flex;
  justify-content : space-evenly;
  align-items : center;

` 
export const aboutback = styled.div`
  display : flex;
  justify-content : space-around;
  align-items : center;
  color : white;
  border-radius : 20px;
  background-color :  #bbae35cd;
  transform: rotateX(180deg);

  .qrcord{
    position : absolute;
    top : 0;  
    right :0;
  }
`


export const skillBox= styled.div`
  width  : 1500px;
  height : 100vh;
  flex-wrap : wrap;
  @media screen and (max-width : 1024px){
  width : 1024px;
}
@media screen and (max-width : 768px){
  width : 768px;
}
@media screen and (max-width : 391px) {
  width : 390px;
}

`
export const skillFlip = styled.div`

div.flip{
    width : 250px;
    height : 400px;
  perspective : 1100px;
  @media screen and (max-width : 1024px){
  width : 200px;
  font-size : 20px;
}
@media screen and (max-width : 768px){
  width : 150px;
  font-size : 15px;
}
@media screen and (max-width : 391px) {
  width : 90px;
  font-size : 10px;
}
}

  div.cardIn{
    width : 100%;
    height : 100%;
    position:relative;
    transition : 0.9s;
    transform-style : preserve-3d;

  }
  div.front, div.back {
  position: absolute;
  width: 100%; 
  height: 100%;
  backface-visibility: hidden;
  color : black;
  text-align:center;
border-radius : 20px;
}
div.front{
  background-color : rgba(255,255,255,0.4);
  display : flex;
  justify-content : center;
  align-items : center;

}
.back { 
  transform: rotateY(180deg);
  background-color :  rgba(255,255,255,0.4) ;
}

// ?????? ??? ?????????
.flip:hover .cardIn {
  transform: rotateY(180deg);
}
.icon{
  height : 100%;
  display : flex;
  flex-direction : column;
  justify-content : space-evenly;
  align-items : center;

}
img{
  width : 90px;
  display : inline-block;
  @media screen and (max-width : 768px){
  width : 50px;
}
@media screen and (max-width : 391px) {
  width : 30px;
}
}
.react,.script,.jquery,.nodejs,.mysql,.q-net{
  width : 200px;
  @media screen and (max-width : 768px){
  width : 50px;
}
@media screen and (max-width : 391px) {
  width : 30px;
}
}



`



export const portfolioBox = styled.div`
font-family: 'Pretendard-Regular';
width:1500px;
height: 120vh;
text-align: center;
font-weight: bolder;
font-size: 30px;
@media screen and (max-width : 1024px){
  width : 1024px;
  font-size : 27px;
}
@media screen and (max-width : 768px){
  width : 768px;
  font-size : 20px;
} 
.rock{
  margin-top : 150px;
}
div.imgbox{
  width : 50%;
  height  : 600px;
}
div.imgbox>img{
  max-width  : 100%;
  max-height : 100%;
  border-radius : 15px;
}

div.descbox{
  width : 50%;
  height : 600px;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : space-between;

}
.descTitle{
  border-bottom : 1px solid #f2e729;
}
.descbox>ul>li:not(.descTitle){
  font-size : 20px;
}

.descbox>ul>li:not(.learn){
  line-height : 100px;
}
.swiper-slide{
  height  : 810px;
  display : flex;
  justify-content :center;
  align-items : center;
}

.swiper-pagination-bullet-active{
  background-color : white;
}
.swiper-button-prev,.swiper-button-next{
  color : white;
}
.movie,.cafe,.clone,.blog,.restaurant,.weather{
  /* margin-top : 50px; */
  height : 100%;
  width : 1200px;
  display : flex;
  align-items : center;
  justify-content : space-between;
}
.icon>a{
  display : block;
} 
.icon{
  width : 100%;
  display : flex;
  justify-content : space-evenly;
}

`

// ????????? animation
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
    scale: 1.3,
    transition: { duration: 0.3} ,

  }
};

