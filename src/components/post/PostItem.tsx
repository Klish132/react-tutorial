import React from 'react';
import {PostItemDTO} from "../../model/PostItemDTO";
import Button from "../button/Button";

interface PostItemProps {
    index: number;
    post: PostItemDTO
    onDelete: (post: PostItemDTO) => void;
}

const PostItem = (props : PostItemProps) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.index}. {props.post.title}</strong>
                <div>
                    {props.post.content}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.onDelete(props.post)}>Удалить</Button>
            </div>
        </div>
    );
};

export default PostItem;