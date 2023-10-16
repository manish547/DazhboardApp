import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeComp = () => {

    const [open, setOpen] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: new Date(2023, 0, 6), // January is 0 in JavaScript's Date object
        endDate: new Date(2023, 1, 21),  // February is 1
        key: 'selection',
    });
    const refOne = useRef(null);

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, []);

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    };

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };

    const handleDateChange = (ranges) => {
        // Handle date range changes
        setDateRange(ranges.selection);
    };

    return (
        <div className="calendarWrap w-full relative" onClick={() => setOpen((open) => !open)}>

            <input
                value={`${format(dateRange.startDate, "MMMM d, yyyy")} - ${format(dateRange.endDate, "MMMM d, yyyy")}`}
                readOnly
                className="outline-none cursor-pointer inputBox w-full"
            // onClick={() => setOpen((open) => !open)}
            />


            <div ref={refOne}>
                {open && (
                    <DateRange
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={[dateRange]}
                        onChange={handleDateChange}
                        months={1}
                        direction="horizontal"
                        className="calendarElement absolute top-10 -left-4 "
                    />
                )}
            </div>
        </div>
    );
};

export default DateRangeComp;
