export const defaultStyle = {
    width: 150,
    boxHeight: 45,
    canvasPadding: 0,
    spaceBetweenColumns: 30,
    spaceBetweenRows: 20,
    connectorColor: 'rgb(47, 54, 72)',
    connectorColorHighlight: '#DDD',
    roundHeader: {
      isShown: true,
      height: 40,
      marginBottom: 25,
      fontSize: 16,
      fontColor: 'white',
      backgroundColor: 'rgb(47, 54, 72)',
      fontFamily: '"Roboto", "Arial", "Helvetica", "sans-serif"',
      roundTextGenerator: undefined,
    },
    roundSeparatorWidth: 30,
    lineInfo: {
      separation: -13,
      homeVisitorSpread: 0.5,
    },
    horizontalOffset: 13,
    wonBywalkOverText: 'WO',
    lostByNoShowText: 'NS',
  };
  
  export const getCalculatedStyles = (style = defaultStyle) => {
    const { boxHeight, width, spaceBetweenColumns, spaceBetweenRows } = style;
    const columnWidth = width + spaceBetweenColumns;
    const rowHeight = boxHeight + spaceBetweenRows;
    return { ...style, rowHeight, columnWidth };
  };
  