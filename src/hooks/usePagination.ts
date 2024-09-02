import {useMemo} from "react";

export const usePagination = (totalPages: number) => {
    return useMemo(() => {
        let pages = []
        for (let page = 1; page <= totalPages; page++) {
            pages.push(page)
        }
        return pages;
    }, [totalPages]);
}