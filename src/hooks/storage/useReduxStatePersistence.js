// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
//
// const useReduxStatePersistence = (key) => {
//   const dispatch = useDispatch();
//
//   useEffect(() => {
//     const savedState = localStorage.getItem(key);
//
//     if (savedState) {
//       const parsedState = JSON.parse(savedState);
//       dispatch({ type: 'RESTORE_STATE', payload: parsedState });
//     }
//   }, [dispatch, key]);
//
//   useEffect(() => {
//     const state = JSON.stringify(getReduxState()); // Замените 'getReduxState()' на ваш собственный способ получения состояния Redux
//
//     localStorage.setItem(key, state);
//   }, [key]);
//
//   return null;
// };
//
// export default useReduxStatePersistence;
