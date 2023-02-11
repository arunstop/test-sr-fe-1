import { FormEvent, useCallback, useEffect, useState } from "react";
import { TodoDataFromApi } from "../../types/types-todo";
import { Button } from "../commons/Button";
import { InputText } from "../commons/InputText";
import { useTodos } from "../contexts/TodoContext";
import { TodoItem } from "../usecase/todo/TodoItem";

export function PageIndex() {
  const { addTodo, deleteTodo, initTodos, todos, updateTodo } = useTodos();
  const todoList = Array.from(todos.entries());

  const handleSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const title = ev.currentTarget.todoTitle.value;
      if (!title) return;
      addTodo(title);
      ev.currentTarget.reset();
    },
    [todos]
  );

  return (
    <section className="p-2 sm:p-4 flex-1 flex flex-col gap-2 sm:gap-4 w-full max-w-5xl">
      <form className="grid gap-[inherit]" onSubmit={handleSubmit}>
        <InputText className="w-full" placeholder="Todo..." name="todoTitle" />
        <Button type="submit">Add</Button>
      </form>

      <article className="menu menu-compact lg:menu-normal bg-base-100 p-2 rounded-box">
        {todoList.map(([id, data], idx) => {
          return (
            <TodoItem
              key={id}
              todo={data}
              onUpdate={(updatedTodo) => updateTodo(updatedTodo)}
              onDelete={(todoId) => deleteTodo(todoId)}
            >
              {data.title}
            </TodoItem>
          );
        })}
      </article>
    </section>
  );
}
