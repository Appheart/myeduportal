import { api } from '..';

export const getAllTextBooks = async () => {
  const response = await api.get(`/jamb/textbooks`);

  return response.data;
};
