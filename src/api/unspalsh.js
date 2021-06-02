import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wKxvEI1lvfKwiLRg8h-WQTQlTu6wqSlV5JzvIhx4bhk'
    }
});