import {useQuery} from "react-query";
import {axiosInstance} from "../lib/axiosInstance";
import {PostItemDTO} from "../model/PostItemDTO";
import {AxiosResponse} from "axios";
import React, {useEffect, useMemo, useState} from "react";

export const useGetPosts = (limit: number = 10, page: number = 1): [PostItemDTO[], React.Dispatch<React.SetStateAction<PostItemDTO[]>>, number] => {

    const [posts, setPosts] = useState<PostItemDTO[]>([]);

    const {data: postsMetadata} = useQuery(["getPosts", limit, page], () => axiosInstance
        .get<PostItemDTO[]>('/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        .then(<TData>(response: AxiosResponse<TData>) => {
            let totalCount = response.headers['x-total-count'];
            return {posts: response.data, totalCount: totalCount ? Number(totalCount) : -1};
        }));

    useEffect(() => {
        let newPosts = postsMetadata?.posts ? postsMetadata.posts : []
        setPosts(posts => [...posts, ...newPosts]);
    }, [postsMetadata?.posts])

    return useMemo(() => [
        posts,
        setPosts,
        postsMetadata?.totalCount ?? -1
    ], [posts, postsMetadata])
}