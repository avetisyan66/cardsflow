import { MouseEventHandler } from 'react';
//assets
import close from '../../application/assets/systemIcons/close';
//styles
import { siteColors } from '../../global/styles/siteColors';
import { closeButtonStyles } from './closeButtonStyles';

interface ICloseButton {
    onClick: MouseEventHandler<HTMLButtonElement>,
    background?: string,
    iconColor?: string,
}

export default function CloseButton(props: ICloseButton) {
    const {
        background = siteColors.white,
        iconColor = siteColors.silver,
        onClick } = props;

    return (
        <button style={{ ...closeButtonStyles, background }} onClick={(e) =>
            onClick(e)}>
            {close(iconColor)}
        </button>
    )
};