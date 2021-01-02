import {
  CustomerContactInfo,
  CustomerName,
  ReservationDate,
  ReservationTime,
  ReservationContainer,
} from "./reservations-list-item.styles";

const ReservationsListItem = ({ reservation, children }) => {
  return (
    <ReservationContainer className="reservation-data">
      <ReservationDate>
        {reservation.reservationDate.toDate().toLocaleDateString()}
      </ReservationDate>
      <ReservationTime>
        {reservation.reservationDate.toDate().toLocaleTimeString()}
      </ReservationTime>
      <CustomerName>{reservation.customerName}</CustomerName>
      <CustomerContactInfo>{reservation.contactInfo}</CustomerContactInfo>

      { children }
    </ReservationContainer>
  );
};

export default ReservationsListItem;
