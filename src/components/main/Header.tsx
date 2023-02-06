import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import { Button } from "../commons/Button";

export function Header({ children }: { children?: ReactNode }) {
  return (
    <>
      <header className="p-2 sm:p-4 sticky top-0 z-10 bg-primary max-sm:hidden h-12 flex items-center w-full justify-center">
        <div className="text-primary-content flex w-full max-w-5xl">
          <span>To Do List testing</span>
        </div>
      </header>
      <div className="fixed bottom-0 right-0 flex sm:hidden p-2">
        <Button className="btn-circle btn-primary btn-sm">
          <Icon icon="mdi:menu" className="text-lg text-black" />
        </Button>
      </div>
    </>
  );
}
