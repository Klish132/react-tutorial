import React from 'react';
import {PostItemDTO} from "../../model/PostItemDTO";
import Button from "../button/Button";
import {useNavigate} from "react-router-dom";

interface PostItemProps {
    post: PostItemDTO
    onDelete: (post: PostItemDTO) => void;
}

const PostItem = (props : PostItemProps) => {
    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => navigate(`/posts/${props.post.id}`)}>View</Button>
                <Button onClick={() => props.onDelete(props.post)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;