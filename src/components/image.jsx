import React, {Component} from 'react'
import {PageHeader, Grid, Row, Col, FormControl, Thumbnail} from 'react-bootstrap';
import {SketchField, Tools} from 'react-sketch';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {'tool': Tools.Circle}
    this.feedbackVal = ''
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
    this.changeTool = this.changeTool.bind(this);
  }

  handleChange(evt) {
    this.feedbackVal = evt.target.value
  }

  componentDidMount() {
    try {
      var src = this.props.photos.photos[this.props.id].photo
    } catch (err) {
      this.props.history.push('/')
    }
    this.refs.sketch.setBackgroundFromDataUrl(src, {
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: 'left',
      originY: 'top'
    })
  }

  handleClick() {
    this.props.saveImage(this.refs.sketch.toDataURL(), this.feedbackVal, this.props.photo)
  }

  changeTool(tool) {
    console.log(tool, this.refs.sketch)
    if( tool === 'circle'){
      this.setState({
	            tool: Tools.Circle
	    });
    } else {
      this.setState({
	            tool:  Tools.Line
	  });
    }
  }

  clearCanvas() {
    try {
      var src = this.props.photos.photos[this.props.id].photo
    } catch (err) {
      this.props.history.push('/')
    }
    this.refs.sketch.clear()
    this.refs.sketch.setBackgroundFromDataUrl(src, {
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: 'left',
      originY: 'top'
    })
  }

  render() {
    return (<Grid className='margeme'>
      <Row>
      <Col md={11}>
      <a onClick={() => this.changeTool('circle')}>circle</a>
      <a onClick={() => this.changeTool('line')}> line</a>
      </Col>
      <Col md={1}>
      <a onClick={this.clearCanvas} className="pull-right">clear</a>
      </Col>
        <Col md={12}>
          <SketchField ref='sketch' width='1140px' height='420px' tool={this.state.tool} lineColor='white' lineWidth={2}/>
        </Col>
      </Row>
      <br/>
      <FormControl onChange={this.handleChange} ref='feedback' componentClass="textarea" placeholder="write your feedback" />
      <a onClick={this.handleClick}>save</a> /
      <Link to="/"> go back</Link>
      <br/>
      <PageHeader>feedback</PageHeader>


      <Row>
       { this.props.feedback.map(item =>
        <Col key={Math.random().toString(26).slice(2)} md={4}>
          <Thumbnail src={item.photo} alt="242x200">
            <div className='wrap-it'>
            <p>{item.annotation}</p>
            </div>
          </Thumbnail>
        </Col>
        )
      }
      </Row>


    </Grid>)
  }
}
export default withRouter(ImageView)
