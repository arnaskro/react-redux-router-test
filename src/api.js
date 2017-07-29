export const API_URL = "https://reqres.in/api";
export const GITHUB_API_URL = "https://api.github.com";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const LIST_USERS = (page = 1) => {
    let pageAttribute = page > 1 ? ("?page=" + page) : "";
    return API_URL + "/users" + pageAttribute;
}

export const GET_PROGRAMMERS = () => {
    return GITHUB_API_URL + "/users?since=" + getRandomInt(1, 10000);
}

export const GET_PROGRAMMER = (username) => {
    return GITHUB_API_URL + "/users/" + username;
}
