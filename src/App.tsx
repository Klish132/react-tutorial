import React, {useMemo, useState} from 'react';
import "./styles/app.css"
import PostList from "./components/post/PostList";
import {PostItemDTO} from "./model/PostItemDTO";
import PostForm from "./components/post/PostForm";
import Select from "./components/select/Select";
import {EPostsSorting} from "./model/EPostsSorting";
import Input from "./components/input/Input";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", content: "Z"},
        {id: 2, title: "TS", content: "A"}
    ]);

    const handleCreatePost = (newPost: PostItemDTO) => {
        setPosts([...posts, newPost]);
    }
    const handleDeletePost = (post: PostItemDTO) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const [sorting, setSorting] = useState(EPostsSorting.Title);
    const [search, setSearch] = useState("");
    const sortedAndSearchedPosts = useMemo(() => {
        console.log("Got sorted abd searched posts")

        let newPosts;
        switch (+sorting) {
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

        if (search) {
            newPosts = newPosts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        }

        return newPosts
    }, [sorting, search, posts])

    return (
        <div className="App">
            <PostForm onSubmit={handleCreatePost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <Select
                    value={sorting}
                    onChange={e => setSorting(e.target.value as unknown as EPostsSorting)}
                    initialValue={"Posts sorting"} options={[
                    {label: "By title", value: EPostsSorting.Title},
                    {label: "By content", value: EPostsSorting.Content},
                ]}/>
                <Input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder={"Search..."}>
                </Input>
            </div>

            {sortedAndSearchedPosts.length !== 0
                ?
                <PostList title={"Posts"} posts={sortedAndSearchedPosts} onDeletePost={handleDeletePost}/>
                :
                <h1 style={{textAlign: 'center'}}>
                    No posts!
                </h1>}
        </div>
    );
}

export default App;
