
import { useState } from 'react';
import { ReservationsTimeFilter } from './reservations-filter.styles';

const ReservationsFilter = ({filters, setFilters}) => {

    const [timeFilter, setTimeFilter] = useState(0);

    const handleFilterClick = ({target}) => {
        const value = parseInt(target.value);

        setTimeFilter(value);

        if (value === 0) {
            setFilters({
                ...filters,
                startDate: null,
                endDate: null,
            })
        } else if (value > 0) {
            setFilters({
                ...filters,
                startDate: new Date(),
                endDate: null,
            })
        } else if (value < 0) {
            setFilters({
                ...filters,
                startDate: null,
                endDate: new Date(),
            })
        }
    }

    const timeFilterOptions = [
        {label: 'Past', value: -1},
        {label: 'All', value: 0},
        {label: 'Future', value: 1},
    ]

    return (
        <ReservationsTimeFilter>
            {timeFilterOptions.map((timeFilterOption, i) => (
                <button onClick={handleFilterClick}
                    key={i}
                    value={timeFilterOption.value}
                    className={timeFilter === timeFilterOption.value ? "selected": ''}
                    >{timeFilterOption.label}</button>
            ))}
        </ReservationsTimeFilter>
    )
}

export default ReservationsFilter;