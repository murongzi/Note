import CONSTANT from '../Constat/counter.constas';

export default {
    add(params) {
        return dispatch => {
            dispatch({type:CONSTANT.COUNT_ADD});
        }
    }
}