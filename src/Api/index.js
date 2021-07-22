import axios from 'axios';

let API_URL = 'https://www.themealdb.com/api/json/v1/1';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
