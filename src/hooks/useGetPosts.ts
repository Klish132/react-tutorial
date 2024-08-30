import {useQuery} from "react-query";
import {axiosInstance} from "../lib/axiosInstance";
import {PostItemDTO} from "../model/PostItemDTO";
import {AxiosResponse} from "axios";

export const useGetPosts = (limit: number = 10, page: number = 1) => {
    return useQuery(["getPosts"], () => axiosInstance
        .get<PostItemDTO[]>('/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        .then(<TData>(response: AxiosResponse<TData>) => {
            let totalCount = response.headers['x-total-count'];
            return { data: response.data, totalCount: totalCount ? Number(totalCount) : -1 };
        }));
}