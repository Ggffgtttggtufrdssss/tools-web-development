import React from "react";
import { Link } from "react-router-dom";

import "../styles/card-module.css";
import BtnCode from "./BtnCode";

const Card = ({ title, description, _id }) => {
  return (
    <div className="card">
      <div className="content">
        <div>
          <h4 className="title uppercase">{title}</h4>
        </div>

        <div className="back">
          <p className="description pt-8 px-4 text-justify line-clamp-3 ">
            {description}
          </p>
          <div className="pt-6 fixed bottom-2">
            <Link to={`/post/${title}`} state={{ id: _id }}>
              <BtnCode label="Ressources" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
