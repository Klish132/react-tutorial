import {EPostsSorting} from "./EPostsSorting";

export type PostsFiltersDTO = {
    search: string | null,
    sorting: EPostsSorting | null
}