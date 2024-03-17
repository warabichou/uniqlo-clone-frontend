import { useQuery } from '@tanstack/react-query';
import { AllCategories, Categories, VideoCarouselType } from '../types';
import { axiosClient } from './customAxios';

const getKidsTopSlides = async (): Promise<VideoCarouselType[]> => {
    const { data } = await axiosClient.get('/vertical-side/kids');

    return data;
};

export const useGetKidsTopSlides = () => {
    return useQuery<VideoCarouselType[], Error>({
        queryKey: ['kidsTopSlides'],
        queryFn: getKidsTopSlides,
    });
};

const getKidsCategories = async (): Promise<Categories[]> => {
    const { data } = await axiosClient.get('/categories/kids');

    return data;
};

export const useGetKidsCategories = () => {
    return useQuery<Categories[], Error>({
        queryKey: ['kidsCategories'],
        queryFn: getKidsCategories,
    });
};

const getKidsCategoriesContent = async (): Promise<AllCategories> => {
    const { data } = await axiosClient.get('/categories-content/kids');

    return data;
};

export const useGetKidsCategoriesContent = () => {
    return useQuery<AllCategories, Error>({
        queryKey: ['kidsCategoriesContent'],
        queryFn: getKidsCategoriesContent,
    });
};
