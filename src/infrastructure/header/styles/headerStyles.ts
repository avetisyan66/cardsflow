import { CSSProperties } from "react";
//styles
import { siteColors } from "../../../global/styles/siteColors";

export interface IStyles {
    [key: string]: CSSProperties;
}

export const headerStyles: IStyles = {
    headerContainer: {
        position: 'relative'
    },
    bgWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    background: {
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 30,
        height: 30
    },
    name: {
        fontSize: 25,
        fontWeight: 600,
        color: siteColors.white
    }
}