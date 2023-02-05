import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import { Button } from "../commons/Button";

export function Header({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="p-2 sm:p-4 sticky top-0 z-10 bg-primary text-primary-content max-sm:hidden h-12 flex items-center w-full">
        <span>To Do List testing</span>
      </div>
      <div className="fixed bottom-0 right-0 flex sm:hidden p-2">
        <Button className="btn-circle btn-primary btn-sm">
          <Icon icon="mdi:menu" className="text-lg text-black" />
        </Button>
      </div>
    </>
  );
}
