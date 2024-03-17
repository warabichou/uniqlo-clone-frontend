import { useQuery } from '@tanstack/react-query';
import { GridRowType, ProductsListType } from '../types';
import { axiosClient } from './customAxios';

const getCartRankingList = async (): Promise<ProductsListType[]> => {
    const { data } = await axiosClient.get('/cart/ranking-list');

    return data;
};

export const useGetCartRankingList = () => {
    return useQuery<ProductsListType[], Error>({
        queryKey: ['babyTopSlides'],
        queryFn: getCartRankingList,
    });
};

const getFromUNIQLOList = async (): Promise<GridRowType[]> => {
    const { data } = await axiosClient.get('/search-menu/uniqlo');

    return data;
};

export const useGetFromUNIQLOList = () => {
    return useQuery<GridRowType[], Error>({
        queryKey: ['UNIQLOList'],
        queryFn: getFromUNIQLOList,
    });
};

const getRecommendedInfo = async (): Promise<GridRowType[]> => {
    const { data } = await axiosClient.get('/search-menu/recommended');

    return data;
};

export const useGetRecommendedInfo = () => {
    return useQuery<GridRowType[], Error>({
        queryKey: ['recommendedInfo'],
        queryFn: getRecommendedInfo,
    });
};

const getNews = async (): Promise<GridRowType[]> => {
    const { data } = await axiosClient.get('/search-menu/news');

    return data;
};

export const useGetNews = () => {
    return useQuery<GridRowType[], Error>({
        queryKey: ['news'],
        queryFn: getNews,
    });
};

const getSpecialCollection = async (): Promise<GridRowType[]> => {
    const { data } = await axiosClient.get('/search-menu/special');

    return data;
};

export const useGetSpecialCollection = () => {
    return useQuery<GridRowType[], Error>({
        queryKey: ['specialCollection'],
        queryFn: getSpecialCollection,
    });
};

const getUTList = async (): Promise<GridRowType[]> => {
    const { data } = await axiosClient.get('/search-menu/ut');

    return data;
};

export const useGetUTList = () => {
    return useQuery<GridRowType[], Error>({
        queryKey: ['utList'],
        queryFn: getUTList,
    });
};

const getShopInfo = async (): Promise<GridRowType[]> => {
    const { data } = await axiosClient.get('/search-menu/shop');

    return data;
};

export const useGetShopInfo = () => {
    return useQuery<GridRowType[], Error>({
        queryKey: ['shopInfo'],
        queryFn: getShopInfo,
    });
};
