import APIDataFetch from "./APIDataFetch";
import Counter from "./Counter";
import List from "./List";
import TodoApp from "./Todo/TodoApp";

const App = () => {
  return (
    <>
      <TodoApp />
      <Counter />
      <List />
      <APIDataFetch />
    </>
  )
}

export default App;

