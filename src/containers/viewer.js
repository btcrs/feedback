import {connect} from 'react-redux'
import {addPhoto} from '../actions'
import Three from '../components/three'

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPhoto: (e, title, renderer, scene, camera) => {
      e.preventDefault()
      var img = new Image();
      renderer.render(scene, camera);
      img.src = renderer.domElement.toDataURL();
      var d = new Date();
      var n = d.toDateString();

      dispatch(addPhoto(title + " @ " + n, img.src, []))
    }
  }
}

const Viewer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Three)

export default Viewer
