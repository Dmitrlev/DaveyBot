// import {Animated, StyleSheet, TouchableOpacity, Vibration, View, Text} from "react-native";
// import {Entypo} from "@expo/vector-icons";
// import React, {useEffect} from "react";
// import Svg, {Circle} from "react-native-svg";
//
// export const MessagesOptions = ({
//                                   panResponder,
//                                   panDelete,
//                                   opacity,
//                                   circle,
//                                   content = 'Hello, word!'
//                                 }) => {
//
//   const radius = 15;
//   const strokeWidth = 2;
//   const circumference = 2 * Math.PI * radius;
//
//   useEffect(() => {
//     if(circle === 100) Vibration.vibrate(100);
//   } , [circle])
//
//     const progress = (circle - 7) * circumference / 100;
//   const dashOffset = circumference - progress; // Расчет смещения начала обводки
//
//
//   return (
//     <Animated.View
//       {...panResponder.panHandlers}
//       style={[
//         styles.container,
//         { transform: [{ translateY: -15 }, {translateX: panDelete.x }], opacity: 1 }
//       ]}
//     >
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => console.log('hello')}
//       >
//         {/*<Text>{circle}</Text>*/}
//         <Entypo
//           name="forward"
//           size={17}
//           color='rgba(88,96,105,0.3)'
//           style={{ transform: [{ scaleX: -1 }] }}
//         />
//         <View style={styles.borderContainer}>
//           <Svg
//             width={radius * 2} height={radius * 2}
//           >
//             <Circle
//               cx={radius}
//               cy={radius}
//               r={radius - strokeWidth / 2}
//               stroke="none"
//               strokeWidth={strokeWidth}
//               fill="none"
//             />
//             <Circle
//               cx={radius}
//               cy={radius}
//               r={radius - strokeWidth / 2}
//               stroke="rgba(88,96,105,0.3)"
//               strokeWidth={strokeWidth}
//               strokeDasharray={[circumference]}
//               strokeDashoffset={dashOffset}
//               strokeLinecap="round"
//               fill="none"
//               rotation="-90" // Поворот обводки на -90 градусов
//               origin={`${radius},${radius}`} // Установка точки вращения в центр круга
//             />
//           </Svg>
//         </View>
//       </TouchableOpacity>
//     </Animated.View>
//   )
// }
//
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     right: -25,
//     flexDirection: 'row',
//     gap: 10,
//     top: '50%',
//     width: 30,
//     height: 30,
//   },
//   item: {
//     backgroundColor: '#ffffffe0',
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // borderWidth: 1,
//     // borderColor: 'rgba(88,96,105,0.3)',
//     borderRadius: 50,
//   },
//   borderContainer: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     width: '100%',
//     height: '100%',
//   }
// });
//
// // <TouchableOpacity
// //   style={styles.item}
// //   onPress={() => console.log('hello')}
// // >
// //   <Ionicons
// //     name="trash"
// //     size={17}
// //     color='#ff0000'
// //   />
// // </TouchableOpacity>
// // <TouchableOpacity
// //   style={styles.item}
// //   onPress={() => copyToClipboard(content)}
// // >
// //   <Ionicons
// //     name="copy-outline"
// //     size={17}
// //     color='rgba(88,96,105,0.3)'
// //   />
// // </TouchableOpacity>