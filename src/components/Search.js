
import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

function Search() {
  return (
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button>Search</Button>
  </Form>
  )
}

export default Search
