import ReservationsListItem from "../reservations-list-item/reservations-list-item.component"
import { ReservationsListContainer } from './reservations-list.styles';
import { useEffect } from 'react';

const reservations = [
    {
        createdAt: new Date(),
        customerName: 'Fulanito Bonito',
        phone: '2222-2222-22',
        email: 'customer@email.com'
    },
    {
        createdAt: new Date(),
        customerName: 'Jose Pancrasion',
        phone: '2222-2222-22',
        email: 'customer@email.com'
    },
    {
        createdAt: new Date(),
        customerName: 'Thelma Rugama',
        phone: '2222-2222-22',
        email: 'customer@email.com'
    }
]



const ReservationsList = ({tableId}) => {
    useEffect(()=>{ 

        // Get reservations by tableId
    });

    return (
    <ReservationsListContainer className="reservations-list-container">
        { reservations.map((reservation) => (
            <ReservationsListItem reservation={reservation} />
        ))}
    </ReservationsListContainer>
    )
}

export default ReservationsList;