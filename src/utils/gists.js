import axios from 'axios';

export function loadGists() {
  return axios.get(
    'https://api.github.com/users/przbadu/gists?page=2&per_page=10'
  );
}
