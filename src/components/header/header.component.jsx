import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderMenu, OptionLink } from './header.styles';

const Header = ({ currentUser, signOutStart }) => (
  <HeaderMenu>
    <ul>
      <li>
        <OptionLink to="/reservations">Reservations</OptionLink>
      </li>
      <li>
        <OptionLink to="/layout">Tables Layout</OptionLink>
      </li>
      <li>
        <OptionLink to="/reports">Reports</OptionLink>
      </li>

      {currentUser && <li>
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      </li>
      }
    </ul>
  </HeaderMenu>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => {
      console.log('DO something');dispatch(signOutStart())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
