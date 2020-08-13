import React, { Fragment, useEffect } from 'react';
import './ReserveInfo.css';
import Input from '@enact/moonstone/Input';
import Dialog from '@enact/moonstone/Dialog';
import Button from '@enact/moonstone/Button';

const ReserveInfo = ({  disabled, value, onChange, onClick,state }) => {
    let color = disabled ? '#EDEDED' : 'white';
    
    return (
        <div className="ReserveInfo">
            <div className="out-background">
                <div className="inside-background">


                <Input onChange={onChange} size="small" type="text" value={value}/>
                    <button 
                    id="reg_btn"
                    onClick={ onClick }
                    >
                    확인
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReserveInfo;