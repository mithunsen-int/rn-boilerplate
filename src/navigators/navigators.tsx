import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/Home/HomeScreen';
import { SettingsScreen } from '@screens/Settings/SettingsScreen';
import { UsersScreen } from '@screens/Users/UsersScreen';
import * as React from 'react';

type StackParamList = {
  Home: undefined;
  Settings: { theme: string }; // Example of a screen that expects parameters
  Users: undefined;
};

interface ScreenConfigType {
  name: keyof StackParamList; // Name of the screen
  component: React.FC<any>; // Component to render for the screen
}

export type DefaultScreenProps<T extends keyof StackParamList> = {
  navigation: NativeStackNavigationProp<StackParamList, T>; // Navigation prop for the screen
  route: RouteProp<StackParamList, T>; // Route prop for the screen
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
