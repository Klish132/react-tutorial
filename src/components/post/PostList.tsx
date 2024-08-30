import React from 'react';
import PostItem from "./PostItem";
import {PostItemDTO} from "../../model/PostItemDTO";

type PostListProps = {
    title: string;
    posts: PostItemDTO[];
    onDeletePost: (post: PostItemDTO) => void;
}

const PostList = (props: PostListProps) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            {props.posts.map((post, idx) =>
                <PostItem key={post.id} index={idx} post={post} onDelete={props.onDeletePost}/>
            )}
        </div>
    );
};

export default PostList;