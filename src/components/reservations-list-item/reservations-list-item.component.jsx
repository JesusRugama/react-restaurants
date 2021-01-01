import { CustomerContactInfo, CustomerName, ReservationContainer, ReservationDate, ReservationTime } from './reservations-list-item.styles';

const ReservationsListItem = ({reservation}) => (
    <ReservationContainer>
        <ReservationDate>{ reservation.reservationDate.toDate().toLocaleDateString() }</ReservationDate>
        <ReservationTime>{ reservation.reservationDate.toDate().toLocaleTimeString() }</ReservationTime>
        <CustomerName>{reservation.customerName}</CustomerName>
        <CustomerContactInfo>{reservation.contactInfo}</CustomerContactInfo>
    </ReservationContainer>
)

export default ReservationsListItem;