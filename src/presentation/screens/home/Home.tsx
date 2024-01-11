//components
import Header from '../../../infrastructure/header/Header';
import CardsWrapper from './components/cardsWrapper/CardsWrapper';
import Footer from './components/footer/Footer';
//styles
import { headerStyles } from './styles/homeStyles';

export interface IPost {
    id: string;
    name: string;
    description: string;
    picture: string;
}

export default function Home() {

    return (
        <div style={headerStyles}>
            <Header />
            <CardsWrapper />
            <Footer />
        </div>
    )
}