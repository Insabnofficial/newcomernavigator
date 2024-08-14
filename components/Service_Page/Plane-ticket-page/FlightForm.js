"user select";

import React, { useState } from "react";
import styles from "./FlightForm.module.css";
import SelectMenu from "@/utils/SelectMenu";
import gsap from "@/hooks/gsap";
import DatePicker from "@/utils/DatePicker";
import Traveller from "@/utils/Traveller";

function FlightForm() {
  const [tripType, setTripType] = useState("roundtrip");

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    gsap.fromTo(
      e.target,
      { rotation: 0 },
      { rotation: 360, duration: 0.2, ease: "power3.inOut" }
    );

    if (!from && !to) {
      return;
    } else {
      let temp = from;
      setFrom(to);
      setTo(temp);
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.tripType_wrapper}>
          <div className={styles.tripType}>
            <label>
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === "roundtrip"}
                onChange={handleTripTypeChange}
              />
              Round trip
            </label>

            <label>
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={handleTripTypeChange}
              />
              One-way
            </label>
          </div>
          <div>
            <SelectMenu
              options={["Coach", "Premium Economy", "First", "Business"]}
            />
          </div>
        </div>

        <div className={styles.form}>
          <form>
            <div className={styles.locations}>
              <div className={styles.from}>
                <i className={styles.location}></i>
                <input
                  onChange={(e) => setFrom(e.target.value)}
                  name="from"
                  type="text"
                  placeholder="From where?"
                  value={from}
                />
              </div>

              <div className={styles.to}>
                <i className={styles.location}></i>
                <input
                  onChange={(e) => setTo(e.target.value)}
                  name="to"
                  type="text"
                  placeholder="To where?"
                  value={to}
                />
              </div>

              <div onClick={handleClick} className={styles.swapValue}>
                <span>&#8652;</span>
              </div>
            </div>
            <DatePicker
              selectionType={tripType == "roundtrip" ? "range" : "single"}
            />
            <Traveller />
            <button
              onClick={(e) => e.preventDefault()}
              onSubmit={(e) => e.preventDefault()}
              className={styles.button}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FlightForm;
