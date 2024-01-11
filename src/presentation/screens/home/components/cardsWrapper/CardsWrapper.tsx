import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
//store
import { RootState } from "../../../../../application/store";
//components
import CreatePostCardPopup from "../../../../../infrastructure/createPostCardPopup/CreateOrUpdatePostPopup";
import PostCard from "../postCard/PostCard";
//assets
import plus from "../../../../../application/assets/systemIcons/plus";
//styles
import { cardsWrapperStyles } from "./styles/cardsWrapperStyles";
import { textStyles } from "../../../../../global/styles/textStyles";

export interface IPost {
    id: string;
    name: string;
    description: string;
    picture: string;
}

export default function CardsWrapper() {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const postsLength = posts.length + 1; // + 1 for last add post card div
    const postCardsWidth = useMemo(() => {
        if (postsLength === 1 || postsLength === 2) {
            return '47%';
        }
        return '30%';
    }, [postsLength]); // ensure first cases box flows

    const handleButtonClick = () => {
        setIsShowPopup(true);
    };

    const closePopup = () => {
        setIsShowPopup(false);
    };

    return (
        <div>
            <div style={cardsWrapperStyles.wrapper}>
                {posts.length > 0 ? posts.map((post: IPost) => {
                    return <PostCard
                        key={String(post.id)}
                        post={post}
                        postCardsWidth={postCardsWidth}
                    />;
                }) : <h3 style={textStyles.smallBold}>
                    Create your First Post Card
                </h3>}
                <button style={{
                    ...cardsWrapperStyles.cardBoxDefaultStyle,
                    ...cardsWrapperStyles.plusCardBoxStyle,
                    width: postCardsWidth
                }}
                    onClick={handleButtonClick}>
                    {plus()}
                </button>
            </div>
            {isShowPopup && <CreatePostCardPopup closePopup={closePopup} />}
        </div>
    )
}