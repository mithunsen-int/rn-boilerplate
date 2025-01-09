import React, { JSX } from 'react';
import { DimensionValue, View } from 'react-native';

interface SpacerProps {
  horizontal?: boolean; // Whether the spacer is horizontal
  size: DimensionValue; // Size of the spacer
}

/**
 * A spacer component to add space between elements.
 * @param {SpacerProps} props - The properties for the spacer component.
 * @returns {JSX.Element} - The rendered spacer component.
 */
const Spacer = ({ horizontal, size }: SpacerProps): JSX.Element => {
  const defaultValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
      }}
    />
  );
};

export default Spacer;
