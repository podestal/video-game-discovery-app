import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4f46e6f68e3343daae191d6d5f5cc0cd'
    }
})