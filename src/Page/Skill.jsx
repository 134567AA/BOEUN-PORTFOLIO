import React from 'react'
import * as Styled from '../Style/Style'


const Skill = () => {
  return (
    <>
  <Styled.skillBox className='d-flex justify-content-evenly align-items-center'>

{/* *********************** front *****************************************/}
  <Styled.skillFlip >
      <div className='flip'>
      <div className='cardIn'>
          {/* front */}
          <div className='front'>
            <h2>Front</h2>
          </div>
          {/* back */}
          <div className='back'>
          <div className='icon'>
            <div> 
              <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/htmlLogo.png" alt="html icon" className='html' />
              <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/css-logo.png" alt="css icon" className='css' />
            </div>
            <div>
            <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/styledComponent.png" alt="스타일 컴포넌트 icon" className='styled' />
            <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/bootsrap.png" alt="bootstrap icon" className='bootstrap ' />
            </div>
            <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/reactJS.png" alt="react" className='react'  />
          
        </div>
          </div>
      </div>
      </div>
    </Styled.skillFlip>
{/* *************************javascript & jquery *******************************************/}
    <Styled.skillFlip >
      <div className='flip'>
      <div className='cardIn'>
          {/* front */}
          <div className='front'>
          <h2 className=''>Language</h2>
          </div>
          {/* back */}
          <div className='back'>  
          <div className='icon'>
          
          <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/javasccript.png" alt="script" className='script' style={{width : "150px"}} />
          <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/jquery logo.png" alt="jquery" className='jquery' style={{width : "150px"}} />
        </div>
          </div>
      </div>
      </div>
    </Styled.skillFlip>

{/* *************************nodejs & mysql **************************/}
<Styled.skillFlip >
      <div className='flip'>
      <div className='cardIn'>
          <div className='front'>
            <h2>Backend & DB</h2>
          </div>
          <div className='back'>
          <div className='icon'>
          <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/nodejs-1-logo.png" alt="nodejs" className='nodeJs' style={{width : "150px"}} />
          <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/mysql.png" alt="mysql" style={{width : "150px"}} />
        </div>
          </div>
      </div>
      </div>
    </Styled.skillFlip>
    <Styled.skillFlip >
      <div className='flip'>
      <div className='cardIn'>
          <div className='front'>
            <h2>Certificate</h2>
          </div>
          <div className='back'>
          <div className='icon'>
            <img src="http://134567AA.github.io/BOEUN-PORTFOLIO/img/icon/q-net.png" alt="q-net" style={{width : "150px"}}  />
            <div className='fw-bold'> 
              <p>정보처리 기능사 </p>
              <p>웹 디자인 기능사(필기 합격)</p>
            </div>
        </div>
          </div>
      </div>
      </div>
    </Styled.skillFlip>
  </Styled.skillBox>

  </>
  )
}

export default Skill