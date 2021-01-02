import { default as ReactDatePicker } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerContainer } from './date-picker.styles';

const DatePicker = ({name, value, label, handleChange, ...props}) => {
    const sendChange = (date) => {
        handleChange({target: {value: date, name}});
    }

    return (
        <DatePickerContainer>
            <ReactDatePicker placeholderText='' selected={value} onChange={sendChange} {...props} />
        </DatePickerContainer>
    );
}

export default DatePicker;