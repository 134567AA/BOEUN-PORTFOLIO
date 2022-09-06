import React from 'react'
import * as Styled from '../Style/Style'
import {Card, CardImg} from 'react-bootstrap'

const Features = () => {

  return (
    <Styled.featureBox className='test'> 
    <div className='d-flex justify-content-evenly align-items-center te'>
        <Card style={{width : "20rem",color: "black", background:" rgba(255,255,255,0.7)"}}>
        <div className='iconBox'>
            <img src="img/icon/htmlLogo.png" alt="html icon" className='html' />
            <img src="img/icon/css-logo.png" alt="css icon" className='css' />
            <img src="img/icon/styledComponent.png" alt="스타일 컴포넌트 icon" className='styled' />
            <img src="img/icon/bootsrap.png" alt="bootstrap icon" className='bootstrap' />
        </div>
          <Card.Body>
            <Card.Text> HTML / CSS</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width : "20rem",color: "black", background:" rgba(255,255,255,0.7)"}}>
          <div className='iconBox'>
            <img src="img/icon/javasccript.png" alt="script" className='script' />
            <img src="img/icon/jquery logo.png" alt="jquery" className='jquery' />
          </div>
          <Card.Body>
            <Card.Text>Javascript / Jquery</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width : "20rem",color: "black", background:" rgba(255,255,255,0.7)"}}>
          <div className='iconBox'>
            <img src="img/icon/reactJS.png" alt="react logo" style={{width : '250px'}} className='react' />
          </div>
          <Card.Body>
            <Card.Text>React</Card.Text>
          </Card.Body>
        </Card>
         <Card style={{width : "20rem",color: "black", background:" rgba(255,255,255,0.7)"}}>
          <div className='iconBox'>
            <img src="img/icon/nodejs-1-logo.png" alt="nodeJs icon"  style={{width : '200px'}} className='nodejs'/>
            <img src="img/icon/mysql.png" alt="mysql icon"  style={{width : '200px'}} className='sql'/>
          </div>
          <Card.Body>
            <Card.Text>NodeJS / MySQL</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Styled.featureBox>
  )
}

export default Features