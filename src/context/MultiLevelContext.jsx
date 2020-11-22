import React, { useState, createContext } from 'react';

export const UserContext = createContext()
export const PostsContext = createContext()
export const PostDetailContext = createContext()
export const ReplyContext = createContext()

export function MultiLevelProvider(props) {
    const [currentUserData, setCurrentUserData] = useState()
    const [postListData, setPostListData] = useState()
    const [postDetailData, setPostDetailData] = useState()
    const [replyListData, setReplyListData] = useState()

    return (
        <UserContext.Provider value={[currentUserData, setCurrentUserData]}>
            <PostsContext.Provider value={[postListData, setPostListData]}>
                <PostDetailContext.Provider value={[postDetailData, setPostDetailData]}>
                    <ReplyContext.Provider value={[replyListData, setReplyListData]}>
                        {props.children}
                    </ReplyContext.Provider>
                </PostDetailContext.Provider>
            </PostsContext.Provider>
        </UserContext.Provider>
    )
}