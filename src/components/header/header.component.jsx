
import { HeaderMenu } from './header.styles';
import { Link } from 'react-router-dom';

const Header = () => (
    <HeaderMenu>
    <ul>
        <li>
            <Link to="/reservations">Reservations</Link>
        </li>
        <li>
            <Link to="/layout">Tables Layout</Link>
        </li>
        <li>
            <Link to="/reports">Reports</Link>
        </li>
    </ul>
    </HeaderMenu>
)

export default Header;