import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { pender } from 'redux-pender';




const INPUT = 'passenger/INPUT';
const REGISTER = 'passenger/REGISTER';


/*--------create action--------*/
export const input = createAction(INPUT);
export const register = createAction(REGISTER);


/*--------state definition--------*/
const initialState = Map({

input:'',
});
/*--------reducer--------*/
export default handleActions({
    [INPUT]: (state, action) => {
        console.log("input text=> " + action.payload);
        return state.set('input', action.payload);
    },
    ...pender({
        type: register,
        onSuccess: (state, action) => {
             return state;
        },
    }),
}, initialState);