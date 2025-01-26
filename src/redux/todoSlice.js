import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: null },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(item =>
        item.id === state.currentTodo.id
          ? { ...item, text: action.payload }
          : item,
      );
      state.currentTodo = null;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, changeCurrentTodo, updateTodo } =
  todoSlice.actions;
