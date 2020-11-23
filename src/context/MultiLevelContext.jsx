import React, { useState, createContext } from 'react';

export const UserContext = createContext()
export const PostsContext = createContext()
export const PostDetailContext = createContext()
export const ReplyContext = createContext()

export function MultiLevelProvider(props) {
    const [currentUserData, setCurrentUserData] = useState(null)
    const [postListData, setPostListData] = useState(null)
    const [postDetailData, setPostDetailData] = useState(null)
    const [replyListData, setReplyListData] = useState(null)

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