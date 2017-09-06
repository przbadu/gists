import axios from 'axios';

export default {
  gist: {
    findAll: pagination =>
      axios.get(
        `https://api.github.com/users/przbadu/gists?page=${pagination.next
          .page}&per_page=${pagination.next.per_page}`
      ),
  },
};
