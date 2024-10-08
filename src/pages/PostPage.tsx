﻿import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPost} from "../hooks/useGetPost";
import {useGetPostComments} from "../hooks/useGetPostComments";

export const PostPage = () => {
    const params = useParams()

    const id: number = Number(params.id);

    const {data: post} = useGetPost(id)
    const {data: comments} = useGetPostComments(id)

    return (
        <div>
            <h1>PostPage. ID = {post!.id} Title = {post!.title}</h1>
            <div>{post!.body}</div>
            <h1>
                Comments
            </h1>
            <div>
                {comments!.map(commend =>
                    <div key={commend.id} style={{marginTop: 15}}>
                        <h5>{commend.email}</h5>
                        <div>
                            {commend.body}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};