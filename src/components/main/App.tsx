import "../../index.css";
import { useState } from "react";
import { Header } from "./Header";
import { PageIndex } from "../pages/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col min-h-screen bg-base-100">
      <Header />
      <PageIndex />
    </main>
  );
}

export default App;
