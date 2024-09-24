import { addTodo, removeTodo, todosStore } from "../store/ItemsStore";
import { useUnit } from "effector-react";
import { useState } from "react";

const TodoList = () => {
  const todos = useUnit(todosStore);

  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="flex justify-between gap-5 my-2">
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 rounded text-center"
          placeholder="Введите задачу"
        />
        <button
          onClick={handleAddTodo}
          className="rounded-full bg-red-400 hover:bg-cyan-600 p-2 transition-colors"
        >
          Добавить
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li className="flex justify-between my-2 items-center" key={index}>
            {todo}
            <button
              className="rounded-full bg-red-400 hover:bg-cyan-600 p-2 transition-colors"
              onClick={() => removeTodo(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
