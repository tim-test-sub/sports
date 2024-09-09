export const calculateVerticalStartingPoint = (seedIndex, seedHeight = 90, gap=60) =>
  ((150 - seedHeight) / 2) + seedIndex * seedHeight + gap;

export const columnIncrement = (columnIndex, height) => Math.pow(2, columnIndex) * height;

export const calculateHeightIncrease = (columnIndex, rowIndex, height) =>
  columnIncrement(columnIndex, height) * rowIndex;

export const calculateVerticalPositioning = ({ rowIndex:seedIndex, rowHeight: maxHeight }) => {
  return calculateVerticalStartingPoint(seedIndex, maxHeight);
};

export const calculatePositionOfMatch = (
  rowIndex,
  columnIndex,
  { canvasPadding, rowHeight, columnWidth, offsetX = 30, offsetY = 48.4 }
) => {
  const result = calculateVerticalPositioning({
    rowHeight,
    rowIndex,
  });

  return {
    x: columnIndex * columnWidth + canvasPadding + offsetX,
    y: result + canvasPadding + offsetY,
  };
};
