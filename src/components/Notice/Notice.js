import React from 'react';
import './Notice.css';

const Notice = () => {
      return (
        <div className="Notice">
            <div className="out-background">
                <div className="inside-background">
                    <iframe id="frame"
                    src="http://www.gbis.go.kr/gbis2014/bbs.action?cmd=notice" 
                    width="950px" 
                    height="360px">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Notice;