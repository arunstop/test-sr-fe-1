import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TodoDataFromApi, TTodoContext } from "../../types/types-todo";

export const TodoContext = createContext<TTodoContext | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Map<number, TodoDataFromApi>>(new Map());

  async function initTodos() {
    const load = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!load.ok) return console.error("cannot load todos");
    const newTodos = (await load.json()) as unknown as TodoDataFromApi[];
    setTodos(new Map(newTodos.map((e) => [e.id, e])));
  }
  useEffect(() => {
    let isCurrent = true;
    if (!isCurrent) return;
    initTodos();
    return () => {
      isCurrent = false;
    };
  }, []);

  function addTodo(title: string) {
    const id = Math.random() * (1000 - 200) + 200;
    setTodos(
      new Map(
        todos.set(id, {
          id: id,
          title: title,
          userId: 1,
          completed: false,
        })
      )
    );
  }

  function updateTodo(todo: TodoDataFromApi) {
    setTodos(new Map(todos.set(todo.id, todo)));
  }

  function deleteTodo(todoId: number) {
    todos.delete(todoId);
    setTodos(new Map(todos));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        initTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext) as TTodoContext;
