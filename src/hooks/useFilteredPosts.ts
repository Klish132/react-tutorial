﻿import {PostItemDTO} from "../model/PostItemDTO";
import {PostsFiltersDTO} from "../model/PostsFiltersDTO";
import {useMemo} from "react";
import {EPostsSorting} from "../model/EPostsSorting";

export const useFilteredPosts = (posts: PostItemDTO[], filters: PostsFiltersDTO) => {
    return useMemo(() => {
        console.log("Got sorted abd searched posts")

        let newPosts;
        switch (+filters.sorting) {
            case EPostsSorting.Title:
                newPosts = [...posts].sort((p1, p2) => p1.title.localeCompare(p2.title))
                break
            case EPostsSorting.Body:
                newPosts = [...posts].sort((p1, p2) => p1.body.localeCompare(p2.body))
                break
            default:
                newPosts = [...posts]
                break
        }

        if (filters.search) {
            newPosts = newPosts.filter(p => p.title.toLowerCase().includes(filters.search.toLowerCase()))
        }

        return newPosts
    }, [filters, posts]);
}