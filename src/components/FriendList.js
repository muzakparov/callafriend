import React from "react";
import { Jumbotron, Container, Table } from "react-bootstrap";
import Filters from "./Filters";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faBlenderPhone,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { connect } from "react-redux";
import { currentTimeSecs } from "../utils";

function FriendList(props) {
  let friends = props.friends;  

  return (
    <Jumbotron>
      <Container>
        <Filters />
        {friends.map(friend => {
          return (
            <Card
              key={friend.id}
              id={friend.id}
              name={friend.name}
              surname={friend.surname}
              startTime={friend.startTime}
              endTime={friend.endTime}
              timezone={friend.timezone}
              phoneNumber={friend.phoneNumber}
              available={friend.available}
            />
          );
        })}
      </Container>
    </Jumbotron>
  );
}

const mapStateToProps = state => ({
  filter: state.filter,
  friends: state.friends.filter(friend => {
    let bool = true;

    if (state.filter.available) {
      bool = friend.available;
    }

    if (state.filter.search) {
      let search = state.filter.search.slice();
      const fullName = `${friend.name} ${friend.surname}`.slice();
      bool =
        bool && fullName.toLowerCase().includes(search.trim().toLowerCase());
    }

    if (state.filter.startTime && state.filter.endTime) {
      bool =
        bool &&
        currentTimeSecs(friend.startTime, friend.timezone) >=
          state.filter.startTime &&
        currentTimeSecs(friend.endTime, friend.timezone) <=
          state.filter.endTime;
    }

    return bool;
  })
});

export default connect(mapStateToProps)(FriendList);

// friends = [
//   {
//     id: 1,
//     name: "Elizabeth",
//     surname: "Olsen",
//     phoneNumber: "00996755973535",
//     timezone: "Australia/Brisbane",
//     startTime: 0,
//     endTime: 3600,
//     available: false
//   },
//   {
//     id: 2,
//     name: "Elizabeth",
//     surname: "Pat",
//     phoneNumber: "00996755973535",
//     timezone: "Australia/Brisbane",
//     startTime: "12:15",
//     endTime: "13:15",
//     available: true
//   }
// ]
