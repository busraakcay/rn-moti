import { PixelRatio } from "react-native";
// import DeviceInfo from 'react-native-device-info';

const isTablet = false;

const tabletHorizontalBase = 900;
const phoneHorizontalBase = 600;

const tabletVerticalRatio = 0.7;
const tabletHorizontalRatio = 0.8;

const tabletBaseFontScale = 1.2;
const phoneBaseFontScale = 1.5;
const baseFontScale = isTablet ? tabletBaseFontScale : phoneBaseFontScale;

const biggerFontScaleForPhone = 2;
const biggerFontScaleForTablet = 1.5;
const biggerFontScale = isTablet
  ? biggerFontScaleForTablet
  : biggerFontScaleForPhone;

const pixelRatio = PixelRatio.get();
const pixelRatioFontScale = PixelRatio.getFontScale();
const fontScale =
  pixelRatioFontScale < baseFontScale
    ? PixelRatio.getFontScale()
    : baseFontScale;
const adjustPixelRatioForFontScale =
  pixelRatioFontScale > baseFontScale ? biggerFontScale : 1;

export {
  pixelRatio,
  fontScale,
  isTablet,
  tabletHorizontalBase,
  phoneHorizontalBase,
  tabletVerticalRatio,
  tabletHorizontalRatio,
  adjustPixelRatioForFontScale,
};
