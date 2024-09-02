import React from 'react';
import {usePagination} from "../../hooks/usePagination";
import styles from "./PaginationPages.module.css"

type PaginationPagesProps = {
    totalPages: number;
    currentPage: number;
    onChangePage: (page: number) => void;
}

export const PaginationPages = (props: PaginationPagesProps) => {
    let pages = usePagination(props.totalPages);

    return (
        <div className={styles.pageWrapper}>
            {pages.map(page =>
                <span
                    key={page}
                    className={page === props.currentPage ? [styles.page, styles.pageCurrent].join(' ') : styles.page}
                    onClick={() => props.onChangePage(page)}
                >
                    {page}
                </span>
            )}
        </div>
    );
};