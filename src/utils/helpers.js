export const Swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;

  return array;
};

export const Delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
