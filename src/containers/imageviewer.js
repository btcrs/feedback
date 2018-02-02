import {connect} from 'react-redux'
import ImageView from '../components/image'
import {addPhoto} from '../actions'



const mapStateToProps = (state, ownProps) => {

  return {
    photos: state.photos,
    photo: state.photos.photos[ownProps.match.params.id] ? state.photos.photos[ownProps.match.params.id] : [],
    feedback: state.photos.photos[ownProps.match.params.id] ? state.photos.photos[ownProps.match.params.id].annotations : [],
    id: ownProps.match.params.id
  }
}


const mapDispatchToProps = (dispatch, ownProps, state) => {
  return {
    saveImage: (dataUrl, feedback, photo) => {
      photo.annotations.push({'photo': dataUrl, 'annotation': feedback})
      dispatch(addPhoto(photo.id, photo.photo, photo.annotations))
      // ownProps.history.push('/')
    }
  }
}

const ImageViewer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageView)

export default ImageViewer
