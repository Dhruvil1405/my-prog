import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, Form } from 'react-bootstrap';

const BootstrapExample = () => {
  return (
    <div>
      <h3>BootstrapExample</h3>
      <button className='btn btn-success'>Add</button>
      <button className='btn btn-danger'>Cancel</button>
      <hr />
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </div>
  )
}

export default BootstrapExample;