/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { Dimensions, PixelRatio } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scale = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 812;
export const normalize = (size, forHeight = false) => {
  const newSize = size * (forHeight ? scaleHeight : scale);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
const theme = {
  colors: {
    primary: '#7B337E',
    secondary: '#F0E4FA',
    inactive: '#EEF1F8',
    background: '#FFFFFF',
    grey: '#979797',
    text: '#333333',
    accent: '#FFA500',
    error: '#FF0000',
  },
  fonts: {
    regular: 'Avenir Next, sans-serif',
    bold: 'Avenir Next-Bold, sans-serif',
  },
  spacing: {
    small: normalize(8),
    medium: normalize(16),
    large: normalize(24),
  },
  button: {
    small: normalize(110),
    medium: normalize(220),
    large: normalize(330),
  },
  fullLengthButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(340),
    borderRadius: normalize(8),
    padding: normalize(12),
  },
  inputContainer: {
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(16),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(340),
    borderRadius: normalize(8),
    backgroundColor: '#FFFFFF',
    borderWidth: normalize(1),
    borderColor: '#979797',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  borderRadius: normalize(8),
};
export default theme;