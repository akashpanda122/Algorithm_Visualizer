import { Swap } from "../../utils";

const BubbleSort = (array, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        array = Swap(array, j, j + 1);
      }
      arraySteps.push(array.slice());

      colorKey[j] = 2;
      colorKey[j + 1] = 2;
      colorSteps.push(colorKey.slice());
      colorKey[j] = 0;
      colorKey[j + 1] = 0;
    }
    colorKey[array.length - i - 1] = 3;
    arraySteps.push(array.slice());
    colorSteps.push(colorKey.slice());
  }
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(3);
  return;
};

export default BubbleSort;
