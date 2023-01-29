import { api } from '..';

export const uploadFiles = (data) => {
  const response = api
    .post('/ftp/upload', data)
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((e) => {});
  return response;
};
