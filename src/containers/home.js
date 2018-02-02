import {connect} from 'react-redux'
import Home from '../components/home'


const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}

const PhotoHome = connect(
    mapStateToProps,
    null
)(Home)

export default PhotoHome
