import { useQuery } from '@tanstack/react-query';
import { AllCategories, Categories, VideoCarouselType } from '../types';
import { axiosClient } from './customAxios';

const getMenTopSlides = async (): Promise<VideoCarouselType[]> => {
    const { data } = await axiosClient.get('/vertical-side/men');

    return data;
};

export const useGetMenTopSlides = () => {
    return useQuery<VideoCarouselType[], Error>({
        queryKey: ['menTopSlides'],
        queryFn: getMenTopSlides,
    });
};

const getMenCategories = async (): Promise<Categories[]> => {
    const { data } = await axiosClient.get('/categories/men');

    return data;
};

export const useGetMenCategories = () => {
    return useQuery<Categories[], Error>({
        queryKey: ['menCategories'],
        queryFn: getMenCategories,
    });
};

const getMenCategoriesContent = async (): Promise<AllCategories> => {
    const { data } = await axiosClient.get('/categories-content/men');

    return data;
};

export const useGetMenCategoriesContent = () => {
    return useQuery<AllCategories, Error>({
        queryKey: ['menCategoriesContent'],
        queryFn: getMenCategoriesContent,
    });
};
