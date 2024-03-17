import { useQuery } from '@tanstack/react-query';
import { VideoCarouselType, Categories, AllCategories } from '../types';
import { axiosClient } from './customAxios';

const getWomenTopSlides = async (): Promise<VideoCarouselType[]> => {
    const { data } = await axiosClient.get('/vertical-side/women');

    return data;
};

export const useGetWomenTopSlides = () => {
    return useQuery<VideoCarouselType[], Error>({
        queryKey: ['womenTopSlides'],
        queryFn: getWomenTopSlides,
    });
};

const getWomenCategories = async (): Promise<Categories[]> => {
    const { data } = await axiosClient.get('/categories/women');

    return data;
};

export const useGetWomenCategories = () => {
    return useQuery<Categories[], Error>({
        queryKey: ['womenCategories'],
        queryFn: getWomenCategories,
    });
};

const getWomenCategoriesContent = async (): Promise<AllCategories> => {
    const { data } = await axiosClient.get('/categories-content/women');

    return data;
};

export const useGetWomenCategoriesContent = () => {
    return useQuery<AllCategories, Error>({
        queryKey: ['womenCategoriesContent'],
        queryFn: getWomenCategoriesContent,
    });
};
