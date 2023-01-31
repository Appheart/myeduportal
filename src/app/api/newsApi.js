import { api } from '.';

export const newsUrlEndPoint = (pageParam = 1) => {
  return `/news?page=${pageParam}`;
};

export const getAllNews = async () => {
  const response = await api.get(newsUrlEndPoint());

  return response.data;
};
