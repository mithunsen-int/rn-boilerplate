import { _COLORS } from '@constants/index';
import { DefaultScreenProps } from '@navigators/navigators';
import React, { PropsWithChildren } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type HomeScreenProps = DefaultScreenProps<'Home'>;

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? _COLORS.V1.DARK : _COLORS.V1.LIGHT,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}
    >
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}
      >
        <Section title="Navigate to Settings">
          Tap the button below to navigate to the Settings screen {'\n\n'}
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Settings', { theme: 'light' });
            }}
          >
            <Text>Navigate to the Settings</Text>
          </Pressable>
        </Section>
        <Section title="Other">
          Edit <Text style={styles.highlight}>HomeScreen.tsx</Text> to change
          this screen and then come back to see your edits.
        </Section>

        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: 'cyan',
    borderRadius: 20,
  },
});
