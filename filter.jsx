import React from 'react';
import './filter.css';

function Filter({ filterFrom, filterTo, filterTimeFrom, filterTimeTo, sortBy, onFilterFromChange, onFilterToChange, onFilterTimeFromChange, onFilterTimeToChange, onSortChange, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit(); 
    };

    return (
        <div className="filter-body">
            <form className="filter" onSubmit={handleSubmit}>
                <div className="filter-inputs">
                    <input type="number" placeholder="From Fee" value={filterFrom} onChange={onFilterFromChange} />
                    <div className='line'></div>
                    <input type="number" placeholder="To Fee" value={filterTo} onChange={onFilterToChange} />
                </div>
                <div className="filter-select">
                    <select value={sortBy} onChange={onSortChange}>
                        <option value="All">All</option>
                        <option value="decrease">Decrease</option>
                        <option value="increase">Increase</option>
                        <option value="decreaseTime">Decrease Time</option>
                        <option value="increaseTime">Increase Time</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Filter;
