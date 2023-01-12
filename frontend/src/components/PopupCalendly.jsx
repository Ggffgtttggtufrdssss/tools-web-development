import React from "react";
import { PopupWidget } from "react-calendly";

const PopupCalendly = () => {
  // mettre son url perso en .env
  //const urlCalendly = process.env.REACT_APP_CALENDLY_URL;

  return (
    <div className="">
      <PopupWidget
        url="https://calendly.com/acmesales"
        rootElement={document.getElementById("root")}
        color="#526DFE"
        text="RV Calendly"
        textColor="#ffffff"
      />
    </div>
  );
};

export default PopupCalendly;
