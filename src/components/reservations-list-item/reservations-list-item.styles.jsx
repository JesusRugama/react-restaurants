import styled from 'styled-components';

export const ReservationContainer = styled.div`
padding: 10px;
border-bottom: 1px solid #DDD;

time {
    margin-right: 10px
}
`;

export const ReservationActions = styled.div`
    text-align: right;
    margin-top: 5px;

    button {
        display: inline-block;
        border: none;
        background: none;
        color: #227093;
        padding: 0;
        cursor: pointer;
        outline: none;
        margin-left:10px;

        &:hover {
            color: #34ace0;
        }

        svg {
            font-size: 1.6em;
        }
    }
`;

export const ReservationDate = styled.time`
    margin-right: 10px;
`;

export const ReservationTime = styled.time`
`;

export const CustomerName = styled.div`
    font-size: 1.1.em;
`;

export const CustomerContactInfo = styled.div`
    font-size:0.8em;
`;