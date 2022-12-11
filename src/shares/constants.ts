export const BLUE_COLOR: string = "#1A24BB";

export const BLUE_SQUARES_MAX_NUMBER: number = 3;

export const SQUARES_MAX_NUMBER = 6;

export const COLORS_ARR: string[] = [
  "#E94B29",
  "#22B247",
  "#22B2AE",
  "#BB1A92",
  "#0C040A",
  "#617111",
  "#915908",
  BLUE_COLOR,
];

export const BLUE_COLOR_INDEX: number = COLORS_ARR.length - 1;

export const RESULT_MESSAGE = new Map<number, string>([
  [0, "Wooops! Your selection is wrong!"],
  [1, "Success! Your selection is correct!"],
]);
