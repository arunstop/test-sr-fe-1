import "../../index.css";
import { useState } from "react";
import { Header } from "./Header";
import { PageIndex } from "../pages/Index";
import { TodoProvider } from "../contexts/TodoContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoProvider>
      <main className="flex flex-col min-h-screen bg-base-100 items-center">
        <Header />
        <PageIndex />
      </main>
    </TodoProvider>
  );
}

export default App;
