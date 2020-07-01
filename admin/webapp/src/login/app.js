import '~/login/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Button, Col, FormControl, Row } from 'react-bootstrap';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

  };

  return (
    <Row style={{ margin: '0' }}>
      <Col
        id='login-panel-wrapper'
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 8, offset: 2 }}
        md={{ span: 6, offset: 3 }}
        xl={{ span: 4, offset: 4 }}
      >
        <Row style={{ paddingTop: '2%', textAlign: 'center' }}>
          <Col xs={12}>
            <h1>WebBasics</h1>
          </Col>
        </Row>
        <Row style={{ paddingTop: '1%' }}>
          <Col xs={3}>
            <span className='float-right' style={{ lineHeight: '35px' }}>
              Email:
            </span>
          </Col>
          <Col xs={8} md={7}>
            <FormControl
              onChange={e => setEmail(e.target.value)}
              placeholder="enter email"
              style={{ display: 'inline-block' }}
              type="email"
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: '1%' }}>
          <Col xs={3}>
            <span className='float-right' style={{ lineHeight: '35px' }}>
              Password:
            </span>
          </Col>
          <Col xs={8} md={7}>
            <FormControl
              onChange={e => setPassword(e.target.value)}
              placeholder='enter password'
              style={{ display: 'inline-block' }}
              type='password'
            />
          </Col>
        </Row>
        <Row style={{ padding: '2% 0', textAlign: 'center' }}>
          <Col xs={12}>
            <Button
              disabled={(email === '' || password === '')}
              id='login-btn'
              onClick={handleSubmit}
              type='submit'
            >
              Login
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}