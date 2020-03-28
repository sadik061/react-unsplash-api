import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID LMIQR6wGdsxeH1LC4PhdQ262T3uI6FxKhCSNQzwOpY8'
    }
});