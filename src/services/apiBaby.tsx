import { useQuery } from '@tanstack/react-query';
import { Categories, AllCategories, VideoCarouselType } from '../types';
import { axiosClient } from './customAxios';

const getBabyTopSlides = async (): Promise<VideoCarouselType[]> => {
    const { data } = await axiosClient.get('/vertical-side/baby');

    return data;
};

export const useGetBabyTopSlides = () => {
    return useQuery<VideoCarouselType[], Error>({
        queryKey: ['babyTopSlides'],
        queryFn: getBabyTopSlides,
    });
};

const getBabyCategories = async (): Promise<Categories[]> => {
    const { data } = await axiosClient.get('/categories/baby');

    return data;
};

export const useGetBabyCategories = () => {
    return useQuery<Categories[], Error>({
        queryKey: ['babyCategories'],
        queryFn: getBabyCategories,
    });
};

const getBabyCategoriesContent = async (): Promise<AllCategories> => {
    const { data } = await axiosClient.get('/categories-content/baby');

    return data;
};

export const useGetBabyCategoriesContent = () => {
    return useQuery<AllCategories, Error>({
        queryKey: ['babyCategoriesContent'],
        queryFn: getBabyCategoriesContent,
    });
};
