import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectReservations } from "../../redux/reservation/reservation.selectors";
import { getReservationsStart } from "../../redux/reservation/reservation.actions";

const TimePicker = ({
  reservations,
  name,
  value,
  label,
  handleChange,
  ...props
}) => {
 /**
 * Read existing reservations and add used hours in an array to prevent using the same hour for two reservations
 */
  const [usedHours, setUsedHours] = useState([]);
  useEffect(() => {
    let startOfDay = new Date(value.getTime());
    startOfDay.setHours(0, 0, 0, 0);
    let endOfDay = new Date(value.getTime());
    endOfDay.setHours(23, 59, 59, 999);

    const dayReservations = reservations
      .filter(
        (reservation) => {
            let date = reservation.reservationDate.toDate();
            return (date >= startOfDay && date <= endOfDay);
        }
      );

    const hours = dayReservations.map((reservation) => reservation.reservationDate.toDate().getHours());
    setUsedHours(hours);
  }, [reservations, value]);

  const handleSelectChange = (event) => {
    value.setHours(event.target.value, 0, 0, 0);
    handleChange({ target: { name, value } });
  };

  const availableHours = Array.from(Array(24).keys()).filter(
    (hour) => hour <= 22 && hour >= 9
  );

  const hourToAmPm = (hourNumber) => {
    if (hourNumber > 12) {
      return hourNumber - 12 + " PM";
    } else if (hourNumber === 12) {
      return "Noon";
    } else {
      return hourNumber + " AM";
    }
  };

  return (
    <select name={name} onChange={handleSelectChange} value={value.getHours()}>
      {availableHours
        .filter(
          (hour) => (value.getHours() === hour) || (-1 === usedHours.findIndex((usedHour) => hour === usedHour))
        )
        .map((time, i) => (
          <option value={time} key={i}>
            {hourToAmPm(time)}
          </option>
        ))}
    </select>
  );
};

const mapStateToProps = createStructuredSelector({
  reservations: selectReservations,
});

const mapDispatchToProps = (dispatch) => ({
  getReservationsStart: (payload) => dispatch(getReservationsStart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
