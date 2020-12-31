import { CustomerContactInfo, CustomerName, ReservationContainer, ReservationDate, ReservationTime } from './reservations-list-item.styles';

const ReservationsListItem = ({reservation}) => (
    <ReservationContainer>
        <ReservationDate>{ reservation.createdAt.toLocaleDateString() }</ReservationDate>
        <ReservationTime>{ reservation.createdAt.toLocaleTimeString() }</ReservationTime>
        <CustomerName>{reservation.customerName}</CustomerName>
        <CustomerContactInfo>{reservation.phone}</CustomerContactInfo>
        <CustomerContactInfo>{reservation.email}</CustomerContactInfo>
    </ReservationContainer>
)

export default ReservationsListItem;