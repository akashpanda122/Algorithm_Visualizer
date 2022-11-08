import React from "react";
import { Header, Footer, Visualizer } from "./components/layout";
import ArrayContext from "./utils/ArrayContext";

import { BubbleSort } from "./algorithms/sorting";

class App extends React.Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    arraySize: 5,
    speed: 500,
    algorithm: "Bubble Sort",
    timeouts: [],
    sorting: false,
  };

  Algorithms = {
    "Bubble Sort": BubbleSort,
  };

  generateRandomArray = () => {
    this.clearColorKey();
    this.clearTimeouts();
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        arraySteps: [array],
        currentStep: 0,
        sorting: false,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateSteps = () => {
    let array = this.state.array.slice();
    let steps = this.state.arraySteps.slice();
    let colorSteps = this.state.colorSteps.slice();

    this.Algorithms[this.state.algorithm](array, steps, colorSteps);

    this.setState({
      arraySteps: steps,
      colorSteps: colorSteps,
    });
  };

  clearColorKey = () => {
    let blankKey = new Array(this.state.arraySize).fill(0);

    this.setState({
      colorKey: blankKey,
      colorSteps: [blankKey],
    });
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.setState({
      timeouts: [],
    });
  };

  play = () => {
    let steps = this.state.arraySteps.slice();
    let colorSteps = this.state.colorSteps.slice();

    this.clearTimeouts();

    let timeouts = [];
    let i = 0;

    while (i < steps.length - this.state.currentStep) {
      let timeout = setTimeout(() => {
        let currentStep = this.state.currentStep;
        this.setState({
          array: steps[currentStep],
          colorKey: colorSteps[currentStep],
          currentStep: currentStep + 1,
        });

        timeouts.push(timeout);
      }, this.state.speed * i);
      i++;
    }
    this.setState({
      timeouts: timeouts,
      sorting: true,
    });
  };

  previousStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep === 0) return;
    currentStep -= 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep >= this.state.arraySteps.length - 1) return;
    currentStep += 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  render() {
    return (
      <ArrayContext.Provider
        value={{
          array: this.state.array,
          arraySize: this.state.arraySize,
          colorKey: this.state.colorKey,
          colorSteps: this.state.colorSteps,
          arraySteps: this.state.arraySteps,
          play: this.play,
          previousStep: this.previousStep,
          nextStep: this.nextStep,
          randomArray: this.generateRandomArray,
          sorting: this.state.sorting,
        }}
      >
        <Header />
        <main className="pt-16">
          <Visualizer />
        </main>
        <Footer />
      </ArrayContext.Provider>
    );
  }
}

export default App;
