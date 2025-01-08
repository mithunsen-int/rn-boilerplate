import { _COLORS } from '@constants/index';
import AppNavigator from '@navigators/index';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? _COLORS.V1.DARK : _COLORS.V1.LIGHT,
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[backgroundStyle, safeAreaViewStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const safeAreaViewStyle = {
  flex: 1,
  paddingBottom: 10,
};
