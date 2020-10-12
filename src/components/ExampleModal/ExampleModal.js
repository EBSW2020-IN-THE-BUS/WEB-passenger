  
import React, { Component, Fragment } from 'react';
import './ExampleModal.css';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as passengerActions from 'store/modules/passenger';
import Dialog from '@enact/moonstone/Dialog';

import Button from '@enact/moonstone/Button';
class ExampleModal extends Component {
    _setIsModalWithTrue = () => {
        // this.setState({ showModal: true });
        const { passengerActions, showModal
            } = this.props;   
            passengerActions.setIsModalWithTrue(!showModal);
        }
    
        _setIsModalWithFalse = () => {
        // this.setState({ showModal: false });
        const { passengerActions, showModal
        } = this.props;   
        passengerActions.setIsModalWithFalse(!showModal);
        }

        componentDidMount() {
        
        }
    
        render(){
            const {
                showModal
            } = this.props;
     return (
        <div id="Modal">
            <header>
                    <span>예시</span>
            </header>
            <button 
                    style={{cursor:'pointer'}}
                    onClick={this._setIsModalWithFalse}>
                    취소</button>
        </div>
        )
     }
}

export default withRouter(
    connect(
        // props 로 넣어줄 스토어 상태값
        state => ({ 
            showModal : state.passenger.get('showModal'),
    }),
    // props 로 넣어줄 액션 생성함수
    dispatch => ({
        passengerActions: bindActionCreators(passengerActions, dispatch),
    })
)(ExampleModal)
)