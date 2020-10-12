import React from 'react';
import './Info.css';

const Info = ({ value, onChange, onClick }) => {
      return (
        <div className="Info">
            <div className="out-background">
                <div className="inside-background">

                    <h1> 이용안내 </h1>
                    <div className="content-body">
                        <div className="rule"> 
                            <div className="rule-list"> 
                                <div id="num"> 1</div>
                                <div id="text"> 승.하차 시 스마트폰을 사용하지 않아요!</div>
                            </div>
                            <div className="rule-list"> 
                                <div id="num"> 2</div>
                                <div id="text"> 운행 중 자리 이동을 하지 않아요!</div>
                            </div>
                            <div className="rule-list"> 
                                <div id="num"> 3</div>
                                <div id="text"> 노약자에게 자리를 양보합시다!</div>
                            </div>
                            <div className="rule-list"> 
                                <div id="num"> 4</div>
                                <div id="text"> 모든 승객은 손잡이를 꼭 잡아주세요!</div>
                            </div>
                            <div className="rule-list"> 
                                <div id="num"> 5</div>
                                <div id="text"> 버스 내에서 음식물을 먹지 않아요!</div>
                            </div>
                        </div>
                        
                        <div className="charge"> 
                            <div id="head"><strong>운임요금</strong></div>
                            <table >
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>교통카드</th>
                                        <th>현금</th>
                                        <th>조조할인</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>일반</td>
                                        <td>2,800원</td>
                                        <td>2,900원</td>
                                        <td>2,300원</td>
                                    </tr>
                                    <tr>
                                        <td>청소년</td>
                                        <td>2,000원</td>
                                        <td>2,100원</td>
                                        <td>1,600원</td>
                                    </tr>
                                    <tr>
                                        <td>어린이</td>
                                        <td>1,600원</td>
                                        <td>1,600원</td>
                                        <td>1,300원</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <p><strong>* 조조할인 조건</strong></p>
                                <p>기점 첫차 출발 시간 ~ 오전 6시 30분</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;