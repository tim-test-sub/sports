import React, { useRef, useState} from 'react';
import { Text, Animated, ScrollView, View} from 'react-native';
import styled from 'styled-components/native';
import { PinchGestureHandler,PanGestureHandler, State } from 'react-native-gesture-handler';
// import Connectors from './Connectors';

const Bracket = styled.View`
  display: flex;
  flex-direction: row;
  ${({ mobileBreakpoint }) => `
    flex-direction: ${mobileBreakpoint ? 'column' : 'row'};
  `}
`;

const Round = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const HalfwayBorder = styled.View`
  position: absolute;
  top: 21px; /* Adjust the distance from the top */
  left: 6;
  width: 92%;
  height: 1px; /* Adjust the height as needed */
  background-color: #A1A1A1; /* Border color */
`;


const RoundTitle = styled.Text`
  color: #FFFFFF;
  font-weight: 400;
  text-align: center;
`;

const SeedsList = styled.View`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  list-style: none;
`;


const SeedItem = styled.View`
  color: #fff;
  width: 100%;
  height: 45px; /* Adjust the height as needed */ //TODO: ADD THIS TO SETTINGS E.G BOX HEIGHT
  background-color: #1D2232;
  padding: 0;

  position: relative;
  margin-bottom: 30px;
  overflow: hidden; /* Ensure overflow doesn't interfere with borders */

  /* Border properties */
  border-width: 0.2px;
  border-color: #D3CBC7; /* Border color */
`;

const SeedTeam = styled.View`
  padding: 0.3rem 0.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.2; // Adjust the value here
`;

const Seed = styled.View`
  padding: 1em 1.5em;
  min-width: 130px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 8px;
`;

export default Seed;

const renderTitle = (title) => <RoundTitle style={{marginBottom:10}}>{title}</RoundTitle>;

