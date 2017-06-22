(function() {
    var $ = function(_) {
        return document.querySelector(_);
    };

    var thunk = (function (_ref) {
        var dispatch = _ref.dispatch,
            getState = _ref.getState;

        return function (next) {
            return function (action) {
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument);
            }

            return next(action);
            };
        };
    });

    function counter(state, action) {
        if (typeof state === 'undefined') return {num:0};

        switch(action.type) {
            case "INCREMENT":
                return {num:state.num + 1};
            case "DECREMENT":
                return {num:state.num - 1};
            default:
                return state;
        }
    };

    function tomcat(state, action) {
        if (typeof state === 'undefined') return {};

        switch(action.type) {
            case "INCREMENT2":
                return {num:state.num + 1};
            case "DECREMENT2":
                return {num:state.num - 1};
            default:
                return state;
        }
    };

    var store = Redux.createStore(Redux.combineReducers({
        counter:counter,
        tomcat:tomcat
    }), Redux.applyMiddleware(thunk));
    var $show = $('#value');

    function render() {
        $show.innerHTML = store.getState().counter.num.toString();
    };

    render();
    store.subscribe(render);

    $('#increment').addEventListener('click', function() {
        store.dispatch({type:"INCREMENT"});
    });
    $('#decrement').addEventListener('click', function() {
        store.dispatch({type:"DECREMENT"});
    });
    $('#incrementIfOdd').addEventListener('click', function() {
        if (store.getState().counter.num % 2 !== 0) {
            store.dispatch({type:"INCREMENT"});
        }
    });
    $('#incrementAsync').addEventListener('click', function() {
        setTimeout(function () {
            store.dispatch({ type: 'INCREMENT' })
        }, 1000);
    });
})();