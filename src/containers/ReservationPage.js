import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as passengerActions from 'store/modules/passenger';
import * as basicActions from 'store/modules/basic';
import {
    ReserveInfo,
    FooterBox
  } from "components";
  
class ReservationPage extends Component {

    _input = (e) => {
        const { passengerActions } = this.props;
        passengerActions.input(e.value);
    }

    _fbSelect = (idx) => {
        const { basicActions } = this.props;
        basicActions.fbSelect(idx);
    }
    _register =() => {
        const { 
            passengerActions,
            input
        } = this.props;
        console.log(input)

    }
    componentDidMount() {
    }
    
    render() {
        const {
            select, 
            input,
            
            showModal
        } = this.props;

        return (
            <Fragment>
                <ReserveInfo 
                name='입력 예시'
                label='input'
                value={input}
                placeholder='입력 예시'
                onChange={this._input}
                onClick={this._register}
                >
                    </ReserveInfo>
                <FooterBox select={select} fbSelect={this._fbSelect}/>
            </Fragment>
        )
    }
}


export default withRouter(
    connect(
        // props 로 넣어줄 스토어 상태값
        state => ({
            select: state.basic.getIn(['basic', 'select']),
            input: state.passenger.get('input'),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            basicActions: bindActionCreators(basicActions, dispatch),
            passengerActions : bindActionCreators(passengerActions, dispatch),
        })
    )(ReservationPage)
)