import "./App.css";
import { Steps, Hints } from "intro.js-react";
import { useState } from "react";
import Comp2 from "./Comp2";
import Comp1 from "./Comp1";

function App() {
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);
  const [steps, setSteps] = useState([
    {
      element: ".hello",
      intro: "Hello step",
      position: "right",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".world",
      intro: "World step",
    },
  ]);

  const onExit = () => {
    setStepsEnabled(false);
  };

  const toggleSteps = () => {
    setStepsEnabled(!stepsEnabled);
  };

  return (
    <div className="App">
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />
      {/* <Hints enabled={hintsEnabled} hints={hints} /> */}
      <Comp1 />
      <br />
      <br />
      <Comp2 />
      <br />
      <button onClick={toggleSteps}>Toggle Steps</button>
    </div>
  );
}

export default App;
