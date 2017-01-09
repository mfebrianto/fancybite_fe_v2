const todo = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW':
      return {
        display: true
      }
    case 'HIDE':
      return {
        display: false
      }

    default:
      return state
  }
}

export default todo