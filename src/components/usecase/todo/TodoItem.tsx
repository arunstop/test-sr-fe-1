import { forwardRef, useCallback } from "react";
import { TodoData } from "../../../types/types-todo";

export const TodoItem = forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & {
    onUpdate?: (updatedTodo: TodoData) => void;
    todo: TodoData;
  }
>(({ children, onUpdate, todo, ...props }, ref) => {
  // const handleUpdateTodo = useCallback(() => {
  //   onUpdate?.({ ...todo, done: !todo.done });
  // }, [todo]);

  return (
    <li ref={ref} {...props}>
      <a
        onClick={() => onUpdate?.({ ...todo, done: !todo.done })}
        className="flex gap-2 sm:gap-4"
      >
        <input
          type="checkbox"
          checked={!!todo.done}
          readOnly
          className="checkbox"
        />
        <span>{todo.title}</span>
      </a>
    </li>
  );
});
