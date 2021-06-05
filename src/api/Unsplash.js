import axios from 'axios';

 export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aYWOO0lYHXjRqwsZPNWSZ9ut44fFwuYgpbqy4FxfDo0'
    }
});