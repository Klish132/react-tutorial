import React from 'react';
import {usePagination} from "../hooks/usePagination";

type PaginationPagesProps = {
    totalPages: number;
    currentPage: number;
    onChangePage: (page: number) => void;
}

export const PaginationPages = (props: PaginationPagesProps) => {

    let pages = usePagination(props.totalPages);

    return (
        <div className="page__wrapper">
            {pages.map(p =>
                <span
                    key={p}
                    className={p === props.currentPage ? " page page__current" : "page"}
                    onClick={() => props.onChangePage(p)}
                >
                    {p}
                </span>
            )}
        </div>
    );
};