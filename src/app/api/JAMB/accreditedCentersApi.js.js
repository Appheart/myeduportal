import { api } from '..';

export const getAllAccreditedCenters = async () => {
  const response = await api.get(`/jamb/accredited_centers`);

  return response.data;
};
