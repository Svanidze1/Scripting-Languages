import React, { useState } from "react";
import Data from "./Components/db/data";
import CountdownTimer from "./Components/Main/CountdownTimer";
import Modal from "./Components/Modal/Modal";
import Filter from "./Components/filter/filter";

function AllOffers() {
    const [showModal, setShowModal] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [filterFrom, setFilterFrom] = useState(""); // Filter 'from' value for fees
    const [filterTo, setFilterTo] = useState(""); // Filter 'to' value for fees
    const [filterTimeFrom, setFilterTimeFrom] = useState(""); // Filter 'from' value for time
    const [filterTimeTo, setFilterTimeTo] = useState(""); // Filter 'to' value for time
    const [sortBy, setSortBy] = useState("All"); // Default sort option

    const handleDetailsClick = (destination) => {
        setSelectedDestination(destination);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDestination(null);
    };

    const applyFilters = () => {
        // This function will be called when the Filter component's submit button is clicked
        // Filter and sort data based on current filter and sort criteria
        const filteredDestinations = Data.filter(destination => {
            const fees = destination.fees;
            const { leaveHour, leaveMinute } = destination;

            // Apply numeric filtering on fees
            const isFeeInRange = (filterFrom === "" || fees >= parseInt(filterFrom, 10)) &&
                                (filterTo === "" || fees <= parseInt(filterTo, 10));

            // Apply time filtering
            const isTimeInRange = (filterTimeFrom === "" || (leaveHour * 60 + leaveMinute) >= parseInt(filterTimeFrom, 10)) &&
                                (filterTimeTo === "" || (leaveHour * 60 + leaveMinute) <= parseInt(filterTimeTo, 10));

            return isFeeInRange && isTimeInRange;
        }).sort((a, b) => {
            // Sorting logic based on sortBy state
            if (sortBy === "decrease") {
                return b.fees - a.fees;
            } else if (sortBy === "increase") {
                return a.fees - b.fees;
            } else if (sortBy === "decreaseTime") {
                return (b.leaveHour * 60 + b.leaveMinute) - (a.leaveHour * 60 + a.leaveMinute);
            } else if (sortBy === "increaseTime") {
                return (a.leaveHour * 60 + a.leaveMinute) - (b.leaveHour * 60 + b.leaveMinute);
            } else {
                return 0; // No sorting
            }
        });

        return filteredDestinations;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredData = applyFilters();
        console.log("Filtered Data:", filteredData);
    };

    return (
        <section className="main container section">
            <Filter
                filterFrom={filterFrom}
                filterTo={filterTo}
                filterTimeFrom={filterTimeFrom}
                filterTimeTo={filterTimeTo}
                sortBy={sortBy}
                onFilterFromChange={(e) => setFilterFrom(e.target.value)}
                onFilterToChange={(e) => setFilterTo(e.target.value)}
                onFilterTimeFromChange={(e) => setFilterTimeFrom(e.target.value)}
                onFilterTimeToChange={(e) => setFilterTimeTo(e.target.value)}
                onSortChange={(e) => setSortBy(e.target.value)}
                onSubmit={handleSubmit} // Pass handleSubmit function to handle submit
            />

            <div className="seeContent grid">
                {applyFilters().map((destination) => {
                    const { id, imgSrc, leaveHour, leaveMinute, destTitle, location, fees, description } = destination;

                    return (
                        <div key={id} className="singleDestination" data-aos="fade-up">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <CountdownTimer hour={leaveHour} minute={leaveMinute} />
                                    </div>

                                    <div className="price">
                                        <h5>{fees}$</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex" onClick={() => handleDetailsClick(destination)}>DETAILS</button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {showModal && <Modal show={showModal} onClose={handleCloseModal} destination={selectedDestination} />}
        </section>
    );
}

export default AllOffers;
