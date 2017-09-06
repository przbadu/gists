import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export default {
  gist: {
    findAll: pagination =>
      axios.get(
        `${BASE_URL}/users/przbadu/gists?page=${pagination.page}&per_page=${pagination.per_page}`
      ),

    find: gistId => axios.get(`${BASE_URL}/gists/${gistId}`),
  },
};
