import axios from 'axios';

export default {
  gist: {
    findAll: pagination =>
      axios.get(
        `https://api.github.com/users/przbadu/gists?page=${pagination.page}&per_page=${pagination.per_page}`
      ),
  },
};
