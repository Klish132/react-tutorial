﻿export const getPageCount = (totalItems: number, limit: number) => {
    return Math.ceil(totalItems / limit);
}