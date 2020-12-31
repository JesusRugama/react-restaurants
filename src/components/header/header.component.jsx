import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';

import { selectCurrentUser, selectRestaurantName } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderMenu, OptionLink } from './header.styles';

const Header = ({ currentUser, restaurantName, signOutStart }) => (
  <HeaderMenu>
    <h1>{restaurantName} Tables and Reservations</h1>
    <ul>
      <li>
        <OptionLink to="/reservations">Reservations</OptionLink>
      </li>
      <li>
        <OptionLink to="/layout-editor">Tables Layout</OptionLink>
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
  restaurantName: selectRestaurantName
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => {
      dispatch(signOutStart())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
