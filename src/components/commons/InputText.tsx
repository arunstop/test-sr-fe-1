import { forwardRef } from "react";

export const InputText = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`input input-bordered max-sm:input-sm ${
        props.className || ""
      }`}
    ></input>
  );
});

