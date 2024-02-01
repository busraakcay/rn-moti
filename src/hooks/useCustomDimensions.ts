import { useWindowDimensions } from "react-native";
import {
  adjustPixelRatioForFontScale,
  fontScale,
  isTablet,
  phoneHorizontalBase,
  pixelRatio,
  tabletHorizontalBase,
  tabletHorizontalRatio,
  tabletVerticalRatio,
} from "../utils";

export const useCustomDimensions = () => {
  const { width: dimensionWidth, height: dimensionHeight } =
    useWindowDimensions();
  const isTabletHorizontal = dimensionWidth > tabletHorizontalBase;
  const isPhoneHorizontal = dimensionWidth > phoneHorizontalBase;
  const isDeviceHorizontal = isTablet ? isTabletHorizontal : isPhoneHorizontal;

  const tabletRatio =
    dimensionWidth > tabletHorizontalBase
      ? tabletHorizontalRatio
      : tabletVerticalRatio;
  const width = isTablet ? dimensionWidth * tabletRatio : dimensionWidth;
  const height = isTablet ? dimensionHeight * tabletRatio : dimensionHeight;

  const spaceRatioForTablet = isTabletHorizontal ? 0.009 : 0.016;
  const spaceRatioForPhone = isPhoneHorizontal ? 0.007 : 0.012;
  const spaceRatio = isTablet ? spaceRatioForTablet : spaceRatioForPhone;

  const tabletFontSizeRatio = isTabletHorizontal ? 0.019 : 0.035;
  const phoneFontSizeRatio = isPhoneHorizontal ? 0.02 : 0.038;
  const fontSizeRatio = isTablet ? tabletFontSizeRatio : phoneFontSizeRatio;

  const fontSize =
    (fontScale * width * fontSizeRatio) / adjustPixelRatioForFontScale;

  const tabletRatioForCharts = isTabletHorizontal ? 0.5 : 0.72;
  const phoneRatioForCharts = isPhoneHorizontal ? 0.45 : 0.98;
  const ratioForCharts = isTablet ? tabletRatioForCharts : phoneRatioForCharts;

  const widthForCharts = dimensionWidth * ratioForCharts;
  const heightForCharts = dimensionHeight * ratioForCharts;

  const windowDimensions = {
    width: width,
    height: height,
  };

  const imageRatioForTablet = isTabletHorizontal ? 0.9 : 0.6;
  const imageRatioForPhone = isPhoneHorizontal ? 1.4 : 0.7;
  const imageRatio = isTablet ? imageRatioForTablet : imageRatioForPhone;

  const imageWidthRatioForTablet = isTabletHorizontal
    ? windowDimensions.width * 0.5
    : windowDimensions.width;

  const imageWidthRatioForPhone = isPhoneHorizontal
    ? windowDimensions.width * 0.3
    : windowDimensions.width;

  const imageWidthRatio = isTablet
    ? imageWidthRatioForTablet
    : imageWidthRatioForPhone;

  const imageHeightRatioForTablet = isTabletHorizontal
    ? windowDimensions.height * 0.6
    : windowDimensions.height * 0.7;

  const imageHeightRatioForPhone = isPhoneHorizontal
    ? windowDimensions.height * 0.5
    : windowDimensions.height * 0.4;

  const imageHeightRatio = isTablet
    ? imageHeightRatioForTablet
    : imageHeightRatioForPhone;

  const imageSizing = {
    imageWidth: imageWidthRatio * imageRatio,
    imageHeight: imageHeightRatio * imageRatio,
  };

  const dimensions = {
    imageSizing,
    fontSize: fontSize,
    spacing: pixelRatio * width * spaceRatio,
    fontWeight: "900",
    borderWidth: 0.7,
  };

  const appStyles = {
    text: { fontSize: dimensions.fontSize },
  };

  return {
    windowDimensions,
    dimensions,
    appStyles,
    isDeviceHorizontal,
    spaceRatio,
    ratioForCharts,
    widthForCharts,
    heightForCharts,
    fontSizeRatio,
  };
};
