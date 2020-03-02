import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faBlenderPhone,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { timezoneConvert } from "../utils";
import { connect } from "react-redux";
import { removeFriend } from "../reducers";

const p = {
  name: "Elizabeth",
  surname: "Olsen",
  phoneNumber: "00996755973535",
  timezone: "GMT London",
  startTime: "some date type",
  endTime: "some date type",
  available: false
};

function Card(props) {
  return (
    <div className="card-horizontal">
      <div className="card-horizontal__left">
        <img
          className="card-horizontal__img"
          src="https://c1.staticflickr.com/3/2862/12328317524_18e52b5972_k.jpg"
          alt="profile"
          title="Profile Image"
        />
      </div>
      <div className="card-horizontal__middle">
        <div className="card-horizontal__mid-left">
          <div className="card-horizontal__name">
            {props.name} {props.surname}
          </div>
          <div className="card-horizontal__section">
            <div className="card-horizontal__time-section">
              <div className="card-horizontal__time-range">
                {timezoneConvert(props.startTime, props.timezone)} - {timezoneConvert(props.endTime, props.timezone)}
              </div>
              <div className="card-horizontal__end-section">
                <div className="card-horizontal__timezone">
                  {props.timezone}
                </div>
                <div className="card-horizontal__phone-number">
                  {props.phoneNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-horizontal__mid-right">
          <div className="card-horizontal__remove">
            <FontAwesomeIcon
              onClick={(e)=>{
                console.log("id",props.id);
                
                props.removeFriend(props.id)}}
              icon={faTrashAlt}
              className="icon-remove"
              color="red"
            />
          </div>
        </div>
      </div>

      <div
        className={`card-horizontal__right ${
          props.available
            ? "card-horizontal__right--blue"
            : "card-horizontal__right--red"
        }`}
      >
        <FontAwesomeIcon
          icon={faBlenderPhone}
          color="white"
          className="icon-phone"
        />
        <div className="card-horizontal__right-availability">
          {props.available ? "" : "not "}available
        </div>
      </div>
    </div>
  );
}



export default connect(null,{removeFriend})(Card);
