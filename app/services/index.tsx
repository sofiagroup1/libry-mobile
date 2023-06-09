import axios from 'axios';

const callService = async (
  BASE_URL: string,
  END_POINT: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  token: string | null,
  body: object | null,
) => {
  let response_data = {};
  const URL = BASE_URL + END_POINT;

  try {
    return new Promise(async (resolve, reject) => {
      if (method === 'POST') {
        await axios
          .post(URL, body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            response_data = response.data;
            resolve(response_data);
            console.log(response.data);
          })
          .catch(error => {
            reject(error);
            console.log(`SERVICE_ERROR ${URL} =>`, error);
          });
      } else if (method === 'GET') {
        await axios
          .get(URL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {
            response_data = response.data;
            resolve(response_data);
            console.log(response.data);
          })
          .catch(error => {
            reject(error);
            console.log(`SERVICE_ERROR ${URL} =>`, error);
          });
      }
    });
  } catch (error) {
    console.log(`SERVICE_ERROR ${URL} =>`, error);
  }
};

export {callService};
