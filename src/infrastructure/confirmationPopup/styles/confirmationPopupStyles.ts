//styles
import { siteColors } from "../../../global/styles/siteColors";
//interfaces
import { IStyles } from "../../header/styles/headerStyles";

export const confirmationPopupStyles: IStyles = {
    fixedPopupContainer: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '999'
    },
    popupBox: {
        width: '30%',
        height: 130,
        background: siteColors.white,
        borderRadius: '10px',
        padding: 30,
        zIndex: '99',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    confirmText: {
        marginTop: 0,
        textAlign: 'center'
    },
    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 5
    }
};