import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as passengerActions from 'store/modules/passenger';
import * as basicActions from 'store/modules/basic';
import Dialog from '@enact/moonstone/Dialog';
import Notification from '@enact/moonstone/Notification';
import {
    ReserveInfo,
    FooterBox,
    Modal
  } from "components";
  
class ReservationPage extends Component {

    _fbSelect = (idx) => {
        const { basicActions } = this.props;
        basicActions.fbSelect(idx);
    }
    _isSelected = () => {
        const { passengerActions, isSelected } = this.props;
        passengerActions.isSelected(!isSelected);
    }
    _selectStation =(e) => {
        const { passengerActions,station } = this.props;
        passengerActions.selectStation(e.target.value);
    }
    _reserveStation =() => {
        const { passengerActions,color,station } = this.props;
        passengerActions.reserveStation(station,color);
    }
    handleEvent= (ev) => {
        ev.selected = true;
    }
    componentDidMount() {
        const { passengerActions} = this.props;
        const routeId =200000279;
        passengerActions.getBusRouteStationList(routeId);
    }
    render() {
        const {
            select, 
            onToggle,
            isSelected,
            station,
            color,
            busRouteStationList
        } = this.props;

        
        return (
            <Fragment>
                <ReserveInfo 
                leaveStation="5"
                arriveTime="17:00"
                busRouteStationList={busRouteStationList}
                // anoymous={handleEvent}
                station={station}
                onChange={this._selectStation}
                onClick={
                    this._reserveStation
                }
                color = {color}
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
            station : state.passenger.get('station'),
            isSelected : state.passenger.get('isSelected'),
            select: state.basic.getIn(['basic', 'select']),
            input: state.passenger.get('input'),
            showModal : state.passenger.get('showModal'),
            color : state.passenger.get('color'),
            busRouteStationList: state.passenger.get('busRouteStationList'),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            basicActions: bindActionCreators(basicActions, dispatch),
            passengerActions : bindActionCreators(passengerActions, dispatch),
        })
    )(ReservationPage)
)