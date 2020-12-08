
import { HeaderMenu } from './header.styles';
import { Link } from 'react-router-dom';

const Header = () => (
    <HeaderMenu>
    <ul>
        <li>
            <Link to="/">Layout Editor</Link>
        </li>
        <li>
            <Link to="/">Reservations</Link>
        </li>
        <li>
            <Link to="/">Reports</Link>
        </li>
    </ul>
    </HeaderMenu>
)

export default Header;