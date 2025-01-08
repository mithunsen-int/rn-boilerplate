import { DefaultScreenProps } from 'navigators/navigators';
import React from 'react';
import { Text, View } from 'react-native';

type SettingsScreenProps = DefaultScreenProps<'Settings'>;

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ route }) => {
  const theme = route.params.theme;
  return (
    <View>
      <>
        <Text>Settings Screen</Text>
      </>
      <>
        <Text>Current theme is: {theme}</Text>
      </>
    </View>
  );
};
