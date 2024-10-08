﻿import React from 'react';
import {PostItem} from "./PostItem";
import {PostItemDTO} from "../../model/PostItemDTO";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

type PostListProps = {
    title: string;
    posts: PostItemDTO[];
    onDeletePost: (post: PostItemDTO) => void;
}

export const PostList = (props: PostListProps) => {

    if (!props.posts.length)
        return (
            <h1 style={{textAlign: 'center'}}>
                No posts!
            </h1>
        )

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            <TransitionGroup>
                {props.posts.map(post =>
                    <CSSTransition
                        timeout={500}
                        key={post.id}
                        classNames="post"
                    >
                        <PostItem post={post} onDelete={props.onDeletePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};