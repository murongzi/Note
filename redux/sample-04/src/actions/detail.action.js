import constant from '../constants/detail.constant';

export default {
    getAdd:() => {
        return (dispatch) => {
            dispatch({type:constant.DETAIL});
        }
    }
}