import React, {FormEvent, useRef, useState} from 'react';
import "./styles/app.css"
import PostList from "./components/PostList";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", content: "Description 1"},
        {id: 2, title: "TS", content: "Description 2"}
    ]);

    const [newPostTitle, setNewPostTitle] = useState("Placeholder");
    const newPostContentRef = useRef<HTMLInputElement>(null)

    const handleSubmitPost = (e : FormEvent) => {
        e.preventDefault()
        console.log(newPostTitle);
        console.log(newPostContentRef.current?.value);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmitPost}>
                <Input
                    type={"text"}
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                />
                <Input
                    ref={newPostContentRef}
                    type={"text"}
                />
                <Button onClick={handleSubmitPost}>Create post</Button>
            </form>
            <PostList title={"Posts"} posts={posts}/>
        </div>
    );
}

export default App;
