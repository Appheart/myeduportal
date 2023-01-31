import { api } from '..';

import toast, { Toaster } from 'react-hot-toast';

export const uploadFtilesEndpoint = '/ftp/upload';

export const uploadFiles = (data) => {
  const response = api
    .post(uploadFtilesEndpoint, data)
    .then((response) => {
      onSuccess(response.data);
      toast.success('Successful');
    })
    .catch((e) => {});
  return response;
};
