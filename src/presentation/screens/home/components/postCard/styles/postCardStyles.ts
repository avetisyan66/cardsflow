//interfacses
import { IStyles } from "../../../../../../infrastructure/header/styles/headerStyles";
//styles
import { siteColors } from "../../../../../../global/styles/siteColors";

export const postCardStyles: IStyles = {
    postImg: {
        width: 'auto',
        height: 150,
        maxWidth: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        objectFit: 'cover',
    },
    infoWrapper: {
        padding: 10
    },
    postTextDefaultStyle: {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        color: siteColors.black,
    },
    postName: {
        fontSize: 12,
        fontWeight: 700,
        WebkitLineClamp: 1,
    },
    postDescription: {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        fontSize: 10,
        fontWeight: 400,
        color: siteColors.black
    },
    calendarButtonWrapper: {
        position: 'absolute',
        bottom: 30
    },
    calendarBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    dateText: {
        color: siteColors.ligthGray,
        fontSize: 14,
        fontWeight: 400
    }
}