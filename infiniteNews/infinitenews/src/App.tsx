import { useState } from "react";
import Nav from "./components/custom/Nav";
// import './App.css'

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Nav setValue={setCategory} />
      <div className="font-bold text-4xl">{category}</div>
    </>
  );
}

export default App;