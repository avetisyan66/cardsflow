//assets
import background from '../../application/assets/background.png';
//styles
import { headerStyles } from './styles/headerStyles';

export default function Header() {

    return (
        <div style={headerStyles.headerContainer}>
            <img
                src={background}
                alt="Website's Background"
                style={headerStyles.background}
                title="Website's Background"
            />
            <div style={headerStyles.bgWrapper}>
                <img
                    src={"logo.png"}
                    alt="Logo"
                    style={headerStyles.logo}
                    title="Logo"
                />
                <h2 style={headerStyles.name}>
                    ImageMan
                </h2>
            </div>
        </div>
    )
}