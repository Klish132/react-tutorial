import React, {useState} from 'react';
import "./styles/app.css"
import PostList from "./components/post/PostList";
import {PostItemDTO} from "./model/PostItemDTO";
import PostForm from "./components/post/PostForm";
import {EPostsSorting} from "./model/EPostsSorting";
import PostsFilter from "./components/post/PostsFilter";
import Modal from "./components/modal/Modal";
import Button from "./components/button/Button";
import {useFilteredPosts} from "./hooks/useFilteredPosts";
import {useGetPosts} from "./hooks/useGetPosts";

function App() {

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const { data: getPostsMetadata } = useGetPosts(limit, page);
    const [posts, setPosts] = useState(getPostsMetadata?.data ? getPostsMetadata.data : []);

    const handleCreatePost = (newPost: PostItemDTO) => {
        setPosts([...posts, newPost]);
        setNewPostFormVisible(false);
    }
    const handleDeletePost = (post: PostItemDTO) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const [newPostFormVisible, setNewPostFormVisible] = useState<boolean>(false);
    const [filters, setFilters] = useState({search: "", sorting: EPostsSorting.Title});
    const filteredPosts = useFilteredPosts(posts, filters)

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
            <PostList title={"Posts"} posts={filteredPosts} onDeletePost={handleDeletePost}/>
        </div>
    );
}

export default App;
