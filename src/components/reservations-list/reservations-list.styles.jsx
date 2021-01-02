import styled from "styled-components";

export const ReservationsListTitle = styled.h3`
  text-align: center;
  margin: 10px;
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

export const ReservationsListItemsContainer = styled.div`
  height: calc(100% - 120px);
  overflow: auto;
`;

export const NewReservationButtonContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  button {
    border: none;
    padding: 10px;
    margin-bottom: 15px;
  }
`;
