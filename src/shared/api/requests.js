import axiosApi from "./AxiosApi";

export const getGalleryArchivalPhotos = () => {
  return axiosApi.get('/api/v1/gallery/GalleryArchivalPhotos/');
};

export const getGalleryNewShapes = () => {
  return axiosApi.get('/api/v1/gallery/GalleryNewShapes/');
};

export const getGalleryOshTour = () => {
  return axiosApi.get('/api/v1/gallery/GalleryOshTour/');
};

export const getViewCard = () => {
  return axiosApi.get('/api/v1/news/media/');
}

export const getNews = () => {
  return axiosApi.get('/api/v1/news/news/');
}

export const getDetailNews = (id) => {
  return axiosApi.get(`/api/v1/news/news/${id}/`);
}

export const getDestricts = () => {
  return axiosApi.get('/api/v1/passport/type_information/');
}

export const getGlobalSettings = () => {
  return axiosApi.get('/api/v1/base/settings/');
}