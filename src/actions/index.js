export const addPhoto = (id, photo, annotations) => {
  return {
    type: 'ADD_PHOTO',
    id,
    photo,
    annotations
  }
}
