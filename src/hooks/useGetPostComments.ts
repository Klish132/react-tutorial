import {useQuery} from "react-query";
import {axiosInstance} from "../lib/axiosInstance";
import {parseResponse} from "../lib/parseResponse";
import {PostCommentItemDTO} from "../model/PostCommentItemDTO";

export const useGetPostComments = (id: number) => {
    return useQuery(["getPostComments", id], () => axiosInstance
        .get<PostCommentItemDTO[]>(`/posts/${id}/comments`)
        .then(parseResponse));
}