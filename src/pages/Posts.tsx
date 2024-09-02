import React, {useCallback, useRef, useState} from 'react';
import {PostList} from "../components/post/PostList";
import {PostItemDTO} from "../model/PostItemDTO";
import {PostForm} from "../components/post/PostForm";
import {PostsFilter} from "../components/post/PostsFilter";
import {Modal} from "../components/modal/Modal";
import {Button} from "../components/button/Button";
import {useFilteredPosts} from "../hooks/useFilteredPosts";
import {useGetPosts} from "../hooks/useGetPosts";
import {PaginationPages} from "../components/pagination/PaginationPages";
import {getPageCount} from "../utils/getPageCount";
import {PostsFiltersDTO} from "../model/PostsFiltersDTO";
import {useObserver} from "../hooks/useObserver";
import {Select} from "../components/select/Select";

export const Posts = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [posts, setPosts, totalCount] = useGetPosts(limit, page);

    const handleCreatePost = (newPost: PostItemDTO) => {
        setPosts([...posts, newPost]);
        setNewPostFormVisible(false);
    }
    const handleDeletePost = (postToDelete: PostItemDTO) => {
        setPosts(posts.filter(post => post.id !== postToDelete.id));
    }

    const [newPostFormVisible, setNewPostFormVisible] = useState<boolean>(false);
    const [filters, setFilters] = useState<PostsFiltersDTO>({search: null, sorting: null});
    const filteredPosts = useFilteredPosts(posts, filters)

    const lastElement = useRef<HTMLDivElement | null>(null)
    const nextPage = useCallback(() => setPage(page => page + 1), [])
    useObserver(lastElement, page < getPageCount(totalCount, limit), nextPage)

    return (
        <div className="App">
            <Button
                style={{marginTop: 30}}
                onClick={() => setNewPostFormVisible(true)}>Create post</Button>
            <hr style={{margin: '15px 0'}}/>
            <Modal
                visible={newPostFormVisible}
                setVisible={setNewPostFormVisible}>
                <PostForm
                    onSubmit={handleCreatePost}/>
            </Modal>
            <PostsFilter
                filter={filters}
                setFilter={setFilters}/>
            <Select
                value={limit}
                initialValue="Limit..."
                onChange={e => setLimit(Number(e.target.value))}
                options={[
                    {label: "10", value: 10},
                    {label: "25", value: 25},
                    {label: "All", value: -1}
                ]}/>
            <PostList title={"Posts"} posts={filteredPosts} onDeletePost={handleDeletePost}/>
            <div ref={lastElement} style={{height: 20}}></div>
            <PaginationPages
                totalPages={getPageCount(totalCount, limit)}
                currentPage={page}
                onChangePage={setPage}/>
        </div>
    );
}
