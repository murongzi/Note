export default {
    count:(state, action) => {
        if (typeof state === 'undefined') return 0;

        switch (action.type) {
            case "add":
                return state + 1;

            default: state;
        }
    }
}