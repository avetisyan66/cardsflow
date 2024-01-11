import { MouseEventHandler, useEffect, useRef, useState } from "react";
import uuidRandom from "uuid-random";
import { useDispatch } from "react-redux";
//styles
import { confirmationPopupStyles } from "../confirmationPopup/styles/confirmationPopupStyles";
import { siteColors } from "../../global/styles/siteColors";
import { createOrUpdatePostPopupStyles } from "./styles/createOrUpdatePostPopupStyles";
import { textStyles } from "../../global/styles/textStyles";
//components
import CloseButton from "../closeButton/CloseButton";
import GradientButton from "../gradientButton/GradientButton";
//assets
import download from "../../application/assets/systemIcons/download";
import save from "../../application/assets/systemIcons/save";
//store
import { addPost, updatePost } from "../../application/store/actions/postsSliceAction";
//interfaces
import { IPost } from "../../presentation/screens/home/components/cardsWrapper/CardsWrapper";

interface ICreatePostCardPopup {
    closePopup: MouseEventHandler<Element>,
    post?: IPost
}

export default function CreatePostCardPopup(props: ICreatePostCardPopup) {
    const { closePopup, post } = props;
    const dispatch = useDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [imageName, setImageName] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (post) {
            setName(post.name || '');
            setDescription(post.description || '');
            setUploadedImage(post.picture || null);
            setImageName('');
        }
    }, [post]);

    const chooseFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage(reader.result as string);
                setImageName(file.name);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e: React.MouseEvent) => {
        if (!name.trim() || !description.trim() || !uploadedImage) {
            setValidationError('Name, description are required fields.');
            return;
        }
        setValidationError('');

        if (post) {
            dispatch(updatePost({
                id: post.id,
                name,
                description,
                picture: uploadedImage,
            }));
        } else {
            dispatch(addPost({
                id: uuidRandom(),
                name,
                description,
                picture: uploadedImage,
            }));
        }

        setName('');
        setDescription('');
        setUploadedImage(null);
        closePopup(e);
    };

    return (
        <div
            style={confirmationPopupStyles.fixedPopupContainer}
            onClick={closePopup}
        >
            <div
                style={createOrUpdatePostPopupStyles.popupBox}
                onClick={(e) => e.stopPropagation()}
            >
                <CloseButton
                    background={siteColors.ligthGray}
                    iconColor={siteColors.white}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => closePopup(e)}
                />
                {validationError && (
                    <p style={createOrUpdatePostPopupStyles.errorMessage}>
                        {validationError}
                    </p>
                )}
                <p style={createOrUpdatePostPopupStyles.sectionText}>
                    Name
                </p>
                <input style={createOrUpdatePostPopupStyles.nameInput}
                    value={name ? name : ''}
                    onChange={(e) => setName(e.target.value)}
                />
                <p style={createOrUpdatePostPopupStyles.sectionText}>
                    Description
                </p>
                <textarea
                    cols={40}
                    style={createOrUpdatePostPopupStyles.descriptionArea}
                    value={description ? description : ''}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={createOrUpdatePostPopupStyles.hiddenInput}
                    onChange={handleFileChange}
                />
                {uploadedImage ? (
                    <div
                        style={createOrUpdatePostPopupStyles.popupFooter}>
                        <div style={createOrUpdatePostPopupStyles.imgWrapper}>
                            <img
                                src={uploadedImage}
                                alt="Uploaded Picture"
                                style={createOrUpdatePostPopupStyles.img} />
                        </div>
                        <div style={createOrUpdatePostPopupStyles.imgNameWrapper}>
                            <strong style={textStyles.smallBold}>Name:</strong>
                            <p style={createOrUpdatePostPopupStyles.imgNameText}>
                                {imageName}
                            </p>
                        </div>
                        <div style={createOrUpdatePostPopupStyles.buttonsWrapper}>
                            <GradientButton
                                icon={download}
                                title="Choose Another"
                                onClick={chooseFile}
                            />
                            <p style={{ ...createOrUpdatePostPopupStyles.sectionText, margin: 0 }}>or</p>
                            <GradientButton
                                icon={save}
                                title="Save"
                                onClick={(e: React.MouseEvent) => handleSave(e)}
                            />
                        </div>
                    </div>
                ) : <div>
                    <GradientButton
                        icon={download}
                        title="Upload Image"
                        onClick={chooseFile}
                    />
                </div>}
            </div>
        </div>
    )
};