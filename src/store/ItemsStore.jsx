import { createStore, createEvent, createEffect } from "effector";

export const addTodo = createEvent();

export const removeTodo = createEvent();

export const todosStore = createStore([])
  .on(addTodo, (state, todo) => [...state, todo])

  .on(removeTodo, (state, index) => state.filter((_, i) => i !== index));


  // Эффект для имитации загрузки данных
export const fetchItems = createEffect(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Item 1', 'Item 2', 'Item 3']);
      }, 1000);
    });
  });
  
  // Обновляем хранилище при успешной загрузке данных
  todosStore.on(fetchItems.doneData, (state, todos) => [...state, ...todos]);