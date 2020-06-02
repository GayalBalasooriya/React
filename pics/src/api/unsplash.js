import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ihmVxjyLDGnYxPj4ionNo6wDJVKXOEhBtImJE1uOSqI'
    }
});