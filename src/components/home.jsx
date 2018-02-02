import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Viewer from '../containers/viewer'

const Home = ({photos}) => (<Grid className='margeme'>
  <Row>
    <Col md={12}>
      <Viewer></Viewer>
      <ListGroup></ListGroup>
      {
        Object.entries(photos.photos).map(image => <LinkContainer key={image[1].id} to={`/image/${image[1].id}`}>
          <ListGroupItem>{image[1].id}</ListGroupItem>
        </LinkContainer>)
      }
    </Col>
  </Row>
</Grid>)

export default Home
