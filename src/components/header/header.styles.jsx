import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderMenu = styled.nav`
  ul {
      list-style:none;

      li {
          display:inline;
          margin-right: 20px;
      }
  }
`;

export const OptionLink = styled(Link)`
  display: inline;
  padding: 20px;
  cursor: pointer;
`;