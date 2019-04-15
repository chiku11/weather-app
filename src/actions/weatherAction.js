// import axios from 'axios';
// import { Base64 } from 'js-base64';

import OAuth from 'oauth';

export const setUnitPreference = (unit, dispatch) => {
    dispatch({type:'WEATHER_UNIT_PREFERENCE', payload: unit})
} 

const fetchLocationWeather = (city, unit, dispatch) => {
    var header = {
        "X-Yahoo-App-Id": "app_id"
    };
    var request = new OAuth.OAuth(
        null,
        null,
        'client_id',
        'client_secret',
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );

    dispatch({type:'FETCH_WEATHER_PENDING',payload: true});
    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location='+city+'&format=json&u='+unit,
        null,
        null,
        function (err, data, result) {
            if (err) {
                dispatch({type:'FETCH_WEATHER_REJECTED', payload: err});
            } else {
                setTimeout(() => {
                    console.log(`Intentional dealy to display progress bar. Please remove the timeout around the dispatch`);
                    dispatch({type:'FETCH_WEATHER_FULFILLED', payload: JSON.parse(data)});
                }, 2000);
            }
        }
    );

    
    // dispatch({
    //     type: 'FETCH_WEATHER',
    //     payload: request.get('https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json')
    // })    
}

export default fetchLocationWeather;