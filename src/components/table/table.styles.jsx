import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 10px;
  position: relative;
  text-align: center;
`;

export const TableId = styled.div`
  display: inline;
`;

export const TableSeats = styled.div`
  display: inline;
  margin-left: 10px;

  svg {
    position: relative;
    top: 1px;
    font-size: 0.8em;
  }
`;

export const TableInfo = styled.div`
  position: absolute;
  top: 20px;
  width: 100%
`;