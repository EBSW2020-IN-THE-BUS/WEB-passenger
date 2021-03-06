import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as basicActions from 'store/modules/basic';
import * as passengerActions from 'store/modules/passenger';
import {
    RouteMap,
    FooterBox
  } from "components";
import { FaDAndDBeyond } from 'react-icons/fa';

class RouteMapPage extends Component {
    _fbSelect = (idx) => {
        const { basicActions } = this.props;
        basicActions.fbSelect(idx);
    }
    
    componentDidMount() {
        const { passengerActions} = this.props;
        const routeId =200000279;
        passengerActions.getBusRouteStationList(routeId);
        
    }

    render() {
        const {
            select,
            busRouteStationList
        } = this.props;
        return (
            
           
            <Fragment>
                <RouteMap busRouteStationList={busRouteStationList}/>
                
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
            busRouteStationList: state.passenger.get('busRouteStationList'),
        }),
        // props 로 넣어줄 액션 생성함수
        dispatch => ({
            basicActions: bindActionCreators(basicActions, dispatch),
            passengerActions: bindActionCreators(passengerActions, dispatch)
        })
    )(RouteMapPage)
)