import { api } from '..';

export const getAllSubjects = async () => {
  const response = await api.get(`/jamb/subjects`);

  return response.data;
};
