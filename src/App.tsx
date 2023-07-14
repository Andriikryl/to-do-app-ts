import { Toaster } from "react-hot-toast";
import { AddTodo, TodoList } from "./components";

export function App() {
  return (
    <div className=" bg-[#8ecae6] w-[100%] h-[100dvh]">
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </div>
  );
}
export default App;
