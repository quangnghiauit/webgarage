import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

let AUTH_API = "http://localhost:8080/api/auth";

if (!(typeof AUTH_API_GLOBAL === 'undefined' || AUTH_API_GLOBAL == '')) {
    AUTH_API = AUTH_API_GLOBAL;
}

export const getMethod = (Url) => {
    axios.get(AUTH_API + Url)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            handleError(error);
        });
};

export const getWithData = (Url, data) => {
    return axios.post(AUTH_API + Url, data);
};

export const get = (Url) => {
    return axios.get(AUTH_API + Url);
};

export const post = (Url, data) => {
    return axios.post(AUTH_API + Url, data);
};

const handleError = (error) => {
    if (error.response) {
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
}

export const getRolesOfCurrentUser = () => {
    return get("/get-roles-of-current-user");
};

