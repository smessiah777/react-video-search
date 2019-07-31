import axios from 'axios'

const KEY = 'AIzaSyC04JEVLZ3P6qXinapUNlqUhYxN4iYByjY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
        
    }
});



