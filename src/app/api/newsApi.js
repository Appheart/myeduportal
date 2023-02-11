import { api } from '.';

export const newsUrlEndPoint = (pageParam = 1) => {
  const page = parseInt(pageParam) || 1;
  return `/posts`;
};

export const getAllNews = async (page) => {
  const response = await api.get(newsUrlEndPoint(page));

  return response.data;
};
