//interfacses
import { IStyles } from "../../../../../../infrastructure/header/styles/headerStyles";
//styles
import { siteColors } from "../../../../../../global/styles/siteColors";

export const cardsWrapperStyles: IStyles = {
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardBoxDefaultStyle: {
        height: 380,
        borderRadius: 25,
        position: 'relative',
        marginTop: 10,
        boxShadow: '0px 13px 12px 0px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        border: 'none',
    },
    postCardBoxStyle: {
        background: siteColors.white,
        flexDirection: 'column',
    },
    plusCardBoxStyle: {
        background: `linear-gradient(to bottom, ${siteColors.lightGreen}, ${siteColors.darkGreen})`,
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
    }
}