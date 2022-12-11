import {
  BLUE_COLOR,
  BLUE_COLOR_INDEX,
  BLUE_SQUARES_MAX_NUMBER,
  COLORS_ARR,
  SQUARES_MAX_NUMBER,
} from "../shares/constants";
import { SelectedSquare } from "../types";

export function isSquareSelected(index: number, squareArr: SelectedSquare[]) {
  return !!squareArr.find((item) => item.index === index);
}

export function initBlueSquaresColors(): number[] {
  return new Array(
    Math.floor(Math.random() * BLUE_SQUARES_MAX_NUMBER + 1)
  ).fill(BLUE_COLOR_INDEX);
}

export function initSquaresColorsExceptBlue(blueColorsArr: number[]): number[] {
  return [...new Array(SQUARES_MAX_NUMBER - blueColorsArr.length)].map(() =>
    Math.floor(Math.random() * (COLORS_ARR.length - 1))
  );
}

export function initSquareColors(): number[] {
  const blueColorsArr = initBlueSquaresColors();
  const colorsExceptBlueArr = initSquaresColorsExceptBlue(blueColorsArr);
  return colorsExceptBlueArr
    .concat(blueColorsArr)
    .sort(() => Math.random() - 0.5);
}

export function isAllBlueSquaresSelected(
  colorsArr: number[],
  selectedSquares: SelectedSquare[]
): boolean {
  const blueSquares = colorsArr.filter((item) => item === BLUE_COLOR_INDEX);
  const isAllBlueSquaresSelected =
    selectedSquares.every((item) => item.color === BLUE_COLOR) &&
    blueSquares.length === selectedSquares.length;

  return isAllBlueSquaresSelected;
}
