import { TestInput } from "@workspace/components-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Starter</h1>
      <div className="card">
        <p>Hello stencil input</p>
        {/* Fully typed react components auto generated from the stencil component */}
        <TestInput type="number" label="Number" />
        <TestInput disabled label="Disabled" />
        <TestInput type="password" label="Password" />
      </div>
    </>
  );
}

export default App;
