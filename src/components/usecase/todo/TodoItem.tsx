import { Icon } from "@iconify/react";
import { forwardRef, useCallback } from "react";
import { TodoData } from "../../../types/types-todo";
import { Button } from "../../commons/Button";

export const TodoItem = forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & {
    onUpdate?: (updatedTodo: TodoData) => void;
    onDelete?:(todoId:string)=>void;
    todo: TodoData;
  }
>(({ children, onUpdate,onDelete, todo, ...props }, ref) => {
  // const handleUpdateTodo = useCallback(() => {
  //   onUpdate?.({ ...todo, done: !todo.done });
  // }, [todo]);
  const isDone = todo.done;
  return (
    <li ref={ref} {...props} className="flex gap-2 sm:gap-4 flex-row">
      <a
        className={`flex flex-1 ${isDone ? "line-through opacity-50" : ""}`}
        onClick={() => onUpdate?.({ ...todo, done: !isDone })}
      >
        <span>{todo.title}</span>
      </a>
      <span className={`flex !rounded-full opacity-50 hover:opacity-100`} onClick={()=>onDelete(todo.id)}>
        <Icon icon="mdi:close-thick" />
      </span>
    </li>
  );
});
