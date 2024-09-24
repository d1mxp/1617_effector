import TodoList from "./components/TodoList";

function App() {
  return (
    <main>
      <div className="container bg-slate-200 mx-auto my-20 rounded p-4">
        <h1 className="text-4xl font-bold text-center">Список задач</h1>
        <TodoList/>
      </div>
    </main>
  );
}

export default App;
