import { Dimensions } from 'react-native';

/**
 * Base screen width for scaling calculations.
 * @constant {number}
 */
const BASE_SCREEN_WIDTH = 375;

/**
 * Base screen height for scaling calculations.
 * @constant {number}
 */
const BASE_SCREEN_HEIGHT = 810;

/**
 * Current screen width.
 * @constant {number}
 */
const SCREEN_WIDTH = Dimensions.get('window').width;

/**
 * Current screen height.
 * @constant {number}
 */
const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * Get the scaled width based on the base screen width.
 * @param {number} value - The value to scale.
 * @returns {number} - The scaled width.
 */
export const getWidth = (value: number): number => {
  return (SCREEN_WIDTH * value) / BASE_SCREEN_WIDTH;
};

/**
 * Get the scaled height based on the base screen height.
 * @param {number} value - The value to scale.
 * @returns {number} - The scaled height.
 */
export const getHeight = (value: number): number => {
  return (SCREEN_HEIGHT * value) / BASE_SCREEN_HEIGHT;
};

// Responsive Scaling
const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

/**
 * Scale function based on the width of the screen.
 * @param {number} size - The size to scale.
 * @returns {number} - The scaled size.
 */
const scale = (size: number): number => (width / guidelineBaseWidth) * size;

/**
 * Vertical scale function based on the height of the screen.
 * @param {number} size - The size to scale.
 * @returns {number} - The scaled size.
 */
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

/**
 * Moderate scale function with a resize factor.
 * @param {number} size - The size to scale.
 * @param {number} [factor=0.5] - The resize factor.
 * @returns {number} - The moderately scaled size.
 */
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

export { moderateScale, scale, SCREEN_HEIGHT, SCREEN_WIDTH, verticalScale };
