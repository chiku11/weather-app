const initialState = {
    fetching: true,
    weatherData:{},
    err: {}
}
const weatherReducer = (state=initialState, action) => {

    switch(action.type) {

        case 'FETCH_WEATHER_PENDING':{
            return Object.assign({}, state, {fetching: action.payload.fetching});
        }

        case 'FETCH_WEATHER_FULFILLED':{
            return Object.assign({}, state, {weatherData: action.payload});
        }

        case 'FETCH_WEATHER_REJECTED':{
            return Object.assign({}, state, {err: action.payload});
        }

    }
    return state;
}

export default weatherReducer