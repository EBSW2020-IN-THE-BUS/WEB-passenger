import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import { connectRouter } from 'connected-react-router'

import basic from 'store/modules/basic';
import passenger from 'store/modules/passenger';

export default (history) => combineReducers({
    router: connectRouter(history),
    basic,
    passenger,
    pender: penderReducer, //pender 리듀서 추가
});