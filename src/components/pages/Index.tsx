import { FormEvent, useCallback, useState } from "react";
import { TodoData } from "../../types/types-todo";
import { Button } from "../commons/Button";
import { InputText } from "../commons/InputText";
import { TodoItem } from "../usecase/todo/TodoItem";

export function PageIndex() {
  const [todos, setTodos] = useState<Map<string, TodoData>>(new Map());
  const todoList = Array.from(todos.entries());

  const handleSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const title = ev.currentTarget.todoTitle.value;
      if (!title) return;
      const id = crypto.randomUUID();
      setTodos(
        new Map(
          todos.set(id, {
            id: id,
            date: Date.now(),
            title: title,
            description: "",
          })
        )
      );
      ev.currentTarget.reset();
    },
    [todos]
  );

  function updateTodo(todo: TodoData) {
    setTodos(new Map(todos.set(todo.id, todo)));
  }

  return (
    <section className="p-2 sm:p-4 flex-1 flex flex-col gap-2 sm:gap-4">
      <form className="grid gap-[inherit]" onSubmit={handleSubmit}>
        <InputText className="w-full" placeholder="Todo..." name="todoTitle" />
        <Button type="submit">AdD</Button>
      </form>

      <article className="menu menu-compact lg:menu-normal bg-base-100 p-2 rounded-box">
        {todoList.map(([id, data], idx) => {
          return (
            <TodoItem
              key={id}
              todo={data}
              onUpdate={(updatedTodo) => updateTodo(updatedTodo)}
            >
              {data.title}
            </TodoItem>
          );
        })}
      </article>
    </section>
  );
}
