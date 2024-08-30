import {useQuery} from "react-query";
import {axiosInstance} from "../lib/axiosInstance";
import {PostItemDTO} from "../model/PostItemDTO";
import {parseResponse} from "../lib/parseResponse";

export const useGetPost = (id: number) => {
    return useQuery(["getPost", id], () => axiosInstance
        .get<PostItemDTO>(`/posts/${id}`)
        .then(parseResponse));
}