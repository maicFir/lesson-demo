export function addTodo(parms) {
  return {
    type: 'ADD_TODO',
    ...parms
  }
}
export function removeTodo(index) {
  return {
    type: 'REMOVE_TODO',
    index
  }
}