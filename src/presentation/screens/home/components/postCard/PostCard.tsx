import { useDispatch } from "react-redux";
import { useState } from "react";
//assets
import calendar from "../../../../../application/assets/systemIcons/calendar";
import edit from "../../../../../application/assets/systemIcons/edit";
import defaultPic from '../../../../../application/assets/defaultPic.png';
//interfaces
import { IPost } from "../cardsWrapper/CardsWrapper";
//components
import GradientButton from "../../../../../infrastructure/gradientButton/GradientButton";
import CreatePostCardPopup from "../../../../../infrastructure/createPostCardPopup/CreateOrUpdatePostPopup";
import CloseButton from "../../../../../infrastructure/closeButton/CloseButton";
import ConfirmationPopup from "../../../../../infrastructure/confirmationPopup/ConfirmationPopup";
//styles
import { cardsWrapperStyles } from "../cardsWrapper/styles/cardsWrapperStyles";
import { postCardStyles } from "./styles/postCardStyles";
//store
import { deletePost } from "../../../../../application/store/actions/postsSliceAction";
//utils
import { formatDate } from "../../../../../global/utils/utils";

interface IPostCard {
    post: IPost,
    postCardsWidth: string
};

export default function PostCard({ post, postCardsWidth }: IPostCard) {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const dispatch = useDispatch();
    const [isShowDeletePopup, setIsShowDeletPopup] = useState(false);
    const [isShowEditPopup, setIsShowEditPopup] = useState(false);

    const closeDeletePopup = () => {
        setIsShowDeletPopup(false);
    };

    const deletePostCB = () => {
        dispatch(deletePost(post.id));
        closeDeletePopup();
    };

    const closeEditPopup = () => {
        setIsShowEditPopup(false);
    };

    return (
        <div style={{
            ...cardsWrapperStyles.cardBoxDefaultStyle,
            ...cardsWrapperStyles.postCardBoxStyle,
            width: postCardsWidth
        }}>
            <CloseButton
                onClick={() => setIsShowDeletPopup(true)}
            />
            <img
                src={post.picture ? post.picture : defaultPic}
                alt="Post Image"
                title="Post Image"
                style={postCardStyles.postImg}
            />
            <div style={postCardStyles.infoWrapper}>
                <h3 style={{
                    ...postCardStyles.postTextDefaultStyle,
                    ...postCardStyles.postName
                }}>
                    {post.name}
                </h3>
                <p style={{
                    ...postCardStyles.postTextDefaultStyle,
                    ...postCardStyles.postDescription
                }}>
                    {post.description}
                </p>
                <div style={postCardStyles.calendarButtonWrapper}>
                    <div style={postCardStyles.calendarBox}>
                        {calendar()}
                        <p style={postCardStyles.dateText}>
                            {formattedDate}
                        </p>
                    </div>
                    <GradientButton
                        icon={edit}
                        title="Edit"
                        onClick={() => setIsShowEditPopup(true)}
                    />
                </div>
            </div>
            {isShowDeletePopup && <ConfirmationPopup
                closeDeletePopup={closeDeletePopup}
                secondAction={deletePostCB}
            />}
            {isShowEditPopup && <CreatePostCardPopup
                closePopup={closeEditPopup}
                post={post}
            />}
        </div>
    )
}