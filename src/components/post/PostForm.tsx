import React, {FormEvent, useState} from 'react';
import {Input} from "../input/Input";
import {Button} from "../button/Button";
import {PostItemDTO} from "../../model/PostItemDTO";

type PostFormProps = {
    onSubmit: (newPost: PostItemDTO) => void;
}

export const PostForm = (props : PostFormProps) => {
    const [newPost, setNewPost] = useState<PostItemDTO>({ id: 0, title: "", body: "" });

    const handleSubmitPost = (e : FormEvent) => {
        e.preventDefault()

        const post = {
            ...newPost, id: Date.now()
        }

        props.onSubmit(post)
        setNewPost({ id: 0, title: "", body: "" })
    }

    return (
        <form onSubmit={handleSubmitPost}>
            <Input
                type={"text"}
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            />
            <Input
                type={"text"}
                value={newPost.body}
                onChange={(e) => setNewPost({...newPost, body: e.target.value})}
            />
            <Button onClick={handleSubmitPost}>Create post</Button>
        </form>
    );
};