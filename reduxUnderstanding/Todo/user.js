// const initialState = {
//     todos: [],
//   };
  
//   export default function (state = initialState, action) {
//     if (action.type === "add") {
//       return {
//         ...state,
  
//         todos: [
//           ...state.todos,
//           {
//             id: Date.now(),
//             text: action.payload,
//           },
//         ],
//       };
//     }
  
//     if (action.type === "remove") {
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     } else {
//       return state;
//     }
//   }
  