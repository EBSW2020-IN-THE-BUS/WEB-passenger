import React, { Fragment, useEffect } from 'react';
import './FooterBox.css';
import { Link } from 'react-router-dom';
import route from 'resources/route.png'
import driveInfo from 'resources/driveInfo.png'
import reserve from 'resources/reserve.png'
import info from 'resources/info.png'
import notice from 'resources/notice.png'

const FooterBoxItem = ({children, isSelect, text, href,iconsrc,onClick}) => {
    return (
        <Link to={href}>
            <button className="FooterBoxItem" 
            id={isSelect? 'select': ''} 
            onClick={onClick}
            disabled={isSelect}>
                <div>{children}</div>
                <div><img src={iconsrc}/></div>
                <div><strong>{text}</strong></div>
            </button>
        </Link>
    )
}

const FooterBox = ({select, fbSelect}) => {
    
    return (
        <div className="Footer-Box">
            <div className="time-box">
                
            </div>
            <FooterBoxItem text="노선도" href="/" 
            iconsrc={route}
            onClick={()=>fbSelect(1)} isSelect={select==1} 
            />
            <FooterBoxItem text="운행정보" href="/driveInfo" 
            iconsrc={driveInfo}
            onClick={()=>fbSelect(2)} isSelect={select==2} 
            />
            <FooterBoxItem text="하차예약" href="/reserve" 
            iconsrc={reserve}
            onClick={()=>fbSelect(3)} isSelect={select==3} 
            />
            <FooterBoxItem text="이용안내" href="/info" 
            iconsrc={info}
            onClick={()=>fbSelect(4)} isSelect={select==4} 
            />
            <FooterBoxItem text="공지사항" href="/notice" 
            iconsrc={notice}
            onClick={()=>fbSelect(5)} isSelect={select==5} 
            />
            {/* <Link to="/">
            <button className="btn-route"
             onClick={()=> fbSelect(1)} isSelect={select==1}
             
            // id={isSelect? 'select': ''} 
            // onClick={onClick}
            >
                <img src={button} />
                <img src={route} id="route"/>
                <span><strong>노선도</strong></span>
            </button>
            </Link>
            <Link to="/busInfo">
            <button className="btn-driveInfo"
              onClick={()=> fbSelect(2)} isSelect={select==2}
            >
                <img src={button} />
                <img src={driveInfo} id="driveInfo"/>
                <span><strong>운행정보</strong></span>
            </button>
            </Link>
            <Link to="/reserve">
            <button className="btn-reserve"
             onClick={()=> fbSelect(3)} isSelect={select==3}>
                <img src={button} />
                <img src={reserve} id="reserve"/>
                <span><strong>하차예약</strong></span>
            </button>
            </Link>
            
            <Link to="/info">
            <button className="btn-info"
             onClick={()=> fbSelect(4)} isSelect={select==4}>
                <img src={button} />
                <img src={info} id="info"/>
                <span><strong>이용안내</strong></span>
            </button>
            </Link>
            
            <Link to="/notice">
            <button className="btn-notice"
             onClick={()=> fbSelect(5)} isSelect={select==5}>
                <img src={button} />
                <img src={notice} id="notice"/>
                <span><strong>공지사항</strong></span>
            </button>
            </Link> */}
        </div>
    )
}

export default FooterBox;