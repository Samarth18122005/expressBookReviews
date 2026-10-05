const axios = require("axios");

const BASE_URL = "http://localhost:5000";

function getAllBooks() {
    return axios.get(`${BASE_URL}/`);
}

function getBookByISBN(isbn) {
    return axios.get(`${BASE_URL}/isbn/${isbn}`);
}

function getBooksByAuthor(author) {
    return axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
}

function getBooksByTitle(title) {
    return axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};