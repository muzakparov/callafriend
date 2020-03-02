import React, { useState } from "react";
import { Jumbotron, Button, Form, Col, Row, Container } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import TimezonePicker from "react-bootstrap-timezone-picker";
import "react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css";
import IntlTelInput from "react-bootstrap-intl-tel-input";
import { connect } from "react-redux";
import { addFriend } from "../reducers";
import moment from "moment-timezone";
import { toast } from "react-toastify";

function toTimeZone(seconds, zone) {
  const format = "YYYY/MM/DD HH:mm:ss ZZ";
  let time = new Date(seconds * 1000).toISOString().substr(11, 8);

  time = new Date(`January 01, 2020 ${time}`);
  console.log("time", time);

  return moment(time, format)
    .tz(zone)
    .format(format);
}

function AddForm({ addFriend }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");

    if (name && surname && phoneNumber) {
      try {
        addFriend({
          name,
          surname,
          phoneNumber,
          startTime,
          endTime,
          timezone
        });

        setName("");
        setSurname("");
        setPhoneNumber("");
        setStartTime(0);
        setEndTime(0);

        toast("Friend was added!", { type: "success" });
      } catch (e) {
        toast("Failed to add a friend!", { type: "error" });
      }
    } else {
      toast("Fill out missing fields", { type: "warning" });
    }
  };

  return (
    <Jumbotron className="text-center">
      <h1>Add a Friend</h1>
      <div className="add-form m-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              First Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Last Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                value={surname}
                onChange={e => setSurname(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Phone No
            </Form.Label>
            <Col sm="10">
              <IntlTelInput
                preferredCountries={["GB", "AU"]}
                onChange={data => {
                  setPhoneNumber(data.intlPhoneNumber);
                }}
                defaultValue={""}
                reset={phoneNumber === ""}
                autoComplete="phoneNumber"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Time Zone
            </Form.Label>
            <Col sm="10">
              <TimezonePicker
                className="add-form__timezone"
                placeholder="Select timezone..."
                onChange={value => {
                  setTimezone(value);
                }}
                value={timezone}
                autoComplete="timezone"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Start Time
            </Form.Label>
            <Col sm="4">
              <TimePicker
                step={15}
                onChange={v => console.log("va", v) || setStartTime(v)}
                value={startTime}
              />
            </Col>
            <Form.Label column sm="2">
              End Time
            </Form.Label>
            <Col sm="4">
              <TimePicker
                step={15}
                onChange={v => setEndTime(v)}
                value={endTime}
              />
            </Col>
          </Form.Group>
          <Button size="lg" className="add-btn" type="submit">
            ADD
          </Button>
        </Form>
      </div>
    </Jumbotron>
  );
}

const mapDispatchToProps = { addFriend };

export default connect(null, mapDispatchToProps)(AddForm);
