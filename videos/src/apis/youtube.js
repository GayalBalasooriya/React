import axios from 'axios'

const KEY = 'AIzaSyDn-dDIcmgUDLXQxakifq9WT4ecC6hCQgw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
