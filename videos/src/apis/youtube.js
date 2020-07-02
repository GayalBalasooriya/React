import axios from 'axios'

const KEY = 'AIzaSyB9_l1pNFmT-e_1SjYiUERiNAciJxKxm5Q'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
