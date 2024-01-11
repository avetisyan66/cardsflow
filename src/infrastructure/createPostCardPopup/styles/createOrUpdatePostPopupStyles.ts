//styles
import { siteColors } from "../../../global/styles/siteColors";
import { textStyles } from "../../../global/styles/textStyles";
//interfaces
import { IStyles } from "../../header/styles/headerStyles";

export const createOrUpdatePostPopupStyles: IStyles = {
    popupBox: {
        width: '60%',
        height: 320,
        background: siteColors.white,
        borderRadius: '10px',
        padding: '25px 45px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        zIndex: '99',
    },
    errorMessage: {
        fontSize: 12,
        color: siteColors.lightRed,
        margin: 0,
        fontWeight: 500,
    },
    sectionText: {
        ...textStyles.smallBold,
        color: siteColors.sectionColor
    },
    nameInput: {
        width: '100%',
        borderRadius: 25,
        borderWidth: .5,
        borderColor: siteColors.ligthGray,
        background: siteColors.inputBgColor,
        padding: '5px 10px',
        boxSizing: 'border-box',
    },
    descriptionArea: {
        width: '100%',
        height: '50%',
        padding: '5px 10px',
        boxSizing: 'border-box',
        borderRadius: 25,
        borderWidth: .5,
        borderColor: siteColors.ligthGray,
        background: siteColors.inputBgColor,
        resize: 'none',
        marginBottom: 15
    },
    hiddenInput: {
        display: 'none'
    },
    popupFooter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgWrapper: {
        maxWidth: '40%',
        overflow: 'hidden'
    },
    img: {
        height: 100,
        borderRadius: 16
    },
    imgNameWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imgNameText: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        fontSize: 12,
        margin: 0
    },
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}