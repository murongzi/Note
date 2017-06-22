import CONSTANT from '../Constat/counter.constas';

export default {
    count:(state, action) => {
        if (typeof state === 'undefined') return 0;

        switch (action.type) {
            case CONSTANT.COUNT_ADD:
                return state + 1;

            default: state;
        }
    }
}