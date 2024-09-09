import React from 'react';
import {View} from 'react-native';
import { Path, Svg  } from 'react-native-svg';
import { getCalculatedStyles } from './Settings';

const Connector = ({
  previousBottomMatchPosition = null,
  previousTopMatchPosition = null,
  currentMatchPosition,
  style,
}) => {
  const {
    boxHeight,
    connectorColor,
    roundHeader,
    roundSeparatorWidth,
    lineInfo,
    horizontalOffset,
    width,
  } = getCalculatedStyles(style);

  const pathInfo = () => {
    const topPadding = 0; //used to offset padding at top
    const halfwayGapBetweenColumns = 15; // if the gap between round 1 and 2 was 30 then the line jutting out would be 15
    const positionToBeCalculated = 38;
    const distanceBetweenPreviousTopPositionX = previousTopMatchPosition.x+220 -currentMatchPosition.x

    const startPoint = currentMatchPosition.x;

    // const middlePointOfMatchComponent = boxHeight / 2;
    // const previousMatch = multiplier > 0 ? previousBottomMatchPosition : previousTopMatchPosition;
    // const startPoint = `${currentMatchPosition.y +
    //   lineInfo.homeVisitorSpread * multiplier +
    //   middlePointOfMatchComponent +
    //   (roundHeader.isShown ? roundHeader.height + roundHeader.marginBottom : 0)}`;

    // const horizontalWidthLeft = currentMatchPosition.x - roundSeparatorWidth / 2 - horizontalOffset;
    // const isPreviousMatchOnSameYLevel = Math.abs(currentMatchPosition.y - previousMatch.y) < 1;
    // // const verticalHeight =
    // //   previousMatch.y + middlePointOfMatchComponent + (roundHeader.isShown ? roundHeader.height + roundHeader.marginBottom : 0);
    // // const horizontalWidthRight = previousMatch.x + width;

    // if (isPreviousMatchOnSameYLevel) {
    //   return [`M${startPoint}`, `H${horizontalWidthRight}`];
    // }

    return [
      `M${startPoint}`,
      `${currentMatchPosition.y+topPadding}`,
      `L${startPoint -halfwayGapBetweenColumns}`,
      `${currentMatchPosition.y+topPadding}`,
      `L${startPoint -halfwayGapBetweenColumns}`,
      `${distanceBetweenPreviousTopPositionX+topPadding}`,
      `L${startPoint -halfwayGapBetweenColumns*2}`,
      `${distanceBetweenPreviousTopPositionX+topPadding}`,
    ];
  };

  const { x, y } = currentMatchPosition;
  // console.log('Path Info:', pathInfo(-1).join(' '));
  // console.log('Styles:', getCalculatedStyles(style));
  // console.log('Coordinates:', currentMatchPosition, previousBottomMatchPosition, previousTopMatchPosition);

  return (
    <View style={{position: 'absolute',
    top: 0,
    left: 0,}}>
    <Svg width={1000} height={1000}>
          <Path
            d={pathInfo(1).join(' ')}
            id={`connector-${x}-${y}-${1}`}
            fill="none"
            stroke={'white'}
          />
    </Svg>
    </View>
  );
};

export default Connector;
