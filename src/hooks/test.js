// import { useRef, useState } from "react";
// import {Animated, PanResponder, Vibration} from "react-native";
//
// export const useMessageTouch = (max) => {
//   const pan = useRef(new Animated.ValueXY()).current;
//   const panDelete = useRef(new Animated.ValueXY()).current;
//   const opacity = useRef(new Animated.ValueXY()).current;
//   const circle = useRef(new Animated.ValueXY()).current;
//
//   const [vibrate, setVibrate] = useState(true);
//
//   const setNull = () => {
//     Animated.spring(pan, {
//       toValue: { x: 0, y: 0 },
//       useNativeDriver: false,
//     }).start();
//     Animated.spring(panDelete, {
//       toValue: { x: 0, y: 0 },
//       useNativeDriver: false,
//     }).start();
//     Animated.spring(opacity, {
//       toValue: { x: 0, y: 0 },
//       useNativeDriver: false,
//     }).start();
//   }
//
//   const [panResponder, setPanResponder] = useState(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (event, gestureState) => {
//         const { dx } = gestureState;
//         if(dx < -max / 2 && vibrate) {
//           Vibration.vibrate(5);
//           setVibrate(false)
//         }
//         if (dx < -max) {
//           pan.setValue({x: -max, y: 0});
//           panDelete.setValue({x: -max / 1.7, y: 0});
//           opacity.setValue({x: 1, y: 0});
//         } else if (dx > 0) {
//           pan.setValue({x: 0, y: 0});
//           panDelete.setValue({x: 0, y: 0});
//           opacity.setValue({x: 0, y: 0});
//         } else {
//           pan.setValue({x: dx, y: 0});
//           panDelete.setValue({x: dx / 1.7, y: 0});
//           opacity.setValue({x: dx / -100, y: 0});
//         }
//       },
//       onPanResponderRelease: (event, gestureState) => {
//         const { dx } = gestureState;
//         if (dx < -max * 0.5) {
//           Animated.spring(pan, {
//             toValue: { x: -max, y: 0 },
//             useNativeDriver: false,
//           }).start();
//           Animated.spring(panDelete, {
//             toValue: { x: -max / 1.7, y: 0 },
//             useNativeDriver: false,
//           }).start();
//           Animated.spring(opacity, {
//             toValue: { x: 1, y: 0 },
//             useNativeDriver: false,
//           }).start();
//         } else if (dx > -max * 0.5) {
//           Animated.spring(pan, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: false,
//           }).start();
//           Animated.spring(panDelete, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: false,
//           }).start();
//           Animated.spring(opacity, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: false,
//           }).start();
//         } else {
//           Animated.spring(pan, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: false,
//           }).start();
//           Animated.spring(panDelete, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: false,
//           }).start();
//           Animated.spring(opacity, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: false,
//           }).start();
//         }
//       },
//       onPanResponderTerminationRequest: () => true,
//     })
//   );
//
//   return { panResponder, pan, panDelete, opacity, setNull };
// };
