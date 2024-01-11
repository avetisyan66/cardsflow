//components
import GradientButton from "../gradientButton/GradientButton";
//styles
import { confirmationPopupStyles } from "./styles/confirmationPopupStyles";
import { textStyles } from "../../global/styles/textStyles";

interface IConfirmPopup {
    closeDeletePopup: () => void,
    secondAction: () => void
}

export default function ConfirmationPopup(props: IConfirmPopup) {
    const { closeDeletePopup, secondAction } = props;

    return (
        <div
            style={confirmationPopupStyles.fixedPopupContainer}
            onClick={closeDeletePopup}
        >
            <div
                style={confirmationPopupStyles.popupBox}
                onClick={(e) => e.stopPropagation()}
            >
                <h3 style={{
                    ...confirmationPopupStyles.confirmText,
                    ...textStyles.smallBold
                }}>
                    Do you want to delete this post?
                </h3>
                <div style={confirmationPopupStyles.buttonsWrapper}>
                    <GradientButton
                        title="Yes!"
                        onClick={secondAction}
                    />
                    <GradientButton
                        title="No"
                        onClick={closeDeletePopup}
                    />
                </div>
            </div>
        </div>
    )
}