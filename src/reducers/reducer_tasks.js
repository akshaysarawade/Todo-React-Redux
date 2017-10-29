let initialState = [
  {
    id: 0, name: "do homework", status: "To do"
  }, {
    id: 1, name: "clean room", status: "Done"
  }, {
    id: 2, name: "wash clothes", status: "In progress"
  }, {
    id: 3, name: "play fifa", status: "Done"
  }, {
    id: 4, name: "do assignment", status: "Done"
  }, {
    id: 5, name: "buy vegetables from market", status: "To do"
  }, {
    id: 6, name: "iron office clothes", status: "In progress"
  }
];

const todos = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          name: action.name,
          status: action.status
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(task =>
        (task.id === action.id)
          ? {...task, status: action.newStatus}
          : task
      )
    default:
      return state
  }
}

export default todos
