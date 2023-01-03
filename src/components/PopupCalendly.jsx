import React from "react";
import { PopupWidget } from "react-calendly";

const PopupCalendly = () => {
  // mettre son url perso en .env
  // const urlCalendly = `https://calendly.com/${process.env.REACT_APP_CALENDLY_URL}`;

  return (
    <div>
      <PopupWidget
        url="https://calendly.com/acmesales"
        rootElement={document.getElementById("root")}
        color="#526DFE"
        text="Prendre rendez-vous"
        textColor="#ffffff"
      />
    </div>
  );
};

export default PopupCalendly;
