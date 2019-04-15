// import axios from 'axios';
// import { Base64 } from 'js-base64';

import OAuth from 'oauth';

const fetchLocationWeather = (city, dispatch) => {
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
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location='+city+'&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                dispatch({type:'FETCH_WEATHER_REJECTED', payload: err});
            } else {
                dispatch({type:'FETCH_WEATHER_FULFILLED', payload: JSON.parse(data)});
            }
        }
    );

    
    // dispatch({
    //     type: 'FETCH_WEATHER',
    //     payload: request.get('https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json')
    // })    
}

export default fetchLocationWeather;