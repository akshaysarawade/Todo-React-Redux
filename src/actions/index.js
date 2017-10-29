export function addTodo(name) {
  return {
    type: 'ADD_TODO',
    status: 'To do',
    name
  }
}

export function toggleTodo(id, status) {
  return {
    type: 'TOGGLE_TODO',
    id,
    newStatus: status
  }
}
