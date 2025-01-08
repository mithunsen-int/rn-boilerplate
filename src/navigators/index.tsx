import Navigators from '@navigators/navigators';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

/**
 * AppNavigator component that sets up the navigation container and renders the navigators.
 *
 * @returns {JSX.Element} The NavigationContainer with the nested Navigators component.
 */
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigators />
    </NavigationContainer>
  );
};

export default AppNavigator;