const renderSeed = ({ seed, breakpoint, centerLinePosition, roundHeight }) => {

  return (
    <>
      <Seed mobileBreakpoint={breakpoint}>
        <SeedItem style={{ top: centerLinePosition - roundHeight / 2 }}>
        <SeedTeam style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <HalfwayBorder />
          <View style={{ flexDirection: 'row', marginTop: 2, alignItems: 'center', backgroundColor: seed.teams?.[0]?.id === seed.winnerId ? '#1D2232' : '#141822', paddingTop: 2, paddingLeft: 5, paddingRight: 5 }}>
          <Text
            style={{
              color: seed.teams?.[0]?.id === seed.winnerId ? 'white' : '#707582',
              fontWeight: seed.teams?.[0]?.id === seed.winnerId ? 'bold' : 'normal',
              fontSize: 10,
              textAlignVertical: 'left',
              overflow: 'hidden',
              width: 110,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {seed.teams?.[0]?.name || '-----------'}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#10131C' }}>
              {seed.winnerId === seed.teams?.[0]?.id ? (
                  <Text style={{ color: 'gold',paddingTop: 2, paddingLeft: 2, paddingRight: 2, fontSize: 10 }}>WON </Text>
              ) : seed.winnerId !== null ? (
                  <Text style={{ color: '#617582',paddingTop: 2, paddingLeft: 2, paddingRight: 2, fontSize: 10 }}>LOST</Text>
              ) : (
                  <Text style={{ fontSize: 10, color: 'transparent' }}>EMPT</Text>
              )}
          </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', backgroundColor: seed.teams?.[1]?.id === seed.winnerId ? '#1D2232' : '#141822', paddingBottom: 3, paddingLeft: 5, paddingRight: 5 }}>
          <Text
            style={{
              color: seed.teams?.[1]?.id === seed.winnerId ? 'white' : '#707582',
              fontWeight: seed.teams?.[1]?.id === seed.winnerId ? 'bold' : 'normal',
              fontSize: 10,
              textAlignVertical: 'left',
              overflow: 'hidden',
              width: 110,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {seed.teams?.[1]?.name || '-----------'}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#10131C' }}>
              {seed.winnerId === seed.teams?.[1]?.id ? (
                  <Text style={{ color: 'gold',paddingBottom: 2, paddingLeft: 2, paddingRight: 2, fontSize: 10 }}>WON </Text>
              ) : seed.winnerId !== null ? (
                  <Text style={{ color: '#617582',paddingBottom: 2, paddingLeft: 2, paddingRight: 2, fontSize: 10 }}>LOST</Text>
              ) : (
                  <Text style={{ fontSize: 10, color: 'transparent' }}>EMPT</Text>
              )}
          </View>
          </View>
        </SeedTeam>
        </SeedItem>
      </Seed>
    </>
  );
};

  

const SingleElimination = ({
    rounds,
    rtl = false,
    roundClassName,
    bracketClassName,
    mobileBreakpoint = 0,
    renderSeedComponent = renderSeed,
    roundTitleComponent = renderTitle,
  }) => {
    // Find the round with the maximum number of seed items
    const maxSeedRound = Math.max(...rounds.map(round => round.seeds.length));
    
    //adjust this if changin seed size
    const heightAdjustment = 75; 

    // Calculate the maximum round height based on the largest round's seed count
    const maxRoundHeight = maxSeedRound * heightAdjustment; // Adjust the height factor as needed
  
    const data = rounds.map((round, roundIdx) => {
      // Calculate the current round's height based on its seed count and the maximum round height
      const roundHeight = round.seeds.length * heightAdjustment;
  
      // Calculate the center line position for the current round
      const centerLinePosition = maxRoundHeight / 2 ;
  
      return (
        <Round
          key={round.title}
          className={roundClassName}
          mobileBreakpoint={mobileBreakpoint}
          style={{
            height: roundHeight,
            marginLeft: 30,
          }}
        >
          {round.title && roundTitleComponent(round.title, roundIdx)}
          <SeedsList>
            {round.seeds.map((seed, idx) => (
              <React.Fragment key={seed.id}>
                {renderSeedComponent({
                  seed,
                  breakpoint: mobileBreakpoint,
                  roundIndex: roundIdx,
                  seedIndex: idx,
                  rounds,
                  roundHeight,
                  centerLinePosition, // Pass the center line position to the seed rendering component
                  seedHeight: heightAdjustment, // Set the seed height as needed
                })}
              </React.Fragment>
            ))}
          </SeedsList>
        </Round>
      );
    });
  
    const pinchScale = useRef(new Animated.Value(1)).current;
    const [baseScale, setBaseScale] = useState(1);
    const [lastScale, setLastScale] = useState(1);

    const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const onPanEvent = Animated.event(
      [{ nativeEvent: { translationX: pan.x, translationY: pan.y } }],
      { useNativeDriver: false }
    );
  
    const onPanHandlerStateChange = event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        pan.flattenOffset();
      }
    };

    const onPinchEvent = Animated.event(
      [{ nativeEvent: { scale: pinchScale } }],
      { useNativeDriver: false }
    );

    const onPinchHandlerStateChange = event => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        setBaseScale(lastScale);
      }
    };
  
    const scale = Animated.multiply(baseScale, pinchScale);

    return (
      <ScrollView pinchGestureEnabled={false} style={{ flex: 1 }}>
        <ScrollView horizontal style={{flex:1}} pinchGestureEnabled={false}>
          <PinchGestureHandler
              onGestureEvent={onPinchEvent}
              onHandlerStateChange={onPinchHandlerStateChange}
              style={{ flex: 1 }}
            >
              <Animated.View
                style={{
                  flex: 1,
                  transform: [
                    { scale },
                    { translateX: pan.x },
                    { translateY: pan.y },
                  ],
                }}
              >
                  <Bracket style={{ marginTop: 20}} className={bracketClassName} dir={rtl ? 'rtl' : 'ltr'} mobileBreakpoint={mobileBreakpoint}>
                    {data}
                  </Bracket>
                  {/* <Connectors rowIndex={0} maxRoundHeight={maxRoundHeight} rounds={rounds}/> */}
                </Animated.View>
          </PinchGestureHandler>
      </ScrollView>
    </ScrollView>
    );
  };
  
export {
  SingleElimination as Bracket,
  Seed,
  SeedItem,
  SeedTeam,
  renderTitle,
  renderSeed,
};