import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/post-auth/Home/HomeScreen';
import { SettingsScreen } from '@screens/post-auth/Settings/SettingsScreen';
import { UsersScreen } from '@screens/post-auth/Users/UsersScreen';
import { ScreenConfigType } from '@typings/core/navigators';
import * as React from 'react';

export type StackParamList = {
  Home: undefined;
  Settings: { theme: string }; // Example of a screen that expects parameters
  Users: undefined;
};

/**
 * Navigator component for the app.
 * @returns {JSX.Element} - The rendered navigator component.
 */
const Navigators = (): React.JSX.Element => {
  const Stack = createNativeStackNavigator<StackParamList>();

  const screenConfig: ScreenConfigType[] = [
    { name: 'Home', component: HomeScreen },
    { name: 'Settings', component: SettingsScreen }, // Example of a screen without a component
    { name: 'Users', component: UsersScreen },
  ];

  return (
    <Stack.Navigator initialRouteName="Home">
      {screenConfig.map((screen) => {
        const Component = screen.component;
        if (!Component) {
          console.warn(`Component for screen ${screen.name} not found`);
          return null;
        }
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={Component}
            initialParams={
              screen.name === 'Settings'
                ? { theme: 'dark' } // Example of passing parameters for Settings screen
                : undefined
            }
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Navigators;
