import React from 'react'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import AddForm from './AddForm'
import FriendList from './FriendList'

function Main() {
  return (
    <Container >
      <Route path="/add">
        <AddForm />
      </Route>
      <Route exact path="/">
        <FriendList />
      </Route>
    </Container>
  )
}

export default Main
