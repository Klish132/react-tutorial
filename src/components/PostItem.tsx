import React from 'react';

interface PostItemProps {
    id: number;
    title: string;
    content: string;
}

const PostItem = (props : PostItemProps) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.id}. {props.title}</strong>
                <div>
                    {props.content}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;