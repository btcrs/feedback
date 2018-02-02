import update from 'immutability-helper';

var defaultState = {
  photos: {}
}

const photos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PHOTO':
    console.log(state)
    return update(state, {
        photos: {
          [action.id]: {
            $set: {
              'id': action.id,
              'photo': action.photo,
              'annotations': action.annotations
            }
          }
        }
      });
    default:
      return state
  }
}

export default photos
