import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => {
  return state.todos.items;
};
export const selectFilter = state => {
  return state.filter;
};
export const selectCurrentTodo = state => {
  return state.todos.currentTodo;
};

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filrer) =>
    todos.filter(todo =>
      todo.text.toLowerCase().includes(filrer.toLowerCase()),
    ),
);
