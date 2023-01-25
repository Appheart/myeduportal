import { api } from '.';

export const getAllNews = async (pageParam = 1) => {
  const response = await api.get(`/news?page=${pageParam}`);

  return response.data;
};
