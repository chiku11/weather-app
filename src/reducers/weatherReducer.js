const initialState = {
    fetching: false,
    weatherData:{},
    err: {},
    u:'f'
}
const weatherReducer = (state=initialState, action) => {

    switch(action.type) {

        case 'FETCH_WEATHER_PENDING':{
            return Object.assign({}, state, {fetching: action.payload});
        }

        case 'FETCH_WEATHER_FULFILLED':{
            return Object.assign({}, state, {weatherData: action.payload, fetching:false});
        }

        case 'FETCH_WEATHER_REJECTED':{
            return Object.assign({}, state, {err: action.payload});
        }

        case 'WEATHER_UNIT_PREFERENCE':{
            return Object.assign({}, state, {u: action.payload});
        }

        default:
            return state;

    }
}

export default weatherReducer