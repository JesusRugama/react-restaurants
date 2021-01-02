import styled from "styled-components";

export const ReservationsListTitle = styled.h3`
  text-align: center;
  margin: 10px;
`;

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

export const ReservationsListContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  color: #444;
  font-size: 0.9em;
`;
