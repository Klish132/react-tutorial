import React, {useMemo, useState} from 'react';
import "./styles/app.css"
import PostList from "./components/post/PostList";
import {PostItemDTO} from "./model/PostItemDTO";
import PostForm from "./components/post/PostForm";
import {EPostsSorting} from "./model/EPostsSorting";
import PostsFilter from "./components/post/PostsFilter";
import Modal from "./components/modal/Modal";
import Button from "./components/button/Button";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", content: "Z"},
        {id: 2, title: "TS", content: "A"}
    ]);

    const handleCreatePost = (newPost: PostItemDTO) => {
        setPosts([...posts, newPost]);
        setNewPostFormVisible(false);
    }
    const handleDeletePost = (post: PostItemDTO) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const [filter, setFilter] = useState({search: "", sorting: EPostsSorting.Title});
    const sortedAndSearchedPosts = useMemo(() => {
        console.log("Got sorted abd searched posts")

        let newPosts;
        switch (+filter.sorting) {
            case EPostsSorting.Title:
                newPosts = [...posts].sort((p1, p2) => p1.title.localeCompare(p2.title))
                break
            case EPostsSorting.Content:
                newPosts = [...posts].sort((p1, p2) => p1.content.localeCompare(p2.content))
                break
            default:
                newPosts = [...posts]
                break
        }

        if (filter.search) {
            newPosts = newPosts.filter(p => p.title.toLowerCase().includes(filter.search.toLowerCase()))
        }

        return newPosts
    }, [filter, posts])

    const [newPostFormVisible, setNewPostFormVisible] = useState<boolean>(false);

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
                filter={filter}
                setFilter={setFilter}/>
            <PostList title={"Posts"} posts={sortedAndSearchedPosts} onDeletePost={handleDeletePost}/>
        </div>
    );
}

export default App;
