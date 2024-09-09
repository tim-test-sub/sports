import React from 'react';
import Connector from './connector';
import { getCalculatedStyles } from './Settings';
import { calculatePositionOfMatch } from './calculate-match-position';

const Connectors = ({ rowIndex,maxRoundHeight,rounds, style, offsetY }) => {
  const { columnWidth, canvasPadding } = getCalculatedStyles(style);
  const rowHeight = maxRoundHeight;
  const connectors= rounds.map((round, roundIdx) => {
    if (roundIdx === 0) {
      return null; //skip round 1. This looks at all previous rounds E.G round 2 and draw the lines to round 1
    }

    const currentMatchPosition = calculatePositionOfMatch(rowIndex, roundIdx, {
      canvasPadding,
      rowHeight,
      columnWidth,
      offsetY,
    });

    const previousTopMatchPosition = calculatePositionOfMatch(rowIndex-1, roundIdx - 1, {
      canvasPadding,
      rowHeight,
      columnWidth,
      offsetY,
    });

    const previousBottomMatchPosition = calculatePositionOfMatch(rowIndex+1, roundIdx - 1, {
      canvasPadding,
      rowHeight,
      columnWidth,
      offsetY,
    });

    return (
      <Connector
        previousBottomMatchPosition={previousBottomMatchPosition}
        previousTopMatchPosition={previousTopMatchPosition}
        currentMatchPosition={currentMatchPosition}
        style={style}
      />
    );
  });

  return (
    <>{connectors}</>
  );
};

export default Connectors;
