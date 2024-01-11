//styles
import { siteColors } from "../../../../../../global/styles/siteColors";
//interfaces
import { IStyles } from "../../../../../../infrastructure/header/styles/headerStyles";

export const footerStyles: IStyles = {
    footer: {
        background: siteColors.ligthGray,
        color: siteColors.black,
        padding: '20px',
        textAlign: 'center',
        marginTop: 100
    }
}