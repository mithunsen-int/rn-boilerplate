import { StackParamList } from '@navigators/navigators';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ScreenConfigType {
  name: keyof StackParamList; // Name of the screen
  component: React.FC<any>; // Component to render for the screen
}

export type DefaultScreenProps<T extends keyof StackParamList> = {
  navigation: NativeStackNavigationProp<StackParamList, T>; // Navigation prop for the screen
  route: RouteProp<StackParamList, T>; // Route prop for the screen
};
