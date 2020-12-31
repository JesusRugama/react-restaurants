import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderMenu = styled.nav`
  margin-bottom: 20px;
  h1, ul { display: inline }
  ul {
      list-style:none;

      li {
          display:inline;
          margin-right: 20px;
      }
  }
`;

export const OptionLink = styled(Link)`
  display: inline-block;
  padding: 20px;
  cursor: pointer;
`;