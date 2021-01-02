import styled from 'styled-components';

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateTimeInputContainer = styled.div`
  display: flex;
  justify-content: left;

  > div {
    margin-top:0 !important;
    min-width: 200px;
  }

  select {
    padding: 10px;
    margin-top: 31px;
    margin-left: 10px;
    border: none;
    outline: none;
  }
`;