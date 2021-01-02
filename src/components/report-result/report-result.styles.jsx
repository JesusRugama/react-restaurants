import styled from "styled-components";

export const ReservationsTableGroup = styled.div`
  margin-bottom: 20px;

  .reservation-data {
      &:hover {
          background-color: #EEE;
      }
    time,
    div {
      display: inline-block;
      font-size: 1em;
    }
    time {
      width: 90px;

      &:first-child{
          width: 70px;
      }
    }
    div {
        width: 300px;
    }
  }
`;

export const ReservationsTableGroupTitle = styled.h3`
  margin: 30px 10px 5px;
  font-size: 1.1em;
`;
