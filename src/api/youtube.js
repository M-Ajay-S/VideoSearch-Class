import axios from 'axios'
const KEY='AIzaSyBWIuLmYCM9SH-vrY2nzsRiGIAUx1qu7ws'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=cat&key=
export default axios.create({baseURL:'https://www.googleapis.com/youtube/v3',
    method:'get',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    },

})