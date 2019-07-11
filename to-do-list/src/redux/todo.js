
export function todo (state = {
  list: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        list: state.list.concat({name: action.value, isTrue: action.isTrue})
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        list: state.list.filter((v,idx) => action.index !== idx)
      }
    default:
      return state
  }
}