import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as passengerActions from 'store/modules/passenger';
import * as basicActions from 'store/modules/basic';
import {
    Info,
    FooterBox
  } from "components";
  
class InfoPage extends Component {

    _fbSelect = (idx) => {
        const { basicActions } = this.props;
        basicActions.fbSelect(idx);
    }
    componentDidMount() {
    }
    
    render() {
        const {
            select, 
        } = this.props;

        return (
            <Fragment>
                <Info />
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
    )(InfoPage)
)