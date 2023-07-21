import {useSelector} from "react-redux";

export const useTheme = () => {
  const theme = useSelector(state => state.setting.theme);
  return {theme}
}