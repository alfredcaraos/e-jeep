import React, { useState } from "react";
import "./booking.css";
import { Link } from "react-router-dom";

const Booking = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleRouteChange = (e) => {
    setSelectedRoute(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform ticket reservation logic here
    console.log("Ticket reserved:");
    console.log("Route:", selectedRoute);
    console.log("Time:", selectedTime);
    console.log("Day:", selectedDay);

    // Reset form
    setSelectedRoute("");
    setSelectedTime("");
    setSelectedDay("");
  };

  return (
    <div className="booking">
      <div className="cover">
        <div className="Login bg-success">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-white">Book a Ticket</h1>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="routeSelect">
                Select Route
              </label>
              <select
                className="form-control"
                id="routeSelect"
                value={selectedRoute}
                onChange={handleRouteChange}
                required
              >
                <option value="">Select a route</option>
                <option value="Route A">Route A</option>
                <option value="Route B">Route B</option>
                <option value="Route C">Route C</option>
              </select>
              <div className="invalid-feedback">Please select a route</div>
            </div>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="timeSelect">
                Select Time
              </label>
              <select
                className="form-control"
                id="timeSelect"
                value={selectedTime}
                onChange={handleTimeChange}
                required
              >
                <option value="">Select a time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
              <div className="invalid-feedback">Please select a time</div>
            </div>

            <div className="form-group was-validated">
              <label className="form-label text-white" htmlFor="daySelect">
                Select Day
              </label>
              <select
                className="form-control"
                id="daySelect"
                value={selectedDay}
                onChange={handleDayChange}
                required
              >
                <option value="">Select a day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
              <div className="invalid-feedback">Please select a day</div>
            </div>

            <Link to="/payment">
            <input
              className="btn btn-success bg-primary text-white w-50"
              type="submit"
              value="Reserve Ticket"
            />
            </Link>
            
            <Link to="/account">
              <input
                className="btn btn-success bg-danger text-white w-50"
                type="button"
                value="Cancel"
              />
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
