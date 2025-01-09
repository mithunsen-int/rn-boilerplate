import { _COLORS, _TYPO } from '@constants/index';
import React, { JSX } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type FontSize = keyof typeof _TYPO.FONT_SIZES;
type Colors = keyof typeof _COLORS.V1;
type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

interface AppTextProps extends TextProps {
  children: React.ReactNode; // The text content to display
  fontSize?: FontSize; // Font size of the text
  color?: Colors; // Color of the text
  noMargin?: boolean; // Whether to remove the bottom margin
  style?: TextStyle; // Additional styles for the text
  textAlign?: TextAlign; // Text alignment
}

/**
 * A customizable text component for the app.
 * @param {AppTextProps} props - The properties for the text component.
 * @returns {JSX.Element} - The rendered text component.
 */
export const AppText = (props: AppTextProps): JSX.Element => {
  const baseStyle = StyleSheet.create({
    textStyle: {
      ...props.style,
      color: _COLORS.V1.DARK,
      fontFamily: _TYPO.FONT.REGULAR,
      fontSize: _TYPO.FONT_SIZES.MD,
      marginBottom: props.noMargin ? 0 : 10,
      textAlign: props.textAlign,
    },
  });

  let style = baseStyle.textStyle;
  style = {
    ...style,
    fontSize: props.fontSize
      ? _TYPO.FONT_SIZES[props.fontSize]
      : _TYPO.FONT_SIZES.MD,
  };

  return <Text style={style}>{props.children}</Text>;
};
