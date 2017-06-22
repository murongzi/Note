import constant from '../constants/home.constant';

export default {
    getAdd:() => {
        console.log('fasdfadsfadfå');

        return (dispatch) => {
            dispatch({type:constant.HOME});
        }
    }
}