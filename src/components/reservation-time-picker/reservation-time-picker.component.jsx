const TimePicker = ({ name, value, label, handleChange, ...props }) => {
  const handleSelectChange = (event) => {
    value.setHours(event.target.value, 0, 0, 0);
    handleChange({ target: { name, value } });
  };

  const availableTimes = Array.from(Array(24).keys()).filter(
    (v) => v <= 22 && v >= 9
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
      {availableTimes.map((time, i) => (
        <option value={time} key={i}>
          {hourToAmPm(time)}
        </option>
      ))}
    </select>
  );
};

export default TimePicker;
