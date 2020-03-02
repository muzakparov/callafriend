import React, { useState } from "react";
import { Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import "react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css";
import Switch from "react-switch";
import { setFilter } from "../reducers/setFilter";
import { connect } from "react-redux";

function Filters(props) {
  const [search, setSearch] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [available, setAvailable] = useState(false);

  return (
    <div className="filters">
      <Row>
        <Col md={10}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Name, Surname ..."
              aria-label="Seach"
              aria-describedby="basic-addon1"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col md={2}>
          <Button
            variant="primary"
            block
            className="d-none d-md-block"
            onClick={() => {
              let _startTime = startTime;
              let _endTime = endTime;
              if (!startTime) {
                _startTime = 0;
              } else if (!endTime) {
                _endTime = 0;
              }

              props.setFilter({
                search,
                startTime: _startTime,
                endTime: _endTime,
                available
              });
            }}
          >
            Seach
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="start-time">start</InputGroup.Text>
            </InputGroup.Prepend>
            <TimePicker
              step={15}
              onChange={v => setStartTime(v)}
              value={startTime}
            />
          </InputGroup>
        </Col>
        <Col md={3}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="end-time">end</InputGroup.Text>
            </InputGroup.Prepend>
            <TimePicker
              step={15}
              onChange={v => setEndTime(v)}
              value={endTime}
            />
          </InputGroup>
        </Col>
        <Col md={4} sm={12} className="filters__available d-sm-block">
          <InputGroup className="mb-3 flex-nowrap ">
            <InputGroup.Prepend>
              <InputGroup.Text id="filters__timezone">
                Available:{" "}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <div className="filters__switch">
              <Switch
                onChange={() => {
                  setAvailable(prevAv => !prevAv);
                }}
                checked={available}
              />
            </div>
          </InputGroup>
        </Col>
        <Col md={2}>
          <Button
            variant="primary"
            block
            className="d-none d-md-block"
            onClick={() => {
              props.setFilter();

              setSearch("");
              setStartTime(undefined);
              setEndTime(undefined);
              setAvailable(false);
            }}
          >
            Reset
          </Button>
        </Col>
      </Row>
      <div className="d-md-none">
        <Button
          variant="primary"
          block
          onClick={() => {
            props.setFilter({
              search,
              startTime,
              endTime,
              available
            });
          }}
        >
          Seach
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setFilter: filter => {
    dispatch(setFilter(filter));
  }
});

export default connect(null, mapDispatchToProps)(Filters);
