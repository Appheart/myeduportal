import { api } from '..';

export const getAllAccreditedCenters = async (page) => {
  const response = await api.get(`/jamb/accredited_centers?page=${page}`);

  return response.data;
};
