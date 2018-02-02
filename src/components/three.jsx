import React from 'react'
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import {PageHeader, Row, Col, FormControl} from 'react-bootstrap';

class Three extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.myScene = ''
    this.myCamera = ''
    this.renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
    this.state = {
      cubeRotation: new THREE.Euler()
    };

    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(this.state.cubeRotation.x + 0.01, this.state.cubeRotation.y + 0.01, 0)
      });
    };
    this.title = ''
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.title = evt.target.value
  }
  render() {
    const width = 1140
    const height = 414

    return (
      <div>
      <div className='auto'>
      <React3 mainCamera="camera"
        width={width} height={height} onAnimate={this._onAnimate}>
        <scene ref={(input) => (this.myScene = input)}>
          <perspectiveCamera ref={(input) => (this.myCamera = input)} name="camera" fov={35} aspect={width / height} near={0.1} far={1000} position={this.cameraPosition}/>
          <mesh rotation={this.state.cubeRotation}>
            <boxGeometry width={1} height={1} depth={1}/>
            <meshBasicMaterial color={'#ade'}/>
          </mesh>
        </scene>
      </React3>
      <Row>
      <Col md={4}>
      <FormControl className='pull-right' onChange={this.handleChange} ref='title' placeholder="title" />
      </Col>
      <Col md={8}>
      <a className='pull-right' onClick={(e) => this.props.addPhoto(e, this.title, this.renderer, this.myScene, this.myCamera)}>save screenshot</a>
      </Col>
      </Row>
      <br/>
      <PageHeader>feedback</PageHeader>
    </div>
    </div>);
  }
}

export default Three
