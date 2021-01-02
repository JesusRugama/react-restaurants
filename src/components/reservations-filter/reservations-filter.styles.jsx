import styled from "styled-components";

export const ReservationsTimeFilter = styled.div`
  text-align: center;
  button {
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    outline: none;

    &.selected {
        background-color: #34ace0;
        color: #FFF;
    }
  }
`;