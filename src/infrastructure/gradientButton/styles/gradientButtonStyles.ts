//styles
import { siteColors } from "../../../global/styles/siteColors"
//interfaces
import { IStyles } from "../../header/styles/headerStyles"

export const gradientButtonStyles: IStyles = {
    wrapper: {
        background: `linear-gradient(to right, ${siteColors.lightYellow}, ${siteColors.lightRed})`,
        border: 'none',
        padding: '10px 17px',
        borderRadius: 9,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
    },
    text: {
        paddingLeft: 3,
        margin: 0,
        color: siteColors.white,
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
    }
}