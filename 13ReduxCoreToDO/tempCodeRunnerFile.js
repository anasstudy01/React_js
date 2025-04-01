{
      ...state,
      todos: [
        ...state.todos,
        { id: Date.now(), text: action.payload, completed: false },
      ],
    };