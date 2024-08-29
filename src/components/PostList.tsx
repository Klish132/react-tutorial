import React from 'react';
import PostItem from "./PostItem";
import {PostItemDTO} from "../model/PostItemDTO";

type PostListProps = {
    title: string;
    posts: PostItemDTO[];
}

const PostList = (props: PostListProps) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            {props.posts.map((post) =>
                <PostItem key={post.id} id={post.id} title={post.title} content={post.content}/>
            )}
        </div>
    );
};

export default PostList;