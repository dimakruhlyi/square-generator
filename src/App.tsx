import { Fragment, useState, useMemo } from "react";
import { COLORS_ARR, RESULT_MESSAGE } from "./shares/constants";
import type { SelectedSquare, SelectionControl } from "./types";
import {
  initSquareColors,
  isAllBlueSquaresSelected,
  isSquareSelected,
} from "./utils";

function App() {
  const [selectedSquares, setSelectedSquares] = useState<SelectedSquare[]>([]);
  const [selectionControl, setSelectionControl] = useState<SelectionControl>({
    isCorrect: false,
    isChecked: false,
  });
  const colorsValues = useMemo(() => initSquareColors(), [selectionControl]);

  function onSquareClick(index: number): void {
    setSelectedSquares((prev) => {
      const existingSquareIndex = prev.findIndex(
        (item) => item.index === index
      );
      if (existingSquareIndex !== -1) {
        prev.splice(existingSquareIndex, 1);
        return Array.from(prev);
      }

      return [...prev, { index, color: COLORS_ARR[colorsValues[index]] }];
    });
  }

  function onSubmitClick(): void {
    setSelectionControl({
      isCorrect: isAllBlueSquaresSelected(colorsValues, selectedSquares),
      isChecked: true,
    });
    setSelectedSquares([]);
  }

  return (
    <Fragment>
      <div className="square-container">
        {colorsValues.map((_, index) => (
          <div
            className={`square-item ${
              isSquareSelected(index, selectedSquares) ? "selected" : ""
            }`}
            onClick={() => onSquareClick(index)}
            style={{ background: COLORS_ARR[colorsValues[index]] }}
            key={index}
          />
        ))}
      </div>
      <button
        className="submit-button"
        onClick={onSubmitClick}
        disabled={!selectedSquares.length}
      >
        Submit
      </button>
      {selectionControl.isChecked && (
        <h3
          className={`result-message ${
            selectionControl.isCorrect ? "success" : "error"
          }`}
        >
          {RESULT_MESSAGE.get(Number(selectionControl.isCorrect))}
        </h3>
      )}
    </Fragment>
  );
}

export default App;
