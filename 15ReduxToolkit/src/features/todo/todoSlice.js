import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, text: "helloworld" }] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },

    removetodo: (state, action) => {
      const index = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = index;
    },

    updatetodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
    },
  },
});


export const { addtodo, removetodo, updatetodo } = todoSlice.actions;
export default todoSlice.reducer;