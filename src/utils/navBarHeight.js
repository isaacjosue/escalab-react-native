import { Dimensions, StatusBar } from "react-native";

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
// Thanks to RY_ZHENG over on StackOverflow for this solution

export const navBarHeight = SCREEN_HEIGHT - WINDOW_HEIGHT + STATUS_BAR_HEIGHT;
