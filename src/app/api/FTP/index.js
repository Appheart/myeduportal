import { api } from '..';

export const uploadFiles = (data) => {
  const response = api
    .post('/upload', data)
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((e) => {});
  return response;
};
