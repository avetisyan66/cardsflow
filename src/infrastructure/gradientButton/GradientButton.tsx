import { ReactElement } from "react";
//styles
import { gradientButtonStyles } from "./styles/gradientButtonStyles";

interface IGradientButton {
    title: string
    icon?: () => ReactElement,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function GradientButton(props: IGradientButton) {
    const { icon, title, onClick } = props;

    return (
        <button style={gradientButtonStyles.wrapper}
            onClick={onClick}>
            {icon && icon()}
            <h3 style={gradientButtonStyles.text}>
                {title}
            </h3>
        </button>
    )
};